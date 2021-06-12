<template>
  <div class="g-sidenav-show  bg-gray-100" :class="{'g-sidenav-pinned': (showSidenav== true)}">
       <aside class="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-left ms-3" :class="{'bg-white': (showSidenav== true)}" id="sidenav-main">
    <div class="sidenav-header">
      <i @click="showHidden()" class="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute right-0 top-0  d-xl-none" aria-hidden="true" id="iconSidenav"></i>
      <a class="navbar-brand m-0" >
        <span class="ms-1 font-weight-bold">My Dashboard</span>
      </a>
    </div>
    <hr class="horizontal  dark mt-0">
    <hr class="vertical  dark mt-0">

    <div>
      <ul class="navbar-nav">
        <li class="nav-item" >
          <NuxtLink class="nav-link" to="/dashboard" >
          <i class="fas fa-house-user"></i>
            <span class="nav-link-text ms-1">Dashboard</span>
          </NuxtLink>
        </li>
           <li class="nav-item">
            <NuxtLink class="nav-link" to="/dashboard/courses" >
            <i class="fas fa-graduation-cap"></i>
            <span class="nav-link-text ">Courses</span>
          </NuxtLink>
        </li>
           <li class="nav-item">
            <NuxtLink class="nav-link" to="/dashboard/tables" >
            <i class="fas fa-list-alt"></i>
            <span class="nav-link-text ">Tables</span>
          </NuxtLink>
        </li>

      </ul>
    </div>

        </aside>
      <main class="main-content mt-1 border-radius-lg">
           <nav class="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl" id="navbarBlur" navbar-scroll="true">
      <div class="container-fluid py-1 px-3">
        <div class="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
          <div class="ms-md-auto pe-md-3 d-flex align-items-center">
            <div class="input-group">
              <span class="input-group-text text-body"><i class="fas fa-search" aria-hidden="true"></i></span>
              <input type="text" class="form-control" placeholder="Type here...">
            </div>
          </div>
          <ul class="navbar-nav  justify-content-end">
            <li class="nav-item d-flex align-items-center">
              <a href="javascript:;" class="nav-link text-body font-weight-bold px-0">
                <i class="fa fa-user me-sm-1"></i>
                
                <span class="d-sm-inline d-none">Sign In</span>
              </a>
            </li>
            <li class="nav-item d-xl-none ps-3 d-flex align-items-center">
              <a @click="showHidden()" href="javascript:;" class="nav-link text-body p-0" id="iconNavbarSidenav">
                <div class="sidenav-toggler-inner">
                  <i class="sidenav-toggler-line"></i>
                  <i class="sidenav-toggler-line"></i>
                  <i class="sidenav-toggler-line"></i>
                </div>
              </a>
            </li>
        
          </ul>
        </div>
      </div>
         </nav>
    
           <Nuxt/>
      </main>
     
  </div>
</template>

<script>
import navbar from './navbar.vue'

export default {
  components: { navbar },
    data(){
        return {
            showSidenav : false,

        }
    },
methods:{
    showHidden(){
        this.showSidenav = !this.showSidenav
    }
}
}
</script>

<style>

</style>