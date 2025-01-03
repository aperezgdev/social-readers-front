type LikeIconProps = {
  active: boolean
  count: number
}

export const LikeIcon = ({active, count}: LikeIconProps) => {
  return (
    <div className="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" className={`mx-2 ${active ? 'fill-red-600  hover:fill-gray-400 ' : 'fill-gray-400 hover:fill-red-600'} transition cursor-pointer`} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
      <span className="text-center text-sm text-gray-500">{count}</span>
    </div>
  )
}