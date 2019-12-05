<template>
     <div>
         <h1 @click="jieGuo">视频</h1>
        <div v-for="(item,index) of movelist" :key="index" class="item">
          <div>
              名字：{{item.name}}
          </div>
          <div>
           标题：{{item.text}} 
          </div>
          <img :src="item.header" alt="" class="tu">
          <video :src="item.video" class="chd" autoplay="autoplay" poster></video>
        </div>
     </div>
</template>
<script>
    export  default  {
        data(){
            return{
                movelist:[]
            }
        },
        created() {
            let that=this
            function mov(){
                let params={
                   page:1,
                   count:2,
                   type:"video"
                }
                that.$get("/getJoke").then((res)=>{
                    that.movelist=res.result
                    console.log(res.result)
                })
            }
            mov()
        },
        methods:{
            jieGuo:function(){
                this.$router.push({
                    path:"/next"
                })
            }
        }
    }
</script>
<style>
.item{
    width: 90%;
    padding: 7px;
    border: 1px solid lawngreen;
    margin: 15px auto;
    word-break: break-all
}
.tu{
    width: 80%;
}
.chd{
    width: 70%;
}
</style>
