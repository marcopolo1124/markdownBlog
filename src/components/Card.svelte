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
			<h3 class="card-title">{title}</h3>
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

	h1,
        .retro-h1 {
            margin-top: 0;
            font-size: 3.998rem;
        }

        h2,
        .retro-h2 {
            font-size: 2.827rem;
        }

        h3,
        .retro-h3 {
            font-size: 1.999rem;
        }

        h4,
        .retro-h4 {
            font-size: 1.414rem;
        }

        h5,
        .retro-h5 {
            font-size: 1.121rem;
        }

        h6,
        .retro-h6 {
            font-size: .88rem;
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
		font-size: 1rem;
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
