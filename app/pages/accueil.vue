<template>
 
<div>
   <Header/>
   <div>

    <section class="py-sm-7 py-5 position-relative">
    <div class="container">
      <div class="row">
        <div class="col-12 mx-auto card">
          <div class="row py-lg-3 py-4">
            <div class="col-lg-3 col-md-5   position-relative my-auto">
              <img class="img border-radius-lg max-width-200 w-100 position-relative z-index-2" src="../assets/img/bruce-mars.jpg" alt="bruce">
            </div>
            <div class="col-lg-7 col-md-7 z-index-2 position-relative px-md-2 px-sm-5 mt-sm-0 mt-4">
              <div class="d-flex justify-content-between align-items-center mb-2">
                <h4 class="mb-0">Michael Roven</h4>
                <div class="d-block">
                  <button type="button" class="btn btn-sm btn-outline-info text-nowrap mb-0">S'inscription</button>
                </div>
              </div>
              <div class="row mb-4">
                <div class="col-auto">
                  <span class="h6">323</span>
                  <span>Posts</span>
                </div>
                <div class="col-auto">
                  <span class="h6">3.5k</span>
                  <span>Followers</span>
                </div>
                <div class="col-auto">
                  <span class="h6">260</span>
                  <span>Following</span>
                </div>
              </div>
              <p class="text-lg mb-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Sit dignissimos temporibus sed beatae reprehenderit voluptas
                  nobis quisquam molestias <br><a href="javascript:;" class="text-info icon-move-right">More about me
                  <i class="fas fa-arrow-right text-sm ms-1"></i>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
   </div>
</div>
</template>

<script>
import Header from "@/components/header"
export default {
  layout : "start-layout",

  // middleware({store, redirect}){
  //   if(!store.$auth.hasScope('teacher')){
  //     return redirect('/');
  //   }
    
  // },

components:{
    Header
}
}
</script>

<style>

</style>