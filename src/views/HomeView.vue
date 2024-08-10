<script setup>
import { ref } from "vue";
import Banner from "@/components/Home/banner.vue";

defineProps({
  msg: String,
});

const count = ref(0);
</script>

<template>
  <Banner />
</template>

<style scoped>
</style>