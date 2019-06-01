<template>
    <div class="Travel">
        <Secondnav>旅游频道</Secondnav>
        <Listdev link='BEO4GINLwangning'></Listdev>
    </div>
</template>
<script>
import Listdev from "@/components/Listdev.vue";
import Secondnav from "@/components/Secondnav.vue";
export default {
    name:'Travel',
    components:{
    Listdev,
    Secondnav
  }
}
</script>