import Article from "$lib/models/article"
import { redirect } from "@sveltejs/kit";

export const actions = {
	upsert: async ({ params, request }) => {
		const data = await request.formData();
		const newArticle = new Article({
			title: data.get("title"),
			markdown: data.get("markdown")
		})

		await newArticle?.save()
		throw redirect(301, `/article/${newArticle?.slug}`)
	}
}