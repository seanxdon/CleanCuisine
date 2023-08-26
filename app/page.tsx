'use client'
 
import { useChat } from 'ai/react'
import { useState } from 'react';
 
export default function Chat() {
  const [recipe, setRecipe] = useState("");
  const [calories, setCalories] = useState("");
  const [protein, setProtein] = useState("");

  const { messages, handleInputChange, handleSubmit } = 
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
    <div className="bg-[url('./assets/clean-cuisine-background.png')] ">
      <main className="mx-auto w-full h-screen max-w-lg flex flex-col p-2">
        <form className="my-10 flex flex-col" onSubmit={onSubmit}>
          <input
            className="rounded-md p-2 m-2 text-black"
            onChange={onChangeRecipe}
            placeholder="What are you craving today?"
          />
          <input
            className="rounded-md p-2 m-2 text-black"
            onChange={onChangeCalories}
            placeholder="Enter Calorie Limit"
          />
          <input
            className="rounded-md p-2 m-2 text-black"
            onChange={onChangeProtein}
            placeholder="Enter Protein Goal"
          />
          <button
            className="border-solid border-2 border-white p-2 m-2 rounded-md"
            type="submit"
          >
            Send
          </button>
        </form>
        <section className="mb-auto m">
          {messages.map(m => (
            <div key={m.id}>
              {m.content}
            </div>
          ))}
        </section>
      </main>
    </div>
  )
}