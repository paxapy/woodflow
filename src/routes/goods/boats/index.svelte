<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`goods/boats.json`).then(r => r.json()).then(boats => {
			return { boats };
		});
	}
</script>

<script>
	export let boats;
</script>

<style>
	ul {
		margin: 0 0 1em 0;
		line-height: 1.5;
	}
</style>

<svelte:head>
	<title>boats</title>
</svelte:head>

<h1>Лодки</h1>

<ul>
	{#each boats as boat}
		<li><a rel='prefetch' href='blog/{boat.slug}'>{boat.title}</a></li>
	{/each}
</ul>
