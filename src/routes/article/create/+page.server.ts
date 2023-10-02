import Article from "$lib/models/article"
import { redirect } from "@sveltejs/kit";

export const actions = {
	upsert: async ({ params, request }) => {
		console.log("upsertArticle")
		console.log(params)
		const data = await request.formData();
		console.log(data.get("title"), data.get("markdown"))
		const newArticle = new Article({
			title: data.get("title"),
			markdown: data.get("markdown")
		})

		await newArticle?.save()
		throw redirect(301, `/article/${newArticle?.slug}`)
	}
}