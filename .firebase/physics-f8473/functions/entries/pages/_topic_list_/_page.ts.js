import { t as topics } from '../../../chunks/topics.js';
function load({ params }) {
	return {
		topic: topics[params.topic].topic
	};
}
export { load };
