'use client'
 
import { useChat } from 'ai/react'
import { useState } from 'react';
import './styles/global.css';
import Header from '@/components/Header';
 
export default function Chat() {
  const [recipe, setRecipe] = useState("");
  const [calories, setCalories] = useState("");
  const [protein, setProtein] = useState("");
  const [disabled, setDisabled] = useState(false);

  const { messages , handleInputChange, handleSubmit } = 
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
    setDisabled(!disabled);
  };

  return (
    <div className="bg-repeat bg-[url('./assets/clean-cuisine-background.png')] ">
    <Header />
      <main className="mx-auto w-full h-screen max-w-lg flex flex-col p-2">
        <form className="my-10 flex flex-col" onSubmit={onSubmit}>
          <input
            className="rounded-md p-2 m-2 text-black"
            type="text"
            maxLength={100}
            onChange={onChangeRecipe}
            placeholder="What are you craving today?"
          />
          <input
            className="rounded-md p-2 m-2 text-black"
            type="number"
            max={9999}
            onChange={onChangeCalories}
            placeholder="Enter Calories "
          />
          <input
            className="rounded-md p-2 m-2 text-black"
            type="number"
            max={999}
            onChange={onChangeProtein}
            placeholder="Enter Protein (g)"
          />
          <button
            className="border-none bg-yellow-400 hover:bg-yellow-500 p-2 m-2 rounded-md"
            type="submit"
          >
            Send
          </button>
        </form>
        <section className="mb-auto m">
          {messages.map(m => (
            <div className="res md:max-h-screen bg-white text-black rounded-md p-5 m-2 " key={m.id}>
              {m.content}
            </div>
          ))
          }
        </section>
      </main>
    </div>
  )
}