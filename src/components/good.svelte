<script>
  export let good;
  export let activeImage = good.images[0];

  function nextImage() {
    const current = good.images.indexOf(activeImage);
    const next = good.images[current + 1];
    activeImage = next ? next : good.images[0];
  }

</script>
<section class="details">

  <h1>{good.title}</h1>

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
        <td>{good.length}м</td>
        <td>{good.width}м</td>
        <td>{good.height}м</td>
        <td>{good.thickness}мм</td>
        <td>{good.weight}кг</td>
        <td>{good.capacity}</td>
      </tr>
    </tbody>
  </table>
  <p class="description"></p>

  <h2 class="price">{good.price} ₽</h2>

  <a href="#pop" class="link-button big">Заказать</a>
</section>

<figure class="slider" on:click={() => nextImage()}>
  <img alt={good.title} src={activeImage}>
  {#if good.images.length > 1}
    <figcaption class="switch">
      {#each good.images as image}
        <span
          class="{activeImage == image ? 'active': ''}"
          on:click={() => activeImage = image}>
        </span>
      {/each}
    </figcaption>
  {/if}
</figure>

<style>

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