import Article from '$lib/models/article'
import { redirect } from '@sveltejs/kit'

export async function load({url}) {
    if (!url.searchParams.get('page') || !url.searchParams.get('perPage')){
        throw redirect(303, "?page=1&perPage=10")
    }

    const pageNum: number = parseInt(url.searchParams.get('page') || '1')
    const perPage: number = parseInt(url.searchParams.get('perPage') || '10')

    if (!pageNum || !perPage){
        throw redirect(303, "?page=1&perPage=10")
    }

    const pageCount = Math.ceil((await Article.count()) / perPage)
    if (pageNum > pageCount && pageCount > 0) {
        throw redirect(303, `?page=${pageCount}&perPage=${perPage}`)
    }

    const response = await Article.find(
        {},
        {},
        { skip: (pageNum - 1) * perPage, limit: perPage }
    )

    const articles = response.map(article => ({
        title: article.title,
        slug: article.slug,
        createdAt: article.createdAt,
        creatorUsername: article.creatorUsername,
        description: article.description,
        markdown: article.markdown
    }))

    return {
        articles,
        pageCount,
        pageNum,
        perPage
    }
}

export const actions = {
    delete: async ({request}) => {
        const data = await request.formData();
        const slug = data.get('slug')

        await Article.findOneAndDelete({slug})
    }
}