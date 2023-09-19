<script>
	import { deleteArticle } from "../service/deleteArticle";

    /**
	 * @type {string}
	 */
    export let articleId
    /**
	 * @type {boolean}
	 */
    export let toggleDeleteArticle
    /**
	 * @type {any[]}
	 */
    export let articles
    const handleClick = async () => {
        try {
            await deleteArticle(articleId)
            toggleDeleteArticle = !toggleDeleteArticle
            articles = articles.filter(article => article._id !== articleId)
        } catch(e) {
            console.log("failed to delete article")
            console.log(e)
        }
    }
</script>

<button on:click={handleClick}>
    x
</button>