<script>
	import Nav from '../components/nav.svelte';
	import Header from '../components/header.svelte';

	export let segment;
</script>

<Nav {segment}/>

<div class="content">
	<Header />

	<main>
		<slot></slot>
	</main>
</div>
