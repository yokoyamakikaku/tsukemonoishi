'use client'

import { useMutation } from "@tanstack/react-query"

const Login = () => {
  const mutation = useMutation({

  })

  return (
    <form action="">
      <div className="flex flex-col gap-2">
        <label htmlFor="">メールアドレス</label>
        <input type="email" />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="login-password">パスワード</label>
        <input id="login-password" type="password" />
      </div>
      <button className="bg-black text-white p-2">ログイン</button>
    </form>
  )
}


export default Login
