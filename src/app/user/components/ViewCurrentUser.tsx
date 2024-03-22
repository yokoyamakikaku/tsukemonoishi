'use client';

import { useRouter } from "next/navigation";

import { useGetProfileQuery, useSignOutMutation } from "@/hooks/auth";
import Button from "@/components/Button";

export default function ViewCurrentUser() {
  const router = useRouter();
  const query = useGetProfileQuery();
  const mutation = useSignOutMutation({
    onSuccess() {
      router.replace('/');
    }
  });

  return (
    <div>
      <h1 className="text-2xl">ユーザー</h1>
      status: {query.status}
      {query.isError && (
        <div>
          {query.error.message}
        </div>
      )}
      {query.isSuccess && (
        <div>
          <div>
            <div>ID</div>
            <div>{query.data?.id}</div>
          </div>
          <div>
            <div>名前</div>
            <div>{query.data?.name}</div>
          </div>
          <div>
            <div>メールアドレス</div>
            <div>{query.data?.email}</div>
          </div>
          <button>ログアウト</button>
        </div>
      )}
      <div>
        <Button onClick={() => mutation.mutate()}>
          ログアウト
        </Button>
      </div>
    </div>
  );
}
