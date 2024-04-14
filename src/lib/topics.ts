export interface Topic {
	topic: string;
	questions: string;
}

export const topics: Record<string, Topic> = {
	HarmonicMotion: {
		topic: 'Simple Harmonic Motion',
		questions: 'HMQuestions'
	}
};
