export interface QuestionType {
	correct: number;
	attempted: number;
	question: string;
	image: string | null;
	options: string[];
	answer: number;
	difficulty: string;
	topic: string;
	id: string;
	explanation: string[];
}
