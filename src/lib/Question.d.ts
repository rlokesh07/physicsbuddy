interface QuestionType {
	id: string;
	attempted: number;
	topic: string;
	correct: number;
	difficulty: string;
	image: string;
	explanation: string[];
	question: string;
	options: string[];
	answer: number;
}