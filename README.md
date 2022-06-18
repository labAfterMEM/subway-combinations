# subway-combinations
サブウェイの組み合わせApp
全メニュー、全トッピング、全パンとか諸々の組み合わせで、値段計算
## 課題解決(目的)
サブウェイ　難しい
サブウェイ　注文　怖い
的なものの解決

要因は、オプション（選択肢）の多様さと、細かに聞かれて決めるオペレーション
→ユーザの「メニューを選ぶ〜注文する」を、補助する何かになってくれればいい。

## TODO
- 検索機能のバグ改善
  - 価格の設定されない有料オプションは除外する(JSON)
  - 最低糖質・kcalの計算ロジックをリザルトにて組み込み
  - その最低値を参照して、オプションのminを指定
- netlifyでデプロイ(node script)をファンクションに組み込む
  - APIの最低値を取得する
  - それと残の値を比較して、判定
  - 残があるなら、残が出るまで再検索
  - 優先度は 値段 - 糖質 - カロリーの順で、どれも超えてはいけないが、値段相応の時点で、決める

余裕あれば
- 注文方法コンポーネント / 規約コンポーネント / を仮ページに置く
  - 注文方法
    - キャラクター + コメントUI
    - パンやトッピングを選ぶUI
      - in コメント
      - select list
    - 糖質とkcal,金額のresult
  - 規約
    - 一般的なもの

ここまでやって一度レビュー会

## 課題
- そもそものリザルトの構成をどうするか

## memo
やれればピザのUXよかったやつっぽく、
選んだら、画像が変わっていく感じに画像は公式から、貰ってくる（要交渉）
https://twitter.com/masahirochaen/status/1485166403565277184

### 参考
https://saizeriya-1000yen.marusho.io/

### デザイン
https://www.figma.com/file/077J1kN5chneLHBlGGS0EE/99-kapy's-team-library?node-id=416%3A33

- add svg icon
  bread https://www.onlinewebfonts.com/icon/181709
  suger https://nukumori-icon.com/tag/%E7%A0%82%E7%B3%96/
    加工okのようなので、pngをsvgへ
  kcal https://icon-icons.com/ja/%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B3/%E6%9C%A8-%E7%81%AB/144657
