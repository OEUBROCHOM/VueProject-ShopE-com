<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-success ">
  <div class="container-fluid">
    <img class="navbar-logo" src="/logo.jpg" alt="logo">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-6 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link text-white btn-primary ms-3" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link text-white" to="/about">About</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link text-white" to="/menu">Menu</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link text-white" to="/blog">Blog</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link text-white" to="/contact">Contact</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link text-white" to="/order">Orders</router-link>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-ifo text-white" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</template>

<script>
export default {

}
</script>

<style>
  .navbar-logo{
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
</style>