export default function LoadMoreButton ({
  isFetching,
  onClick,
}: {
  onClick: () => any
  isFetching: boolean
}) {
  return (
    <button
      className="p-4 text-lg text-center w-full hover:bg-gray-100 rounded"
      disabled={isFetching} onClick={onClick}>
    {isFetching ? (
      <>読み込み中</>
    ) : (
      <>さらに記事を見る</>
    )}
  </button>
  )
}
