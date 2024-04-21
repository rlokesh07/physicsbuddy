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
	type: string;
	unit: string[];
	formattedAnswer: string;
}
interface TopicType {
	topic: string;
}

interface FlashcardType {
	front: string;
	back: string;
}