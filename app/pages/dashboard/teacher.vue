<template>
 
<div>
   <Header/>
   <div>
     <h1>{{$auth.state.user}}</h1>
   </div>
</div>
</template>

<script>
import Header from "@/components/header"
export default {
  layout : "start-layout",

  middleware({store, redirect}){
    if(!store.$auth.hasScope('teacher')){
      return redirect('/');
    }
    
  },

components:{
    Header
}
}
</script>

<style>

</style>