<template>
<div class="goods">
<goods-list-item class="goods-list-item" v-for="(item,index) in goodslist" :key=index :item="item">

</goods-list-item>
</div>

</template>

<script>
import GoodsListItem from './GoodsListItem'
export default {
    name:'GoodsList',
    components:{
        GoodsListItem
    },
    props:{
        goodslist:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style scoped>
.goods{
    
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}
.goods-list-item{
    width:46%;
}

</style>