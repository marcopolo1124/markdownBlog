import { errorHandler, APIUrl } from './utils';

export async function fetchArticle(slug: string) {
	const articleResponse = await fetch(`${APIUrl}/articles/get/${slug}`);
	if (await errorHandler([200], articleResponse.status, articleResponse)) {
		return await articleResponse.json();
	}
}
