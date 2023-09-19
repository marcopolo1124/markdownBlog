import { errorHandler } from './errorHandler';

export async function deleteArticle(articleId: string) {
	const API_URL = 'http://localhost:8081';
	const deleteResponse = await fetch(`${API_URL}/articles/delete/${articleId}`, {
		method: 'DELETE'
	});
	const noErrors = await errorHandler([204], deleteResponse.status, deleteResponse);
	console.log({ noErrors });
	if (noErrors) {
		return true;
	}
	return false;
}
