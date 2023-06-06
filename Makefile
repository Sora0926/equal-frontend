up:
	docker compose up -d --build
down:
	docker compose down --rmi all --volumes --remove-orphans
shell:
	docker compose exec app /bin/bash
status:
	docker compose ps
logs:
	docker compose logs app

kill:
	kill -9 $(lsof -t -i:8080)
