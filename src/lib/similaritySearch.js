import { HNSWLib } from "@langchain/community/vectorstores/hnswlib";
import { OpenAIEmbeddings } from "@langchain/openai";

const openaiConfig = {
	apiKey: process.env.VITE_OPENAI_API_KEY,
	dangerouslyAllowBrowser: true
};

// @ts-ignore
export const post = async ({ request }) => {
	try {
		const { question } = await request.json();
		const loadedVectorStore = await HNSWLib.load("src/lib/hnswlib.index", new OpenAIEmbeddings(openaiConfig));
		const results = await loadedVectorStore.similaritySearch(question, 1);

		return {
			status: 200,
			body: results
		};
	} catch (error) {
		console.error("Error in similarity search endpoint:", error);
		return {
			status: 500,
			body: { error: "Internal Server Error" }
		};
	}
};
