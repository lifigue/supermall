<template>
<div class="tab-control">
    <div class="tabitem"  v-for="(item,index) in tabname" :key=index :class="{'active':index===currentIndex}" @click="itemClick(index)">
        <span>{{item}}</span>
    </div>
</div>

</template>

<script>
export default {
    name:'TabControl',
    data(){
        return{
            currentIndex:0
        }
    },
    props:{
        tabname:{
            type:Array,
            default(){
                return []
            }
        }
    },
    methods:{
        itemClick(index){
            this.currentIndex=index
            this.$emit('tabClick',index)
        }
    }
}
</script>

<style scoped>
.tab-control{
    display:flex;
    text-align: center;
    height:44px;
    background-color: #fff;
}
.tabitem{
    flex: 1;
    line-height: 44px;
}
.tabitem span{
    padding:4px;
}
.active{
    color: var(--color-tint);
}
.active span{
    border-bottom: 2px solid var(--color-tint);
}
</style>