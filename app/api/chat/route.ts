import OpenAI from 'openai'
import { OpenAIStream, StreamingTextResponse } from 'ai'
 
// Create an OpenAI API client (that's edge friendly!)
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})
 
// IMPORTANT! Set the runtime to edge
export const runtime = 'edge'
 
export async function POST(req: Request) {
  // Extract the `messages` from the body of the request
  const { recipe, calories, protein } = await req.json()
 
  // Ask OpenAI for a streaming chat completion given the prompt
  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    stream: true,
    messages : [
      {
        role: "user",
        content: `Please provide me a healthy recipe for ${recipe} that has a maximum of ${calories} calories and a minimum of ${protein} grams of protein. Include the list of ingredients and their macro nutrients in markdown format, instructions are not needed. Please do not go over calories under any exceptions. If the recipe is not possible, prompt the user to add more calories. If a recipe is considered to have low protein, add protein powder as a supplement to finish the recipe and fit within the calorie limit`
      }
    ]
  })
  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response)
  // Respond with the stream
  return new StreamingTextResponse(stream)
}