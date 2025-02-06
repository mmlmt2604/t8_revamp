<script lang="ts" setup>
import { defineProps } from 'vue';

const props = defineProps<{
  tempData: Record<string, any>;
}>();
</script> 

<template>
   <div class="text-center h-full border-round-sm bg-primary font-bold">
    Current Weather 
    {{ tempData.temperature }}

  </div>
</template>


<style scoped>
</style>
