<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(`goods.json`);
    const data = await res.json();

    if (res.status === 200) {
      const goods = data.filter(g => g.category == params.category)
      const boat = goods[0];
      return {
        goods: goods,
        boat: boat,
        category: params.category,
        activeImage: boat.images[0]
      };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  export let category = '';
  export let goods = [];
  export let boat = {};
  export let activeImage = '';

  function selectGood(good) {
    boat = good;
    activeImage = good.images[0];
  }

  function nextImage() {
    const current = boat.images.indexOf(activeImage);
    const next = boat.images[current + 1];
    activeImage = next ? next : boat.images[0];
  }
</script>

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

.details {
  padding: 120px 72px;
}

.details h1 {
  font-weight: 700;
  font-size: 64px;
}

.details .spec th {
  font-weight: normal;
  padding: 0 23px 4px 0;
  font-size: 14px;
}

.details .spec th.weight {
  padding-right: 33px;
}

.details .spec td {
  font-weight: bold;
  font-size: 19px;
}

.details .price {
  margin-top: 210px;
  font-size: 45px;
  font-weight: bold;
}

.slider {
  position: absolute;
  top: 210px;
  right: 0;
  width: 82%;
  overflow: hidden;
  cursor: pointer;
}

.slider img {
  width: 100%;
  position: relative;
  right: -11px;
  z-index: -1;
}

.slider .switch {
  position: absolute;
  right: 40px;
  top: 420px;
  display: flex;
  flex-flow: row;
  align-items: center;
}

.slider .switch span {
  display: inline-block;
  height: 10px;
  width: 10px;
  border-radius: 5px;
  margin: 4px;
  background: black;
  cursor: pointer;
}

.slider .switch span.active {
  height: 8px;
  width: 8px;
  border-radius: 4px;
}
</style>

<svelte:head>
  <title>Shipyard | {boat.title}</title>
</svelte:head>

<nav class="goods-nav">
  {#each goods as good}
    <a href='/goods/{category}#{good.slug}'
      class="{boat.slug == good.slug ? 'active': ''}"
      on:click={() => selectGood(good)}>
      {good.title}
    </a>
  {/each}
</nav>

<section class="details">

  <h1>{boat.title}</h1>

  <table class="spec">
    <thead>
      <tr>
        <th>Длина:</th>
        <th>Ширина:</th>
        <th>Высота:</th>
        <th>Толщина:</th>
        <th class="weight">Вес:</th>
        <th>Мест:</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{boat.length}м</td>
        <td>{boat.width}м</td>
        <td>{boat.height}м</td>
        <td>{boat.thickness}мм</td>
        <td>{boat.weight}кг</td>
        <td>{boat.capacity}</td>
      </tr>
    </tbody>
  </table>
  <p class="description"></p>

  <h2 class="price">{boat.price} ₽</h2>

  <a href="#pop" class="link-button big">Заказать</a>
</section>


<figure class="slider" on:click={() => nextImage()}>
  <img alt={boat.title} src={activeImage}>
  {#if boat.images.length > 1}
    <figcaption class="switch">
      {#each boat.images as image}
        <span
          class="{activeImage == image ? 'active': ''}"
          on:click={() => activeImage = image}>
        </span>
      {/each}
    </figcaption>
  {/if}
</figure>
