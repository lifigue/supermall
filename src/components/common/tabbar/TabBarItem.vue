<template>
    <div class="tab-bar-item" @click="itemClick">
        <div v-if="!isactive"><slot name="item-icon"></slot></div>
        <div v-else><slot name="item-icon-active"></slot></div>
        <div :style="activeStyle"><slot name="item-text"></slot></div>
        </div>
 
</template>

<script>
export default {
    name:"TabBarItem",
    props:{
        path:{
            type:String
        },
        activecolor:{
            type:String,
            default:'red'
        }
    },
    data(){
        return{
        }
    },
    computed:{
        isactive(){
            return this.$route.path.indexOf(this.path) !== -1  
        },
        activeStyle(){
            return this.isactive?{color: this.activecolor}:{}
        }
    },
    methods:{
        itemClick(){
            this.$router.push(this.path)
        }

    }
}
</script>

<style scoped>
    .tab-bar-item{
        flex:1;
        text-align:center;
        height:49px;
}
    .tab-bar-item img{
        height:24px;
        width:24px;
        margin-top:3px;
        vertical-align: middle;
 }

</style>