<template>
<div class="recommend">
  <div v-for="(item,index) in recommends" :key="index" class="recommend-item">
      <a :href="item.link">
          <img :src="item.image">
          <div>{{item.title}}</div>
      </a>
  </div>
</div>

</template>

<script>
export default {
    name:'RecommendView',
    props:{
        recommends:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style scoped>
.recommend{
    display: flex;
    text-align: center;
    padding:15px 0 30px;
    border-bottom: 8px solid #eeeeee;
    font-size:14px;
}

.recommend-item{
    flex:1
}

.recommend-item img{
    width:80%;
    height:80%;
}

</style>