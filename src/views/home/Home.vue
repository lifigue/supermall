<template>
<div id="home">
<nav-bar class="home-nav"> <div slot="center">购物街</div></nav-bar>
<scroll class="content" ref="scroll" @scroll="backtopshow" 
        :probe-type="3" :pullupload="true" @pullingup="loadmore">

<home-swiper :banners="banners"></home-swiper>
<recommend-view :recommends="recommends"></recommend-view>
<feature-view></feature-view>
<tab-control class="tab-control"  
            :tabname="['新款','流行','热销']"
            @tabClick="tabClick"></tab-control>
<goods-list :goodslist="goods[this.currentType].list" ></goods-list>


</scroll>
<back-top @click.native="backClick" v-show="isShow"></back-top>



</div>


</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import {getHomeMultidata, getHomeGoodsdata} from 'network/home.js'
import homeSwiper from './childcomps/homeSwiper'
import RecommendView from './childcomps/RecommendView'
import FeatureView from './childcomps/FeatureView'
import TabControl from 'components/content/TabControl/TabControl'
import GoodsList from 'components/content/GoodsList/GoodsList'
import Scroll from 'components/common/scroll/scroll' 
import BackTop from 'components/content/BackTop/BackTop'


import {debounce} from 'components/common/ultils.js'

export default {
    name:'Home',
    components:{
        NavBar,
        homeSwiper,
        RecommendView,
        FeatureView,
        TabControl,
        GoodsList,
        Scroll,
        BackTop
    },
    data(){
        return{
            banners:[],
            recommends:[],
            goods:{
                'pop':{page:0,list:[]},
                'new':{page:0,list:[]},
                'sell':{page:0,list:[]},

            },
            currentType:'pop',
            isShow:false
            
        }
    },
    created(){
       this.getHomeMultidata()
       this.getHomeGoodsdata('pop')
       this.getHomeGoodsdata('sell')
       this.getHomeGoodsdata('new')

      
    },

    mounted(){
        //const不加就有问题
        const refresh = debounce(this.$refs.scroll.refresh,500)


        this.$bus.$on('imageload',()=>{
            refresh()
       })
    },
    methods:{
        /*
        网络请求的方法 
        */
        
        getHomeMultidata(){
            getHomeMultidata().then(res => {
                this.banners = res.data.banner.list;
                this.recommends = res.data.recommend.list;
        })
        },

        getHomeGoodsdata(type){
            //为啥这里不加const就有问题
            const page=this.goods[type].page + 1
            getHomeGoodsdata(type,page).then(res => {
                this.goods[type].list.push(...res.data.list)
                this.goods[type].page++
                this.$refs.scroll.finishPullUp()
            })
        },

        /* 
        事件
         */
        tabClick(index){
            switch(index){
                case 0:
                    this.currentType = 'pop'
                    break;
                case 1:
                    this.currentType = 'new'
                    break;
                case 2:
                    this.currentType = 'sell'
                    break;

            }
        },


        backClick(){
            this.$refs.scroll.scrolltop(0,0)
            //原生的回到顶部
            // document.body.scrollTop = document.documentElement.scrollTop = 0
            console.log('---')
        },

        backtopshow(position){
            if(-position.y>1000){
                this.isShow = true
                }
                else{
                    this.isShow =false
                }
            // this.isShow = (-position.y) > 1000
        },
        

        loadmore(){
            console.log("hhhhhh")
            this.getHomeGoodsdata(this.currentType)
        },



    
        },



}
</script>

<style scoped>
.home-nav{
    background-color: var(--color-tint);
    color:white;
    position:fixed;
    top: 0;
    left:0;
    right:0;
    z-index: 2;
    
}
#home{
    padding-top:44px;
    padding-bottom: 49px;
    position:relative;
}
.tab-control{
    position:sticky;
    top:44px;
}
.content{

    position:absolute;
    top:44px;
    bottom:49px;
    left:0px;
    right:0px;
}
</style>