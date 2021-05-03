<script>
	import { createEventDispatcher } from 'svelte';

	export let segment;
	export let categories;
	export let current;
	export let isDark;

	const dispatch = createEventDispatcher();

	function toggleDark() {
		dispatch('toggleDark')
	}
</script>

<nav class="nav" class:dark="{isDark}">
	<a href="/" class="home">
		<span></span>
	</a>
	<a href on:click|preventDefault={() => toggleDark()} class="small" title="toggle dark">
		{isDark ? '☉' : '🌑︎'}
	</a>
	{#if !segment || !segment.includes('goods')}
		<a class="big" href="/#shipyard">мастерская</a>
		<a class="big" href="/#goods">лодки и каноэ</a>
	{:else}
		{#each categories as category}
			<a href="/goods/{category.slug}" class="big" class:active="{category.slug === current}">
				{category.title}
			</a>
		{/each}
	{/if}
	<div class="contact">
		<a class="lsf" target="_blank" href="https://vk.com/club63204386">
      vk
    </a>
    <a class="lsf" target="_blank" href="https://www.instagram.com/lodki69/">
      instagram
    </a>
    <a class="lsf" href="mailto:order@woodflow.ru">
      mail
    </a>
    <a class="lsf" href="tel:+79190673506">
      call
    </a>
	</div>
</nav>

<style>
	.nav {
		position: fixed;
		background: black;
	  color: white;
		width: 72px;
		height: 100vh;
		display: flex;
		flex-flow: column;
		align-items: center;
		padding: 33px 0;
		z-index: 5;
	}

	.nav a {
		writing-mode: tb-rl;
	  transform: rotate(180deg);
	  padding: 42px 0;
		text-decoration: none;
		white-space: nowrap;
	}

	.nav a.small {
		padding: 11px 0;
	}

	.nav a.home {
		transform: none;
		padding: 0 0 21px 0;
		background: url('/img/icon.png') no-repeat;
		width: 25px;
    height: 50px;
	}

	.nav a.active {
		text-decoration: underline;
	}

	.nav .contact {
		display: none;
		flex-flow: column;
		position: absolute;
    bottom: 13%;
	}

	.nav:hover .contact {
		display: flex;
	}

	.nav .contact a {
		padding: 7px 0;
		font-weight: normal;
		font-size: 19pt;
	}

	.dark.nav {
		color: #0c0c0c;
		background-color: #ffebc7;
	}

	.dark.nav a.home {
		background-image: url('/img/icon-dark.png');
	}

	@media screen and (max-height: 580px) {
		.nav:hover a.big {
			display: none;
		}
	}
</style>
