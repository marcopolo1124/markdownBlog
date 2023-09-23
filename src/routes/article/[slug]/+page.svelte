<script>
	import { fetchArticle } from '../../../service/getArticle';
	import { onMount } from 'svelte';
  	import MarkdownContainer from '../../../components/MarkdownContainer.svelte';
  import { goto } from '$app/navigation';
	export let data;
	/**
	 * @type {{ title: string; createdAt: string; sanitizedHtml: string; markdown: string; slug: string}}
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
</script>

	
{#if failed}
	<p>failed to load</p>
{:else if !article}
	<p>...loading</p>
{:else}
	<div class=editBar>
		<button on:click={()=>{goto(`/article/${article.slug}/edit`)}}>Edit</button>
	</div>
	<div class=container>
		<h1>{article.title}</h1>
		<p class="muted">Written on {new Date(article.createdAt).toLocaleDateString()}</p>
		<MarkdownContainer source={article.markdown}/>
	</div>

{/if}


<style>
	.muted {
		font-size: 1.3rem;
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
		font-size: 3.994rem;
	}

	.container {
		min-width: 300px;
		width: 60vw;
		margin: 6rem auto 1rem;
	}

	.editBar {
		display: flex;
		flex-direction: row-reverse;
		padding: 5px 20px;
	}

</style>