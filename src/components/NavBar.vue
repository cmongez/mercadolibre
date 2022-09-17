<template>
  <nav class="navbar navbar-expand-lg yellow">
    <a class="navbar-brand d-none" href="#">Navbar</a>
    <img src="../assets/logo.png" class="d-none d-md-inline" alt="" />
    <img src="../assets/logo-mobile.png" class="d-md-none" alt="" />
    <div class="d-flex align-items-center">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div>Cart</div>
    </div>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown
          </a>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form class="x">
        <input class="" type="search" placeholder="Search" aria-label="Search" />
        <button class="" type="submit">Estoy buscando</button>
      </form>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss">
.yellow {
  background-color: #fff159;
}
</style>
