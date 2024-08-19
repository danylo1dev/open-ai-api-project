import { OpenAI } from "openai";
import "dotenv/config";
console.log(process.env.OPENAI_API_KEY);
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function main() {
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        content: "How tall is mount Everest",
      },
    ],
  });
  console.log(response.choices[0].message.content);
}
main();
