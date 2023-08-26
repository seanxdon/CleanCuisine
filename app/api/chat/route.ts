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
  const { bio } = await req.json();
 
  // Ask OpenAI for a streaming chat completion given the prompt
  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    stream: true,
    messages: [
      {
        role: 'user',
        content: `Create me a ${bio} recipe under 500 calories with 40 grams of protein. Only give me the macro nutirents for each ingredient`,
      },
    ],
  })
  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response)
  console.log(response)
  // Respond with the stream
  return new StreamingTextResponse(stream)
}