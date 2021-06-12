<template>

        <div >
          
                 <div class="card card-plain card-course list-group ">
            <div class="card-image border-radius-lg position-relative">
              <a href="javascript:;">
                <!-- <img class="w-100 border-radius-xs move-on-hover shadow" src="https://oc-course.imgix.net/courses/1603881/1603881_teaser_picture_1613491564.jpg%3Fr%3Dpad?auto=compress,format&amp;q=80&quot"> -->
                <img class="w-100 border-radius-xs move-on-hover shadow" :src= url_image>

              </a>

            </div>
            
            <div class="card-body px-0"> 
               <div>
                 <span class="text-info">Categorie</span>
              </div> 
             <div class="course-info">
                   <span class="">
                        <span><i class="bi bi-alarm-fill"></i></span>
                         <span>{{ duree }} heures</span>
                   </span>
                   <span>
                        <span><i class="bi bi-reception-4"></i></span>
                         <span>{{ level }}</span>
                   </span>
                   
              </div>
              <h5>
                <a class="text-dark font-weight-bold">{{ title }}</a>
              </h5>
              <p>
                {{ description }}
              </p>
  
            
             
            </div>
          </div>
            
         
     </div>
</template>

<script>
export default {
  
  props:{
    required: Boolean,
    title:{
      type : String,
          },
    description:{
      type: String,
          },
    duree:{
      type: String
          },
    level:{
      type: String
          },
    url_image:{
        type: String
          },
    


  }
}
</script>