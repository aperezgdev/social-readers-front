import { Post } from "../common/Post"

const EXAMPLE_POSTS = [
  {
    userName: "Alice",
    content: "Hello, World! This is my first post. I'm so excited to be here! 😊",
    userImage: "https://randomuser.me",
    publishedAt: new Date()
  },
  {
    userName: "Bob",
    content: "Hi, there! I'm new here. I'm looking forward to meeting new people and reading interesting posts. I hope you all have a great day! 😊",
    userImage: "https://randomuser.me",
    publishedAt: new Date(new Date().getTime() -  1000 * 60 * 60) 
  },
  {
    userName: "Charlie",
    content: "Hey, everyone! I'm excited to be here. I'm looking forward to reading interesting posts and meeting new people. I hope you all have a great day! 😊",
    userImage: "https://randomuser.me",
    publishedAt: new Date(new Date().getTime() -  1000 * 20 * 60) 
  },
  {
    userName: "David",
    content: "What's up? I'm new here. I'm looking forward to reading interesting posts and meeting new people. I hope you all have a great day!",
    userImage: "https://randomuser.me",
    publishedAt: new Date(new Date().getTime() -  1000 * 60 * 60 * 24)
  },
  {
    userName: "Eve",
    content: "Good morning! I'm new here. I'm looking forward to reading interesting posts and meeting new people. I hope you all have a great day!",
    userImage: "https://randomuser.me",
    publishedAt: new Date(new Date().getTime() -  1000 * 60 * 60 * 24 * 31)
  },
  {
    userName: "Frank",
    content: "Good evening! I'm new here. I'm looking forward to reading interesting posts and meeting new people. I hope you all have a great day!",
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