type PostProps = {
    userName: string;
    userImage: string;
    content: string;
}


export const Post = ({userName, content} : PostProps) => {
  return (
    <article className="grid grid-cols-[auto_1fr] auto-cols-max px-4 py-2 w-[600px]">
      <div className="rounded-full bg-gray-400 w-12 h-12"></div>
      <h3 className="font-semibold px-4">{userName}</h3>
      <p className="col-start-2 -mt-4 px-4">{content}</p>
      <div className="col-start-2 px-4">
        asaaaaaaaasdasdasdasadadsdsasasdas
      </div>
    </article>
  )
}