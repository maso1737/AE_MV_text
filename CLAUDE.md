# CLAUDE.md — AE_MV_text（AE リリックMV制作講座サイト）

「After Effects リリックMV制作講座（全6回）」の Web スライド教材。
静的サイト（ビルド不要・素の HTML/CSS/JS）で、GitHub Pages で公開している。

- 公開URL: https://maso1737.github.io/AE_MV_text/
- リポジトリ: https://github.com/maso1737/AE_MV_text （`main` ブランチが公開ソース）

## 全体の流れ（ページ遷移）

```
index.html（TOP：リリックMVオープニング動画）
        │  最後の「スタートページへ GO! ▸」ボタン
        ▼
slides.html（講座の目次／スタートページ）
        │  第1〜6回のリンク
        ▼
第N回 *.html（各回スライド）
        │  最終スライドの「◂ スライド一覧へ戻る」ボタン
        ▼
   slides.html へ戻る
```

## ファイル構成（サイトが実際に使うもの）

| ファイル / フォルダ | 役割 |
|---|---|
| `index.html` | TOPページ。リリックMVオープニングのキネティックタイポ動画（自作の x-dc/React ランタイム）。46秒ループ |
| `slides.html` | 講座の目次ページ。第1〜6回へのリンク。自己完結（外部CSS/JSなし、インラインstyle） |
| `第1回〜第6回 *.html` | 各回のスライドデッキ。`deck.css` + `deck-stage.js` + `deck-init.js` を共有 |
| `deck.css` | 各回スライド共通スタイル。CSS変数（`--grad-spot` `--gold` `--mono` 等）を自己定義 |
| `deck-stage.js` | `<deck-stage>` カスタム要素。1920×1080 を自動スケール、1枚ずつ表示、←/→ でスライド送り。Shadow DOM |
| `deck-init.js` | 各スライドのフッター連番（`.fc-cur` / `.fc-tot`）を打刻 |
| `assets/` | 各回スライドで使う画像（`*.jpg`）。**サイトで参照中のものだけ**を残している |
| `AE_MV_text_Lyric-animation/` | index.html（TOP動画）が使う資産のみを保持：`support.js`・`_ds/`（デザインシステム）・`media/`（eye/jelly1/jelly2/stage/char.png） |
| `_済/` | サイトで未使用の素材・元データ・バックアップの退避先（削除ではなく保管） |

## 触るときの注意

- **ビルド不要**。ファイルを直接編集 → コミット → push で GitHub Pages に反映（反映に数分かかることがある）。
- **相対パスに注意**。`index.html` は TOP動画の資産を `AE_MV_text_Lyric-animation/...` 経由で参照する。動画側の素材は必ずこのプレフィックス付きで書く。
- **各回スライドの「戻る」ボタン**は各ファイルの最終スライド（宿題/Outro）内の `<a href="slides.html" class="anim d4" ...>`。`deck-stage.js` は `a[href]` をインタラクティブ要素として扱うため、クリックでスライド送りされず正しく遷移する。
- **デッキのスライドを増減**したら、フッター連番は `deck-init.js` が自動で振り直す（手動修正不要）。
- **assets/ から画像を消す/移す前に** `grep -rl "ファイル名" *.html deck.css` で参照有無を確認する。未参照のものだけ `_済/` へ。
- **`_済/` は消さない**。元データ（pptx・元画像・スクショ・アニメーション composer ソース `*.dc.html` 等）の保管場所。

## ユーザーについて（このプロジェクト固有）

- アナログ寄りのデザイナー。コードは直接いじらない前提。検証・動作確認は Claude 側の責任（ユーザー共通ルール `param-check` に準拠）。
- 日本語でやり取りする。
