import { useState } from "react"

const TextComp = () => {
  const [text, setText] = useState("HelloWorld")

  return (
    <div className='flex items-center min-h-screen justify-center flex-col gap-4'>
      <h1 className="text-4xl text-red-500">{text}</h1>
      <button onClick={() => setText('Text changed')} className='border rounded-md border-red-500 px-4 py-2 bg-red-100 text-gray-900 hover:bg-white'>Change text</button>
    </div>
  )
}

export default TextComp