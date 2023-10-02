import Article from "$lib/models/article";
import { redirect } from "@sveltejs/kit";

export const load = async ({ params }: { params: { slug: string } }) => {
	const article = await Article.findOne({ slug: params.slug })
	return {
		article: {
			title: article?.title,
			slug: params.slug,
			createdAt: article?.createdAt,
			markdown: article?.markdown
		}
	};
};

export const actions = {
	upsert: async ({ params, request }) => {
		console.log("upsertArticle")
		console.log(params)
		const data = await request.formData();
		console.log(data.get("title"), data.get("markdown"))
		const newArticle = await Article.findOneAndUpdate({slug: params.slug}, {
			title: data.get("title"),
			markdown: data.get("markdown")
		})

		await newArticle?.save()
		throw redirect(301, `/article/${newArticle?.slug}`)
	}
}