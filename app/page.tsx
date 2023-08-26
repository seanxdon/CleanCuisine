'use client'
 
import { useChat } from 'ai/react'
import { ChangeEvent, useState } from 'react'
 
export default function Chat() {
  const [recipe, setRecipe] = useState('');
  const [calories, setCalories] = useState('');
  const [protein, setProtein] = useState('');

  const handleRecipeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setRecipe(event.target.value);
  };
  const handleCalorieChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCalories(event.target.value);
  };
  const handleProteinChange = (event: ChangeEvent<HTMLInputElement>) => {
    setProtein(event.target.value);
  };
  const { handleSubmit, handleProteinChange, messages } =
  useChat({
    body: {
      recipe,
      calories,
      protein,
    },
    // onResponse() {
    //   scrollToBios();
    // },
  });

  const handleProteinChange = (event: ChangeEvent<HTMLInputElement>) => {
    setProtein(event.target.value);
  };

const onSubmit = (e: any) => {
  setRecipe(recipe);
  setCalories(calories);
  setProtein(protein);
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
          id="recipe"
          name="recipe"
          onChange={handleRecipeChange}
          value={recipe}
          placeholder="What are you craving today"
        />
        <input
          className="rounded-md p-2 text-black"
          id="calories"
          name="calories"
          onChange={handleCalorieChange}
          value={calories}
          placeholder="CALS"
        />
        <input
          className="rounded-md p-2 text-black"
          id="protein"
          name="protein"
          onChange={handleProteinChange}
          value={protein}
          placeholder="P"
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