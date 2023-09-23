import { PUBLIC_API_URL } from "$env/static/public";

export const APIUrl = PUBLIC_API_URL

class ServerError extends Error {
	constructor(public status: number, message?: string) {
		super(message);
	}
}

export async function errorHandler(
	acceptedStatusCodes: number[],
	status: number,
	response: Response
) {
	console.log('errorhandler');
	if (!acceptedStatusCodes.includes(status)) {
		const responseJson = await response.json();
		throw new ServerError(
			status,
			`Server errored with status ${status}: ${JSON.stringify(responseJson.error)}`
		);
	}
	return true;
}
