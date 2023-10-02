<script>
  import { goto } from "$app/navigation";
  import { redirect } from "@sveltejs/kit";


	/**
	 * @type {number}
	 */
	export let page;
	/**
	 * @type {number}
	 */
	export let pageCount;
	/**
	 * @type {number}
	 */
	export let perPage;
</script>

<div class="page-selector">
	<div class="page-selector-container">
		<button
			class={page - 1 >= 1 ? '' : 'disabled'}
			disabled={page - 1 < 1}
			on:click={() => {
				if (page - 1 >= 1) {
					page -= 1;
				}
			}}>{'<'}</button
		>
		<input type="number" max={pageCount} min={1} step="1" bind:value={page} />/{pageCount}
		<!-- <p>{page}</p> -->
		<button
			class={page + 1 <= pageCount ? '' : 'disabled'}
			disabled={page + 1 > pageCount}
			on:click={async () => {
				if (page < pageCount) {
					page += 1;
				}
				console.log({page, perPage})
				throw redirect(303, `?page=${page}&perPage=${perPage}`)
			}}>{'>'}</button
		>
	</div>
</div>

<style>
	input {
		text-align: center;
		padding: 0;
		border: 0;
	}
	.page-selector-container {
		display: inline;
	}

	.page-selector {
		display: flex;
		justify-content: center;
	}
</style>
