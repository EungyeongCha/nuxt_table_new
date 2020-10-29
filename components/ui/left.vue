<template>
    <b-navbar type="dark" variant="dark" class="left-menu">
    <nuxt-link to="/">Home</nuxt-link>
    <nuxt-link to="/menu2">About Us</nuxt-link>
    <nuxt-link to="/menu1">사용자 검색</nuxt-link>
    <nuxt-link to="/menu3">FAQ</nuxt-link>
  </b-navbar>
</template>

<script>
export default {
 name: 'lett'
}
</script>

<style>
nav.bg-dark.left-menu {
    background-color: #38414b !important;
}
 li {
     list-style: none;

 }

 a {
    color: #ccc;
    padding: 20px;
    /* padding-top: 50px; */
    /* padding-bottom: 40px; */
 }

 a:nth-child(1) {
     margin-top: 100px;
 }

 a:hover {
     color: #21ba8e;
     text-decoration: none;

 }
</style>