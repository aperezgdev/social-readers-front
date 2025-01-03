type CommentIconProps = {
  count: number
}

export const CommentIcon = ({count}: CommentIconProps) => {
  return (
    <div className="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" className="mx-2 cursor-pointer transition hover:fill-gray-500 stroke-gray-500" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
      <span className="text-center text-sm text-gray-500">{count}</span>
    </div>
  )
}