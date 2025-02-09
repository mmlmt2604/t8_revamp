<script lang="ts" setup>
import { defineProps, computed } from 'vue';

const region = "Sha Tin";
const props = defineProps<{
  tempData: any;
}>();


const tempMap= computed(() => {
  const temperatureMap = new Map();
  props.tempData?.tempData?.temperature?.data.forEach((element: { place: any; value: any; unit: any; }) => {
temperatureMap.set(element.place, element.value); 
});return temperatureMap;

})
</script> 

<template>
   <div class="text-center h-full border-round-sm bg-primary font-bold">
    {{ region }}
    {{ tempMap.get(region) }} C
  </div>
</template>
<style scoped>
</style>