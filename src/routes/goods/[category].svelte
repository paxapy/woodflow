<script context="module">
  import Good from '../../components/good.svelte';
  export async function preload({ params, query }) {
    const res = await this.fetch(`goods.json`);
    const data = await res.json();

    if (res.status === 200) {
      const goods = data.filter(g => g.category == params.category)
      const currentGood = goods[0];
      return {
        goods: goods,
        currentGood: currentGood,
        category: params.category,
      };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  export let category;
  export let goods;
  export let currentGood;

  function setGood(good) {
    currentGood = good;
  }
</script>

<svelte:head>
  <title>Shipyard | {currentGood.title}</title>
</svelte:head>

<nav class="goods-nav">
  {#each goods as good}
    <a href='/goods/{category}#{good.slug}'
      class="{currentGood.slug == good.slug ? 'active': ''}"
      on:click={() => setGood(good)}>
      {good.title}
    </a>
  {/each}
</nav>

<Good good={currentGood} image={currentGood.images[0]}></Good>

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
</style>
