<script setup>
  import { ref } from "vue";
  import Banner from "@/components/Home/banner.vue";
  import Service from "@/components/Home/service.vue";
  import Classic from "@/components/Home/classic.vue";
  import CoBranding from "@/components/Home/coBranding.vue";
  import Recommend from "@/components/Home/recommend.vue";
  import Conntact from "@/components/Home/conntact.vue";

  defineProps({
    msg: String,
  });

  const count = ref(0);
</script>

<template>
  <Banner />
  <Service />
  <Classic />
  <CoBranding />
  <Recommend />
  <Conntact />
</template>

<style scoped>
</style>