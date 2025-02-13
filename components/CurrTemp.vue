<script lang="ts" setup>
import { defineProps, computed } from 'vue';
import Button from 'primevue/button';

const region = "Sha Tin";
const props = defineProps<{
  tempData: any;
}>();

const emit = defineEmits(['showWeatherDetail']);

const tempMap= computed(() => {
  const temperatureMap = new Map();
  props.tempData?.tempData?.temperature?.data.forEach((element: { place: any; value: any; unit: any; }) => {
temperatureMap.set(element.place, element.value); 
});return temperatureMap;

})
</script> 

<template>
   <div class="">
    {{ region }}
    {{ tempMap.get(region) }} C
    <Button label="Show" @click="emit('showWeatherDetail')"/>
  </div>
</template>
<style scoped>
</style>