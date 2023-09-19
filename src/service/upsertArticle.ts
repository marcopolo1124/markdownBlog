import type { Article } from '../types/articleType';
import { errorHandler } from './errorHandler';

export async function upsertArticle(body: Article, articleId?: string) {
	const API_URL = 'http://localhost:8081';
	const endpoint = `${API_URL}/articles/edit${articleId ? '/' + articleId : ''}`;
	const upsertResponse = await fetch(endpoint, {
		method: 'PUT',
		body: JSON.stringify(body),
		headers: {
			'Content-Type': 'application/json'
		}
	});
	const noErrors = await errorHandler([200, 201], upsertResponse.status, upsertResponse);
	console.log({ noErrors });
	if (noErrors) {
		return await upsertResponse.json();
	}
	return null;
}
