import { LikeIcon } from "./LikeIcon";

type PostProps = {
    userName: string;
    userImage: string;
    content: string;
    publishedAt: Date;
}

const timeSince = (date: Date) => {
    const now = new Date()
    const seconds = Math.floor((now.getTime() - date.getTime()) / 1000)
    let interval = seconds / 3600

    if (interval == 0) {
        return `Just now`
    }

    if (interval < 1) {
        interval = Math.floor(seconds / 60)
        return `${Math.floor(seconds / 60)} m`
    }

    if (interval >= 720) {
        interval = Math.floor(interval / 720)
        return `${interval} mon`
    }
    
    if (interval >= 24) {
        interval = Math.floor(interval / 24)
        return `${interval} d`
    }

    if (interval >= 8760) {
        interval = Math.floor(interval / 8760)
        return `${interval} y`
    }

    interval = Math.floor(interval)
    return `${interval} h`
}


export const Post = ({userName, content, publishedAt} : PostProps) => {
  return (
    <article className="grid grid-cols-[auto_1fr_1fr] bg-white auto-cols-max px-6 py-4 w-[600px]">
      <div className="rounded-full bg-gray-300 w-12 h-12"></div>
      <h3 className="font-semibold px-4">{userName}</h3>
      <span className="text-gray-300 font-light text-right text-sm">{timeSince(publishedAt)}</span>
      <p className="col-start-2 col-span-3 -mt-6 px-4">{content}</p>
    </article>
  )
}