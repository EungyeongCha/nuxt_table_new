<template>
  <b-navbar type="dark" variant="dark" class="top-menu">
    <b-navbar-brand class="top-menu" href="/"> Logo </b-navbar-brand>
    <div class="d-flex sub-cont">
      <p>{{ timestamp }}</p>
      <p>[홍길동님]</p>    
    </div>
  </b-navbar>
</template>

<script>
export default {
    name: "Top",
    data() {
      return {
        timestamp: ''
      }
    },
    created() {
      setInterval(this.getNow, 1000)
    },
    methods: {
      getNow() {
      const today = new Date()
      const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()
      const hour = today.getHours() + ":"
      const zeroPaddedMin = ("0" + today.getMinutes()).substr(-2);
      this.timestamp = date + ' ' + hour + zeroPaddedMin      
    }
    }
}
</script>

<style>
.top-menu a{
  font-size: 24px;
  color: #66696d;
}

.navbar-dark .navbar-brand {
  background-color: #333942;
  color: #66696d;
  font-weight: 400;
}

.sub-cont {
  padding-left: 1500px;
}

.sub-cont p {
  color: #fff;
}

a.navbar-brand.top-menu {
  margin-top: 40px;
}
</style>