<template>
    <div class="Fashion">
        <Secondnav>时尚频道</Secondnav>
        <Listdev link='BA8F6ICNwangning'></Listdev>
    </div>
</template>
<script>
import Listdev from "@/components/Listdev.vue";
import Secondnav from "@/components/Secondnav.vue";
export default {
    name:'Fashion',
    components:{
    Listdev,
    Secondnav
  }
}
</script>