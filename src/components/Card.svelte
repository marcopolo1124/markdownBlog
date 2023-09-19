<script>
	import DeleteButton from './DeleteButton.svelte';
  import MarkdownContainer from './MarkdownContainer.svelte';

	export let article;
	/**
	 * @type {any}
	 */
	// export let articles;
	let { title, description, createdAt, _id, slug, markdown } = article;
	// let articleId = _id;
</script>

<div class="card">
	<a href={`/article/${slug}`}>
		<div class="info-container">
			<h2 class="card-title">{title}</h2>
			<p class="muted">{new Date(createdAt).toLocaleDateString()}</p>
			<MarkdownContainer source={markdown}/>
		</div>
	</a>
	<slot/>
</div>

<style>
	.card:hover {
		background-color: grey;
	}
	.card {
		display: flex;
		justify-content: space-between;
		max-height: 150px;
		overflow: hidden;
		text-overflow: clip;
		border-radius: 5px;
	}

	/* .card:before {
		content:'';
		width: 100%;
		position: relative;
		left: 0;
		top: 0;
		background:linear-gradient(transparent 150px, white);
	} */

	.muted {
		font-size: 0.7rem;
	}

	.card a {
		text-decoration: none;
		width: 100%;
	}

	.info-container {
		width: 100%;
		-webkit-mask-image: linear-gradient(180deg, #000 60%, transparent);
		max-height: 150px;
	}
	.card {
		border: 1px solid black;
		margin: 5px 20px;
	}
</style>
