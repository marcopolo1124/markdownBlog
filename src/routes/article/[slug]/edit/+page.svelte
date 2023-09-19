<script>
	import ArticleEditor from '../../../../components/ArticleEditor.svelte';
	import { fetchArticle } from '../../../../service/getArticle';
	import { onMount } from 'svelte';
	export let data;
	/**
	 * @type {{ title: string; description: string; markdown: string; _id: string}}
	 */
	let article;
	let failed = false;

	async function fetchAndUpdateArticle() {
		try {
			const articleObj = await fetchArticle(data.slug);
			article = articleObj.article;
			failed = false;
		} catch (e) {
			failed = true;
			console.log(e);
		}
	}
	onMount(() => {
		fetchAndUpdateArticle();
	});
</script>

{#if failed}
	<p>article not found</p>
{:else}
	<ArticleEditor {...article} />
{/if}
