import { useState } from "react"

const MAX_CHARACTERS = 280

export const PostComposer = () => {
    const [tweet, setTweet] = useState('')

  const handleTweetChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTweet(e.target.value)
  }

    const remainingCharacters = MAX_CHARACTERS - tweet.length
    const isOverLimit = remainingCharacters < 0
    const isButtonDisabled = tweet.length === 0 || isOverLimit

    return (
        <div className="max-w-2xl mx-auto p-4 rounded-lg shadow bg-white">
      <div className="flex space-x-4">
        <div className="bg-gray-300 rounded-full w-14 h-14"></div>
        <div className="flex-grow">
          <textarea
            placeholder="Write a book review!"
            value={tweet}
            onChange={handleTweetChange}
            className="w-full p-2 text-lg resize-none border-2 border-opacity-65 border-white focus:ring-0 focus:outline-none focus:border-gray-500"
            rows={3}
          />
          <div className="flex justify-between items-center mt-2">
            <span 
              className={`text-sm ${
                isOverLimit 
                  ? 'text-red-500' 
                  : remainingCharacters <= 20 
                    ? 'text-yellow-500' 
                    : 'text-gray-500'
              }`}
            >
              {remainingCharacters}
            </span>
            <button 
              disabled={isButtonDisabled}
              className={`px-4 py-2 rounded-full ${
                isButtonDisabled 
                  ? 'bg-gray-100 cursor-not-allowed' 
                  : 'bg-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              Post it!
            </button>
          </div>
        </div>
      </div>
    </div>
    )
}