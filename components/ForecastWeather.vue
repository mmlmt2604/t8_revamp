<script lang="ts" setup>
import { defineProps } from 'vue';

const props = defineProps<{
  foreData: Record<string, any>;
}>();

const foreData = computed(() => {
  return props.foreData.foreData;
})
</script> 

<template>
   <div class="text-center h-full border-round-sm bg-primary font-bold">
    <li v-for="(foreDay, index) in foreData?.weatherForecast"> 
      {{ foreDay?.week }}
      {{ foreDay?.forecastMaxtemp.value }}
      {{ foreDay?.forecastMintemp.value }}

    </li>

  </div>
</template>


<style scoped>
</style>
