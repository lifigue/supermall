<template>
<div class="goodsitem">
<img :src="item.show.img" alt="" @load="imgLoad">
<p>{{item.title}}</p>
<span class="price">{{'¥'+item.price}}</span>
<span class="collect">{{item.cfav}}</span>
</div>
</template>

<script>
export default {
    name:'GoodsListItem',
    props:{
        item:{
            type:Object,
            default(){
                return {}
            }

        }
    },
    methods:{
        imgLoad(){
            this.$bus.$emit('imageload')
        }
    }
}
</script>

<style scoped>
.goodsitem{
    text-align: center;
    padding-bottom:12px;

}
.goodsitem img{
    width:100%;
}
.goodsitem p{
    font-size:12px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    
}
.goodsitem .price{
    font-size:14px;

}
.goodsitem .collect{
    font-size:14px;
    position:relative;
    margin-left:20px;
}
.goodsitem .collect::before{
    content:'';
    position:absolute;
    left:-15px;
    top:-1px;
    width:14px;
    height:14px;
    background:url('~assets/img/common/collect.svg')0 0/14px 14px;

}


</style>