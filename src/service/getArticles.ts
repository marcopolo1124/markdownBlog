import { errorHandler, APIUrl } from './utils';

export async function fetchArticles(page: number, perPage: number) {
	const articlesResponse = await fetch(`${APIUrl}/articles?page=${page}&perPage=${perPage}`);
	console.log({APIUrl})
	if (await errorHandler([200], articlesResponse.status, articlesResponse)) {
		return await articlesResponse.json();
	}
}
