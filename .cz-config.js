'use strict';
module.exports = {
  types: [
    {
      value: 'feat',
      name: 'feat:     新機能',
      title: 'Features'
    },
    {
      value: 'fix',
      name: 'fix:      バグやタイポなどの修正',
      title: 'Bug Fixes'
    },
    {
      value: 'hotfix',
      name: 'hotfix:   致命的で緊急なバグ修正',
      title: 'Critical hotfix'
    },
    {
      value: 'add',
      name: 'add:      新規（ファイル）機能追加',
      title: 'New Features'
    },
    {
      value: 'update',
      name: 'update:   機能修正（バグではない）',
      title: 'Updates'
    },
    {
      value: 'change',
      name: 'change:   仕様変更',
      title: 'Changes'
    },
    {
      value: 'clean',
      name: 'clean:    整理（リファクタリング等）',
      title: 'Cleaning'
    },
    {
      value: 'disable',
      name: 'disable:  無効化（コメントアウト等）',
      title: 'Disabling'
    },
    {
      value: 'remove',
      name: 'remove:   削除（ファイル）',
      title: 'Removing'
    },
    {
      value: 'upgrade',
      name: 'upgrade:  バージョンアップ',
      title: 'Upgrading'
    },
    {
      value: 'revert',
      name: 'revert:   変更取り消し',
      title: 'Reverts'
    },
    {
      value: 'UI',
      name: 'UI:       UIやスタイルの更新',
      title: 'UI'
    },
    {
      value: 'docs',
      name: 'docs:     ドキュメントのみの変更',
      title: 'Documentation'
    },
    {
      value: 'style',
      name: 'style:    スタイリングに関わる変更',
      title: 'Styles'
    },
    {
      value: 'texts',
      name: 'texts:    文字や文章の更新',
      title: 'Text and literals'
    },
    {
      value: 'i18n',
      name: 'i18n:     国際化',
      title: 'Internationalization'
    },
    {
      value: 'typo',
      name: 'typo:     タイプミスの修正',
      title: 'Typos'
    },
    {
      value: 'pref',
      name: 'pref:     パフォーマンスの改善',
      title: 'Performance Improvements'
    },
    {
      value: 'refactor',
      name: 'refactor: リファクタリングのための変更\n            （機能追加やバグ修正を含まない変更）',
      title: 'Code Refactoring'
    },
    {
      value: 'perf',
      name: 'perf:     パフォーマンスの改善のための変更',
      title: 'Performance Improvements'
    },
    {
      value: 'ux',
      name: 'ux:       ユーザーエクスペリエンス/ユーザビリティの改善',
      title: 'UX'
    },
    {
      value: 'test',
      name: 'test:     不足テストの追加や既存テストの修正',
      title: 'Tests'
    },
    {
      value: 'config',
      name: 'config:   設定の追加や変更',
      title: 'Configuration'
    },
    {
      value: 'build',
      name: 'build:    ビルドシステムや外部依存に関する変更\n           （スコープ例: gulp, broccoli, npm）',
      title: 'Builds'
    },
    {
      value: 'ci',
      name: 'ci:       CI用の設定やスクリプトに関する変更\n           （スコープ例:Travis, Circle, BrowserStack, SauceLabs)',
      title: 'CI'
    },
    {
      value: 'chore',
      name: 'chore:    その他の変更\n           （補助ツール、ドキュメント生成などのソースやテストの変更を含まない変更）',
      title: 'Chores'
    },
    {
      value: 'WIP',
      name: 'WIP:      作業中',
      title: 'WIP'
    }
  ],
  scopes: [
    { name: '*' },
    { name: 'admin' },
    { name: 'exampleScope' },
    { name: 'changeMe' },
    { name: 'readme' },
    { name: 'contributing' },
    { name: 'license' },
    { name: 'changelog' },
    { name: 'docs' },
    { name: 'app' },
    { name: 'config' },
    { name: 'core' },
    { name: 'db' },
    { name: 'i18n' },
    { name: 'lib' },
    { name: 'model' },
    { name: 'route' },
    { name: 'schema' },
    { name: 'server' },
    { name: 'service' },
    { name: 'style' },
    { name: 'test' },
    { name: 'util' },
    { name: 'view' }
  ],
  // it needs to match the value for field type. Eg.: 'fix'
  scopeOverrides: {
    fix: [
      { name: 'merge' },
      { name: 'e2eTest' },
      { name: 'unitTest' }
    ]
  },
  // ==== 7つのルール ====
  // 1. タイトルの後は1行空けて本文を書く
  // 2. タイトルを50字以内におさめる
  // 3. タイトルの文頭を大文字にする
  // 4. タイトルの文末にピリオドを付けない
  // 5. タイトルは命令形で記述する
  // 6. 本文は1行あたり72字以内におさめる
  // 7. 本文ではどのようにではなく何をとなぜを説明する
  messages: {
    type: 'コミットする変更タイプを選択:\n',
    scope: '変更内容のスコープ(例:コンポーネントやファイル名)(optional):\n',
    customScope: '変更内容のスコープ(例:コンポーネントやファイル名)(optional):\n',
    subject: '変更内容を要約した本質的説明:\n',
    body: '変更内容の詳細（"|"で改行）(optional):\n',
    breaking: '破壊的変更についての記述(optional):\n',
    footer: '関連issueを追記 (例:"fix #123", "re #123")(optional):\n',
    confirmCommit: 'このコミット内容でよろしいですか?'
  },
  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix']
};
