<template>
  <div class="home">
    <home-header></home-header>
    <home-nav></home-nav>
  </div>
</template>

<script>
  import  homeHeader from '../components/home/homeHeader'
  import  homeNav from '../components/home/homeNav'
export default {
  name: 'Home',
  components:{
    homeHeader,
    homeNav
  }
}
</script>
