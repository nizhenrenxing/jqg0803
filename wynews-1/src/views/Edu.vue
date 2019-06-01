<template>
    <div class="Edu">
        <Secondnav>教育频道</Secondnav>
        <Listdev link='BA8FF5PRwangning'></Listdev>
    </div>
</template>
<script>
import Listdev from "@/components/Listdev.vue";
import Secondnav from "@/components/Secondnav.vue";
export default {
    name:'Edu',
    components:{
    Listdev,
    Secondnav
  }
}
</script>