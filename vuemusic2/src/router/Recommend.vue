<template>
    <div class="recommend">
       <Headerbanner></Headerbanner>
       <RecommendList></RecommendList>
       <NewSongList></NewSongList>
    </div>
</template>

<script>
import Headerbanner from '../components/Headerbanner'
import RecommendList from '../components/RecommendList'
import NewSongList from '../components/NewSongList'
export default {
    name: 'recommend',
    components:{
        Headerbanner,
        RecommendList,
        NewSongList
    }
}
</script>

<style lang="scss" scoped>
    .recommend{
        position: fixed;
        bottom: 40px;
        right: 0;
        left: 0;
        top: 40px;
        overflow: auto;
    }
</style>