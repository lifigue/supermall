<template>
<div class="wrapper" ref="aaa">
    <div class="content">
        <slot></slot>
    </div>
</div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
    name:'scroll',
    data(){
        return{
            scroll:null 
        }
    },
    props:{
        probeType:{
            type:Number,
            default:0
        },
        pullupload:{
            type:Boolean,

            default:true
        }
    },
    mounted(){
        this.scroll = new Bscroll(this.$refs.aaa,{
            click: true,
            probeType: this.probeType,
            pullUpLoad: this.pullupload
        })
        //为啥监听不了滚动
        //console.log(position);就因为多给一个;
        
        this.scroll.on('scroll',(position)=>{
            console.log(position)
            this.$emit('scroll',position)

        })

        this.scroll.on('pullingUp',() => {
            this.$emit('pullingup')
        })
    },
    methods:{
        scrolltop(x,y,time=300){
            this.scroll && this.scroll.scrollTo(x,y,time)
        },
        finishPullUp(){
            this.scroll && this.scroll.finishPullUp()
        },
        refresh(){
            console.log('---')
            this.scroll && this.scroll.refresh()
        }
    }
}

</script>

<style>

</style>