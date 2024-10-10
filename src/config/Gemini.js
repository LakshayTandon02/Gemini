/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

// import {
//     GoogleGenerativeAI,
//     HarmCategory,
//     HarmBlockThreshold,
//   } from "@google/generative-ai";
//   const apikey = "AIzaSyBIEo_f3HAL-x8rZ4Ur0hG30C-6HqRr-4Q";

  
//   const apiKey = process.env.GEMINI_API_KEY;
//   const genAI = new GoogleGenerativeAI(apiKey);
  
//   const model = genAI.getGenerativeModel({
//     model: "gemini-1.5-flash",

//   });
  
//   const generationConfig = {
//     temperature: 1,
//     topP: 0.95,
//     topK: 64,
//     maxOutputTokens: 8192,
//     responseMimeType: "text/plain",
//   };
  
//   async function run(Prompt) {
//     const chatSession = model.startChat({
//       generationConfig,
//    // safetySettings: Adjust safety settings
//    // See https://ai.google.dev/gemini-api/docs/safety-settings
//       history: [
//       ],
//     });
  
//     const result = await chatSession.sendMessage(Prompt);
//     console.log(result.response.text);
//   }
  
//    export default run;




// import {
//     GoogleGenerativeAI,
//     HarmCategory,
//     HarmBlockThreshold,
//   } from "@google/generative-ai";

//   const apiKey = process.env.GEMINI_API_KEY;
//   const genAI = new GoogleGenerativeAI(apiKey);
//   const apikey = "AIzaSyBIEo_f3HAL-x8rZ4Ur0hG30C-6HqRr-4Q";
  

//   const modelName = "models/gemini-1.5-flash";
  
//   const generationConfig = {
//     temperature: 1,
//     topP: 0.95,
//     topK: 64,
//     maxOutputTokens: 8192,
//     responseMimeType: "text/plain",
//   };
  
//   async function run(Prompt) {
//     try {
//       const model = await genAI.getModel({ name: modelName });
  
//       const chatSession = model.startChat({
//         generationConfig,
//         history: [],
//       });
  
//       const result = await chatSession.sendMessage(Prompt);
//       console.log(result.response);
//     } catch (error) {
//       console.error("Error in run function:", error);
//     }
//   }
  
//   export default run;




// import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";

// const apiKey = process.env.GEMINI_API_KEY ||  "AIzaSyBIEo_f3HAL-x8rZ4Ur0hG30C-6HqRr-4Q";
// const genAI = new GoogleGenerativeAI({ apiKey });


// const generationConfig = {
//   temperature: 1,
//   topP: 0.95,
//   topK: 64,
//   maxOutputTokens: 8192,
//   responseMimeType: "text/plain",
// };

// async function run(Prompt) {
//   try {
   
//     const chatSession = await genAI.startChat({
//       model: "models/gemini-1.5-flash",
//       generationConfig,
//       history: [],
//     });

//     const result = await chatSession.sendMessage(Prompt);
//     console.log(result.response);
    
//   } catch (error) {
//     console.error("Error in run function:", error);
//   }
// }

// export default run;

  

import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize the API key securely
const apiKey = process.env.GEMINI_API_KEY || "AIzaSyBIEo_f3HAL-x8rZ4Ur0hG30C-6HqRr-4Q";
const genAI = new GoogleGenerativeAI({ apiKey });

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run(Prompt) {
  try {
    // Using generateText (or a similar completion function)
    const result = await genAI.generateText({
      model: "models/gemini-1.5-flash",
      prompt: Prompt,
      ...generationConfig,
    });

    console.log(result.candidates[0].output); // Assuming this structure in the response
  } catch (error) {
    console.error("Error in run function:", error);
  }
}

export default run;
