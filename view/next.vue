<template>
    <div>fsdf
        <div @click="fnagd">
          
        </div>
    </div>
</template>
<style>

</style>
<script>
export default {
    data(){
        return{}
    },
    methods:{
         fnagd:function(){
            
             let timenull=null
             return function(){
                 if(timenull){
                     clearTimeout(timenull)
                 }
                 timenull=setTimeout(() => {
                     console.log("视频")
                 },5000);
             }
         }()
    },
    created(){
        this.$get("").then((res)=>{
           console.log(res)
        })
    }
}
</script>