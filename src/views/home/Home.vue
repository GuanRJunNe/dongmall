<template>
  <div class="home">
    <home-header></home-header>
    <home-nav></home-nav>
     <!--<home-banner></home-banner>
    <home-main></home-main> 
    <home-special></home-special>
     <home-money></home-money>
     -->
    <home-community></home-community>
    <home-floor></home-floor>
    <home-protect></home-protect>
    <!-- 
    <float-left></float-left>
    <float-right></float-right>  -->
  </div>
</template>

<script>
  import  homeHeader from './components/homeHeader'
  import  homeNav from './components/homeNav'
  import homeBanner from './components/homeBanner'
  import homeMain from './components/homeMain'
  import homeSpecial from './components/homeSpecial'
  import homeMoney from './components/homeMoney'
  import homeFloor from './components/homeFloor'
  import homeCommunity from './components/homeCommunity'
  import homeProtect from  './components/homeProtect'
  import floatLeft from '../../components/floatLeft.vue'
  import floatRight from '../../components/floatRight.vue'
export default {
  name: 'Home',
  components:{
    homeHeader,
    homeNav,
    homeBanner,
    homeMain,
    homeSpecial,
    homeMoney,
    homeFloor,
    homeCommunity,
    homeProtect,
    floatLeft,
    floatRight
  }
}
</script>
