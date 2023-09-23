import type { Article } from '../types/articleType';
import { errorHandler, APIUrl } from './utils';

export async function upsertArticle(body: Article, articleId?: string) {
	const endpoint = `${APIUrl}/articles/edit${articleId ? '/' + articleId : ''}`;
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
