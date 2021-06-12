<template>
  <div>
     <main class="container">
  <div class="row mb-2 mt-5">
      <div class="col-md-8">
      <h3 class="pb-4 mb-4 mt-4  border-bottom">
        Courses
      </h3>
   </div>
  </div>

 <div>

 </div>
  <div  class="row mb-2">
     <div class="col-lg-4 col-sm-6" v-for="(course,key) in courses" :key="key">
         <NuxtLink :to="`/courses/${course.id}`">

   
   <CourseItem  :url_image = "course.image_course" :duree="course.duree" :description="course.description" :level ="course.level" :title="course.title"  ></CourseItem>
    <video ></video>
    <figure>
       <video :src= "course.image_course"></video>
    </figure>
 </NuxtLink> 
     </div>
 
  </div>
 <Pagination />
 
<div >
   
   
</div>

</main>

  </div>
</template>

<script>
export default {
 layout : "start-layout",
 data(){
    return{
       courses: []
    }
 },
 mounted(){
    
      this.$axios.$get('/courses').then((res)=>{
         this.courses = res.courses
      })
       
    
 }
}
</script>

<style>

</style>