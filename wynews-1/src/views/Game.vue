<template>
    <div class="Game">
        <Secondnav>游戏频道</Secondnav>
        <Listdev link='BAI6RHDKwangning'></Listdev>
    </div>
</template>
<script>
import Listdev from "@/components/Listdev.vue";
import Secondnav from "@/components/Secondnav.vue";
export default {
    name:'Game',
    components:{
    Listdev,
    Secondnav
  }
}
</script>