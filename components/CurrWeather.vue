<script lang="ts" setup>
import { defineProps } from 'vue';

const props = defineProps<{
  weatherData: Record<string, any>;
}>();
const weatherData = computed(() => {
  return props.weatherData.weatherData;
})
</script> 

<template>
   <div class="text-center h-full border-round-sm bg-primary font-bold">

    <li>    {{ weatherData?.generalSituation }} </li>

    <li>    {{ weatherData?.outlook }} </li>

  </div>
</template>


<style scoped>
</style>
