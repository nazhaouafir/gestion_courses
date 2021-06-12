<template>
  <div class="col-lg-3 col-sm-6">
          <div class="card card-plain card-blog">
            <div class="card-image border-radius-lg position-relative">
              
                <NuxtLink :to="`/formations/${$route.params.id}`">
hello
                </NuxtLink>
                            <nuxt-img class="w-100 border-radius-lg move-on-hover shadow" :src="image"   />

            </div>
            <div class="card-body px-0">
              <h5>
                <a href="javascript:;" class="text-dark font-weight-bold">{{title}}</a>
              </h5>
              <p>
               {{description}}
              </p>
              <span><i class="fa fa-address-book" aria-hidden="true"></i> 20 heure</span> <span><i class="fa fa-address-book" aria-hidden="true"></i> 20 heure</span> 
              <br><br>
            <a href="javascript:;" class=" btn btn-info text-dark icon-move-right">Lire plus
                <i class="fas fa-arrow-right text-sm"></i>
              </a>
             
            </div>
          </div>
        </div>
</template>

<script>
export default {

props:{
    required: Boolean,

     auther: {
      type: String,
      description: 'Auther',
      default: 'Edit by'
            },
     title: {
      type: Object,
      description: 'Title',
      
            },
     description: {
      type: String,
      description: 'Description',
      default: 'From colors, cards, typography to complex elements, you will find the full documentation.'
            },
       duree: {
      type: String,
      description: 'Title',
      default: 'Title'
            },
       image: {
      type: String,
      description: 'Title',
      default: ""
            },
      
}
}
</script>

<style>

</style>