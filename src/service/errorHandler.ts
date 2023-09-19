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
		console.log('failure');
		const responseJson = await response.json();
		throw new ServerError(
			status,
			`Server errored with status ${status}: ${JSON.stringify(responseJson.error)}`
		);
	}
	console.log('success');
	return true;
}
