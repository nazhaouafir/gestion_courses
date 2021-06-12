<template>
<div>
      <h1>hello</h1>
      <h2>{{ this.$route.params.id }}</h2>
     <h3> {{  course.title }}</h3>
</div>
</template>
<script>
export default {
 async asyncData({ params, $axios}){
       const course = await $axios.$get(`/course/${params.id}`)
      return { course}
}
}
</script>