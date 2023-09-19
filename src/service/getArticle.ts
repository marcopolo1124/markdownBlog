import { errorHandler } from './errorHandler';

export async function fetchArticle(slug: string) {
	const API_URL = 'http://localhost:8081';
	const articleResponse = await fetch(`${API_URL}/articles/get/${slug}`);
	if (await errorHandler([200], articleResponse.status, articleResponse)) {
		return await articleResponse.json();
	}
}
