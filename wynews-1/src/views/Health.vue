<template>
    <div class="Health">
        <Secondnav>健康频道</Secondnav>
        <Listdev link='BDC4QSV3wangning'></Listdev>
    </div>
</template>
<script>
import Listdev from "@/components/Listdev.vue";
import Secondnav from "@/components/Secondnav.vue";
export default {
    name:'Health',
    components:{
    Listdev,
    Secondnav
  }
}
</script>