<script context="module">
  export async function preload(page, session) {
    const { API_HOST, MEDIA_HOST } = session;
    const category = page.params.category;
    const res = await this.fetch(`${API_HOST}/goods?category.slug=${category}`);
		const goods = await res.json();
		return { category, goods, mediaPrefix: MEDIA_HOST };
  }
</script>

<script>
  import { stores } from '@sapper/app';

  import { currentCategory, currentGood } from '../../store/goods.js';
  import Good from '../../components/good.svelte';

  export let mediaPrefix;
  export let category;
  export let goods;

  const { page } = stores();
  page.subscribe((page) => {
    category = page.params.category;
    if (category) {
      currentCategory.set(category);
      setGood(goods[0])
    }
  });

  function setGood(good) {
    currentGood.set(good);
  }
</script>

<svelte:head>
  <title>Лодочная | {$currentGood.title}</title>
</svelte:head>

<nav class="goods-nav">
  {#each goods as good}
    <a href='/goods/{$currentCategory}#{good.slug}'
      class="{$currentGood.slug == good.slug ? 'active': ''}"
      on:click={() => setGood(good)}>
      {good.title}
    </a>
  {/each}
</nav>

<Good good={$currentGood} mediaPrefix={mediaPrefix}></Good>

<style>
  .goods-nav {
    position: absolute;
    top: 50px;
    left: 210px;
  }

  .goods-nav a {
    text-decoration: none;
    text-transform: uppercase;
    padding: 0 11px;
  }

  .goods-nav a.active {
    text-decoration: underline;
  }

  @media screen and (max-width: 998px) {
    .goods-nav {
      top: 110px;
      left: 64px;
    }
  }
</style>
