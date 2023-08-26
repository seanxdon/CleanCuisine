'use client'
 
import { useChat } from 'ai/react'
import { useState } from 'react';
 
export default function Chat() {
  const [recipe, setRecipe] = useState("");
  const [calories, setCalories] = useState("");
  const [protein, setProtein] = useState("");

  const { messages, input, handleInputChange, handleSubmit } = 
  useChat({
    body: {
      recipe: recipe,
      calories: calories,
      protein: protein,
    }
  })

  const onChangeRecipe = (e: any) => {
    setRecipe(e.target.value)
    handleInputChange(e)
  }

  const onChangeCalories = (e: any) => {
    setCalories(e.target.value);
    handleInputChange(e)
  }

  const onChangeProtein = (e: any) => {
    setProtein(e.target.value);
    handleInputChange(e)
  }
  
  const onSubmit = (e: any) => {
    handleSubmit(e);
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
          onChange={onChangeRecipe}
          placeholder="Say something..."
        />
        <input
          className="rounded-md p-2 text-black"
          onChange={onChangeCalories}
          placeholder="Say something..."
        />
        <input
          className="rounded-md p-2 text-black"
          onChange={onChangeProtein}
          placeholder="Say something..."
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