import Article from "$lib/models/article";

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
