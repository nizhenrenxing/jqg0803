<template>
    <div class="Phone">
        <Secondnav>手机频道</Secondnav>
        <Listdev link='BAI6I0O5wangning'></Listdev>
    </div>
</template>
<script>
import Listdev from "@/components/Listdev.vue";
import Secondnav from "@/components/Secondnav.vue";
export default {
    name:'Phone',
    components:{
    Listdev,
    Secondnav
  }
}
</script>