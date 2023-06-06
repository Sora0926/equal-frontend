# Install dependencies only when needed
FROM node:lts-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json .
COPY pnpm-lock.yaml .
RUN npm -g install pnpm
RUN pnpm install --frozen-lockfile

# Rebuild the source code only when needed
FROM node:lts-alpine AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN npm -g install pnpm
RUN pnpm build && pnpm install --production --ignore-scripts --prefer-offline

# Production image, copy all the files and run next
FROM node:lts-alpine AS runner
ENV NODE_ENV production
WORKDIR /app

# pnpm is a fast, disk space efficient package manager that uses hard links and symlinks to save space.
# https://pnpm.js.org/
RUN npm -g install pnpm

# You only need to copy next.config.js if you are NOT using the default configuration
COPY --from=builder /app/public ./public
COPY --from=builder --chown=node:node /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/pnpm-lock.yaml ./pnpm-lock.yaml

USER node
EXPOSE 3000 6006
SHELL [ "/bin/sh", "-cl" ]
CMD ["pnpm", "start"]
