import { Post } from "../common/Post"

const EXAMPLE_POSTS = [
  {
    userName: "Alice",
    content: "Hello, World!",
    userImage: "https://randomuser.me",
    publishedAt: new Date()
  },
  {
    userName: "Bob",
    content: "Hi, there!",
    userImage: "https://randomuser.me",
    publishedAt: new Date(new Date().getTime() -  1000 * 60 * 60) 
  },
  {
    userName: "Charlie",
    content: "Hey, everyone!",
    userImage: "https://randomuser.me",
    publishedAt: new Date(new Date().getTime() -  1000 * 20 * 60) 
  },
  {
    userName: "David",
    content: "What's up?",
    userImage: "https://randomuser.me",
    publishedAt: new Date(new Date().getTime() -  1000 * 60 * 60 * 24)
  },
  {
    userName: "Eve",
    content: "Good morning!",
    userImage: "https://randomuser.me",
    publishedAt: new Date(new Date().getTime() -  1000 * 60 * 60 * 24 * 31)
  },
  {
    userName: "Frank",
    content: "Good evening!",
    userImage: "https://randomuser.me",
    publishedAt: new Date(new Date().getTime() -  1000 * 60 * 60 * 24 * 366)
  }
]

export const PostScrollList = () => {
  return (
    <div className="flex flex-col items-center space-y-4 my-4">
      {EXAMPLE_POSTS.map((post, index) => (
        <Post key={index} {...post} />
      ))}
    </div>
  )
}