'use client'
 
import { useChat } from 'ai/react'
import { useState } from 'react'
 
export default function Chat() {
  const [bio, setBio] = useState('');

  const { input, handleInputChange, handleSubmit, messages } =
    useChat({
      body: {
        bio,
      },
    });

  const onSubmit = (e: any) => {
    setBio(input);
    handleSubmit(e);
    console.log(input)
  };
 
  return (
    <main className="mx-auto w-full h-screen max-w-lg p-24 flex flex-col">
      <section className="mb-auto m">
        {messages.map(m => (
          <div className="mb-4" key={m.id}>
            {m.content}
          </div>
        ))}
      </section>
      <form className="flex space-x-4" onSubmit={onSubmit}>
        <input
          className="rounded-md p-2 text-black"
          id="recipe"
          name="recipe"
          onChange={handleInputChange}
          value={input}
          placeholder="What are you craving today"
        />
        <button
          className="border-solid border-2 border-white p-2 rounded-md"
          type="submit"
        >
          Send
        </button>
      </form>
    </main>
  )
}