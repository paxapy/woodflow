<script>
  import { stores } from '@sapper/app';
  import { allGoods, currentCategory, currentGood } from '../../store/goods.js';
  import Good from '../../components/good.svelte';
  
  const { preloading, page, session } = stores();
  let goods = [];
  page.subscribe((page) => {
    const category = page.params.category;
    if (category) {
      currentCategory.set(category);
      goods = $allGoods.filter(good => good.category === category)
      setGood(goods[0])
    }
  });
  function setGood(good) {
    currentGood.set(good);
  }
</script>

<svelte:head>
  <title>Shipyard | {$currentGood.title}</title>
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

<Good good={$currentGood}></Good>

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
