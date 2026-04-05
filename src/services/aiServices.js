const config = require("../config/config");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const GEMINI_API_KEY = config.GEMINI_API_KEY;


const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

exports.getAIResponse = async ({ endpoint, method, requestBody, error }) => {
    
console.log(GEMINI_API_KEY)
  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-3-flash-preview",
    });

   const prompt = `
You are a senior backend engineer.

Analyze this API issue:

Endpoint: ${endpoint}
Method: ${method}
Request Body: ${JSON.stringify(requestBody)}
Error: ${error}

Explain:
1. What is wrong
2. Why it happened
3. How to fix it
4. Provide corrected code if possible
`;

    const result = await model.generateContent(prompt);
    const text = result.response.text();

    return text;
  } catch (error) {
    console.error("AI Error:", error);
    return null
  }
};
