<template>
    <div>
        <van-tabbar v-model="active" active-color="#ee0a24" inactive-color="#000" @change="onChange_fn" route>
            <van-tabbar-item icon="home-o">首页</van-tabbar-item>
            <van-tabbar-item icon="search">分销</van-tabbar-item>
            <van-tabbar-item icon="friends-o">购物</van-tabbar-item>
            <van-tabbar-item icon="setting-o">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script lang="ts" setup>
    import router from '@/router';
    import { ref } from 'vue';
    const active = ref(0)
    // function onChange_fn(index?:number | string):void{
    //     console.log(index);
    // }
    let onChange_fn:(index?:number|string)=>void=function(index?:number|string){
        console.log(index);
        switch(index){
            case 0 :router.push("/home");
            break;
            case 1 :router.push("/fen");
            break;
            case 2 :router.push("/car");
            break;
            case 3 :router.push("/mine");
            break;
        }
        
    }
</script>
<style lang="scss" scoped>

    
</style>