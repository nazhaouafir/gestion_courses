<template>
<div class="bg-gray-100" >
    <!-- Navbar Light -->
  <Navbar/>
  <!-- End Navbar -->
  <Nuxt/>
  <Footer/>
</div>
  
  
</template>

<script>
import Navber from "@/components/navbar.vue"
import Footer from "@/components/footer.vue"
export default {
components:{
    Footer,
    Navber
}
}
</script>

<style>
</style>