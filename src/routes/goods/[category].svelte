<script>
  import { stores } from '@sapper/app';
  import { allGoods, currentCategory, currentGood } from '../../store/goods.js';
  import Good from '../../components/good.svelte';
  
  const { preloading, page, session } = stores();
  let goods = [];
  page.subscribe((page) => {
    currentCategory.set(page.params.category);
    goods = $allGoods.filter(good => good.category === $currentCategory)
    setGood(goods[0])
  });
  function setGood(good) {
    currentGood.set(good);
  }
</script>

<svelte:head>
  <title>Shipyard | {currentGood.title}</title>
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

<Good good={$currentGood} image={$currentGood.images[0]}></Good>

<style>
  .goods-nav {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 42px 230px;
    box-sizing: border-box;
    z-index: 6;
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
      padding: 108px 64px;
    }
  }
</style>
