<template>
  <div class="home">
    <div class="nav">
      <div class="pic">
        <img src="../../public/img/img_02.png" alt="">
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import {home_http} from "@/api/httpHome.js"
  // console.log();
  async function gethome(){
    let {data} = await home_http()
    console.log(data);
  }
  gethome()
  
</script>
<style lang="scss" scoped>
  .home{
    .nav{
      .dic{
        width: 750px;
        height: 296px;
        background: red;
        img{
          width: 100%;
          height: 100%;
        }
      }
    }
  }
</style>
