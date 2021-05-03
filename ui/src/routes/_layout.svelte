<script context="module">
	import { allCategories, currentCategory } from '../store/goods.js';

	export async function preload(page, session) {
		const { API_HOST } = session;
    const res = await this.fetch(`${API_HOST}/categories`);
		const categories = await res.json();
		allCategories.set(categories);
		currentCategory.set(categories[0].slug)
		return { categories }
  }
</script>

<script>
	import Nav from '../components/nav.svelte';
	import Header from '../components/header.svelte';
	import Footer from '../components/footer.svelte';

	export let segment;
	export let categories

</script>

<style>
	.content {
		position: relative;
	  margin-left: 72px;
	}
</style>

<Nav segment={segment} categories={categories} current={$currentCategory}/>

<div class="content">
	<Header />

	<main>
		<slot></slot>
	</main>

	<Footer />
</div>
