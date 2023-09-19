<script>
	import { fetchArticle } from '../../../service/getArticle';
	import { onMount } from 'svelte';
  	import MarkdownContainer from '../../../components/MarkdownContainer.svelte';
	export let data;
	/**
	 * @type {{ title: string; createdAt: string; sanitizedHtml: string; markdown: string}}
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
		}
	}
	onMount(() => {
		fetchAndUpdateArticle();
	});
	$: console.log({ article });
</script>
<section>
	<div class=container>
		{#if failed}
			<p>failed to load</p>
		{:else if !article}
			<p>...loading</p>
		{:else}
			<h1>{article.title}</h1>
			<p class="muted">Written on {new Date(article.createdAt).toLocaleDateString()}</p>
			<MarkdownContainer source={article.markdown}/>
		{/if}
	</div>
	
</section>


<style>
	.muted {
		font-size: 0.8rem;
		color: grey;
	}
	h1 {
		display: block;
		border: 0;
		padding: 5px;
		margin: 5px;
		width: 100%;
	}

	h1 {
		font-size: 24px;
	}

	.container {
		min-width: 300px;
		width: 60vw;
		margin: 6rem auto 1rem;
	}

	section {
		display: flex;
		justify-content: center;
	}

</style>