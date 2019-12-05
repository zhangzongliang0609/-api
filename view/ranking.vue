<template>
    <div >
         <div @click="moverank">视频排行</div>
           <div  v-for="(item,index) of ranklist" :key="index" class="que">
                 <h2>排名第：{{index+1}}</h2>
                 <div>
                     歌名:{{item.album_title}}
                 </div>
                 <div>
                   作曲：{{item.author}}
                 </div>
                 <img :src="item.pic_big" alt="">
           </div>
    </div>
</template>
<script>
    export  default  {
        data(){
            return{
             ranklist:[]
            }
        },
    created() {
            let  that=this
        function fq(){
                that.$get("/musicRankings",).then((res)=>{
                    //console.log(res.result)
                    that.ranklist=res.result[0].content
                })
        }
        fq()
    },
        methods:{
            moverank:function () {
                this.$router.push({
                    path:"/move"
                })
            }
        }
    }
</script>
<style>
.que{
   width: 80%;
    margin: 15px auto;
    border-radius: 10px;
    border: 1px solid lawngreen;
    word-break: break-word;
    padding: 5px;
}
</style>
