<script>
	import Nav from '../components/nav.svelte';
	import Header from '../components/header.svelte';
	import Footer from '../components/footer.svelte';

	export let segment;
</script>

<style>
	.content {
		position: relative;
	  margin-left: 72px;
	}
</style>

<Nav {segment}/>

<div class="content">
	<Header />

	<main>
		<slot></slot>
	</main>

	<Footer />
</div>
