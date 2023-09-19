<script>
	import { fetchArticles } from '../service/getArticles';
	import Card from '../components/Card.svelte';
	import PageSelector from '../components/PageSelector.svelte';
	let page = 1;
	let perPage = 10;
	let pageCount = 0;
	/**
	 * @type {any[]}
	 */
	let articles = [];
	let failed = false;
	let loading = true;

	/**
	 * @param {number} page
	 * @param {number} perPage
	 */
	async function fetchAndUpdateArticles(page, perPage) {
		loading = true;
		try {
			const articlesObj = await fetchArticles(page, perPage);
			articles = articlesObj.articles;
			pageCount = articlesObj.pageCount;
			loading = false;
			failed = false;
		} catch (e) {
			loading = false;
			failed = true;
			console.log(e);
			articles = [];
		}
	}

	/**
	 * @param {string} articleId
	 */
	$: fetchAndUpdateArticles(page, perPage);
	$: console.log({ failed, articles });
</script>

<h1>Marco's Blog</h1>
{#if failed}
	<p>failed to load, please try again later</p>
{:else if loading}
	<p>loading...</p>
{:else if articles.length === 0}
	<p>Empty! please write more articles</p>
{:else}
	{#each articles as article (article.slug)}
		<Card {article} bind:articles />
	{/each}
{/if}

{#if pageCount}
	<PageSelector bind:page bind:pageCount />
{/if}
