<template>
    <div class="Money">
        <Secondnav>财经频道</Secondnav>
        <Listdev link='BA8EE5GMwangning'></Listdev>
    </div>
</template>
<script>
import Listdev from "@/components/Listdev.vue";
import Secondnav from "@/components/Secondnav.vue";
export default {
    name:'Money',
    components:{
    Listdev,
    Secondnav
  }
}
</script>