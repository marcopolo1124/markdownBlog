<script>
	import DeleteButton from './DeleteButton.svelte';

	export let article;
	/**
	 * @type {any}
	 */
	export let articles;
	let { title, description, createdAt, _id, slug } = article;
	let articleId = _id;
</script>

<div class="card">
	<a href={`/article/${slug}`}>
		<h2 class="card-title">{title}</h2>
		<p class="muted">{new Date(createdAt).toLocaleDateString()}</p>
		<p>{description}</p>
	</a>
	<DeleteButton {articleId} bind:articles />
</div>

<style>
	.card:hover {
		background-color: grey;
	}
	.card {
		display: flex;
		justify-content: space-between;
	}

	.card a {
		text-decoration: none;
	}
</style>
