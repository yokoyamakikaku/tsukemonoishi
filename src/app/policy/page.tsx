import MarkdownRenderer  from "@/components/MarkdownRenderer"

const contents = `
## 漬物石 プライバシーポリシー

**最終更新日**: 2023年10月22日

このプライバシーポリシーは、横山企画（以下「運営者」という）が運営する「漬物石」における個人情報の取り扱いについて説明します。運営者は、お客様のプライバシーを尊重し、お客様の個人情報を適切に保護するための措置を講じています。

### 1. 収集する個人情報

運営者は、以下のような場合にお客様の個人情報を収集することがあります。

- お客様が運営者の有料コンテンツに登録する際
- お問い合わせや資料請求の際
- キャンペーンやアンケートに回答する際

収集する情報は、お名前、メールアドレス、住所、支払情報、アクセス記録などが含まれますが、これに限定されるものではありません。

### 2. 個人情報の使用目的

運営者は、収集した個人情報を以下の目的で使用します。

- お客様からのお問い合わせに対応するため
- 運営者のサービスを提供、改善するため
- 新サービス、キャンペーンなどの情報を通知するため
- 使用状況の解析やマーケティング活動のため

### 3. 個人情報の第三者への提供

運営者は、法令に基づく場合やお客様の同意を得た場合を除き、収集した個人情報を第三者に提供することはありません。

### 4. クッキー（Cookie）の使用

当サイトは、ユーザーの利便性向上やサービス改善のため、クッキーを使用しています。クッキーの設定変更や拒否については、お使いのブラウザの設定から行うことができますが、当サイトの一部機能が正常に動作しない場合があります。

### 5. 個人情報の安全管理

運営者は、お客様の個人情報の紛失、改ざん、漏洩などを防止するための適切なセキュリティ対策を実施しています。

### 6. プライバシーポリシーの変更

運営者は、必要に応じて、このプライバシーポリシーを変更することがあります。大幅な変更がある場合は、当サイト上でお知らせします。

### 7. お問い合わせ

個人情報の取り扱いに関するお問い合わせは、以下の窓口までご連絡ください。

[問い合わせフォーム](https://docs.google.com/forms/d/e/1FAIpQLScHWg6hovlNCIct6k30laZWlEBfutpYcoljjx1067xdHhtaGQ/viewform)

`

const PolicyPage = () => {
  return (
    <div>
      <MarkdownRenderer markdown={contents} />
    </div>
  )
}

export default PolicyPage
