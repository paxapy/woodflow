<header class="header">
  <a href="/">
    <img alt='woodflow' src='img/logo.png'>
  </a>
  <address>
    <a href="/#contact" class="location">Пеновский район, д. Гора</a>
    <a href="mailto:order@woodflow.ru">
      <img alt="email" src="img/icons/mail.svg">
    </a>
    <a href="tel:+79190673506">
      <img alt="call" src="img/icons/call.svg">
    </a>
  </address>
</header>

<style>
  .header {
    position: absolute;
  	display: flex;
  	top: 0;
  	left: 0;
    align-items: center;
  	justify-content: space-between;
  	width: 100%;
  	padding: 42px 72px;
  	box-sizing: border-box;
  }

  .header address {
    display: flex;
    align-items: center;
  }

  .header address a {
    font-weight: 600;
    font-style: normal;
    text-decoration: none;
    padding: 0 4px;
  }

  .header address a.location {
    padding-right: 42px;
  }

  @media screen and (max-width: 720px) {
    .header address a.location {
      display: none;
    }  
  }

  @media screen and (max-width: 604px) {
    .header {
      padding: 42px 33px;
    }
  }
</style>
