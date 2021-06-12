<template>
<div >
  
           <NewCourse></NewCourse>
       
      
</div>
</template>

<script>
import NewCourse from '@/components/NewCourse.vue'
export default {
  layout: 'dashboard-layout',
    components:{
        NewCourse,

        },
       data(){
return{
  
        contentHolder: "",

      editorConfig: {
        title:{
          placeholder: ''
        },
        simpleUpload: {
          uploadUrl: 'path_to_image_controller',

          headers: {
            'Authorization': 'optional_token'
          }
        }
        
      },
}
       }
  
}


</script>