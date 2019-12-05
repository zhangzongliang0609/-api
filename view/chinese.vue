<template>
    <div>
       <div class="xianz" @click="gorank">
           排行榜
       </div>
        <div v-for="(item,index) of singerlist" :key="index"  class="select_singer">
                <div>名字：{{item.author}}</div>
              <div >
                  <img :src="item.pic"></img>
                  <audio :src="item.url" controls></audio>
              </div>
        </div>
    </div>
</template>
<script>
    export  default {
        data(){
            return{
                singerlist:[]
            }
        },
        created(){
            let that=this
            function fn() {
            let params={
                name:"不要说话"
            }
                that.$get("/searchMusic",params).then((res)=>{
                    that.singerlist=res.result
                //console.log(res.result)
            })
        };
            fn()
        },
        methods:{
            gorank:function () {
                this.$router.push({
                    // path:"/rank",
                    name:"rank"
                })
            }

        }
    }
</script>
<style>
    .xianz{
        border: 1px solid red;
        width: 37.5px;
    }
    .select_singer{
        width: 96%;
        border-radius: 7px;
        margin: 15px auto;
        border: 1px solid lightblue;
        word-break: break-word;
    }
</style>
