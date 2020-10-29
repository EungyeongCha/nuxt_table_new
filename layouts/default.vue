<template>
  <div class="mr-5">
    <Top class="top-menu shadow-sm"></Top>
    <div class="d-flex">
    <Left class="d-flex flex-column left-width"></Left>
    <Nuxt class="right-width pt-3" />
    </div>

  </div>
</template>

<script>
export default {
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

.top-menu {
  height: 10vh;
}

.left-width {
  height: 100vh;
  width: 10%;
  margin-right: 30px;
}

.right-width {
  width: 70%;
}

/* .navbar-brand {
    display: inline-block;
    padding-top: 1rem;
    padding-bottom: 1rem;
    margin-right: 1rem;
    font-size: 2rem;
    line-height: inherit;
    white-space: nowrap;
} */

.btn-primary {
    color: #fff;
    background-color:#343a40;
    border-color: #343a40;
}

.shadow-sm {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.4) !important;
}

</style>
