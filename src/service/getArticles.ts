import { errorHandler } from './errorHandler';

export async function fetchArticles(page: number, perPage: number) {
	const API_URL = 'http://localhost:8081';
	const articlesResponse = await fetch(`${API_URL}/articles?page=${page}&perPage=${perPage}`);
	if (await errorHandler([200], articlesResponse.status, articlesResponse)) {
		return await articlesResponse.json();
	}
}
