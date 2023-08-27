'use client'
 
import { useChat } from 'ai/react'
import { useState } from 'react';
import './styles/global.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
 
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
    console.log("Request Successful");
    handleSubmit(e);
    setDisabled(!disabled);
  };

  return (
    <div className="bg-[url('./assets/clean-cuisine-background.png')] bg-repeat">
    <Header />
      <main className="mx-auto w-full h-screen max-w-lg flex flex-col p-2">
        <form className="my-10 flex flex-col" onSubmit={onSubmit}>
          <input
            className="rounded-md p-2 m-2 text-black"
            onChange={onChangeRecipe}
            placeholder="What are you craving today?"
            disabled={disabled}
          />
          <input
            className="rounded-md p-2 m-2 text-black"
            onChange={onChangeCalories}
            placeholder="Enter Calorie Limit"
            disabled={disabled}
          />
          <input
            className="rounded-md p-2 m-2 text-black"
            onChange={onChangeProtein}
            placeholder="Enter Protein Goal"
            disabled={disabled}
          />
          <button
            className="border-none bg-yellow-400 p-2 m-2 rounded-md"
            type="submit"
            disabled={disabled}
          >
            Send
          </button>
        </form>
        <section className="mb-auto m">
          {messages.map(m => (
            <div className="res mx-100 bg-white text-black rounded-md p-5 m-2 " key={m.id}>
              {m.content}
            </div>
          ))
          }
        </section>
      </main>
      <Footer />
    </div>
  )
}