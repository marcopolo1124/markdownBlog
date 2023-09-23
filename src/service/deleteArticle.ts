import { errorHandler, APIUrl } from './utils';

export async function deleteArticle(articleId: string) {
	const deleteResponse = await fetch(`${APIUrl}/articles/delete/${articleId}`, {
		method: 'DELETE'
	});
	const noErrors = await errorHandler([204], deleteResponse.status, deleteResponse);
	console.log({ noErrors });
	if (noErrors) {
		return true;
	}
	return false;
}
