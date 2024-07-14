import OpenAI from 'openai';
const openaiConfig = {
	apiKey: import.meta.env.VITE_OPENAI_API_KEY,
	dangerouslyAllowBrowser: true

};

const openai = new OpenAI(openaiConfig)

export default openai;
