<script lang="ts" setup>
import { defineProps } from 'vue';

const props = defineProps<{
  warningData: Record<string, any>;
}>();
</script> 

<template>
   <div class="text-center h-full border-round-sm bg-primary font-bold">
  <li v-for="(warning, index) in warningData.warningData">
 {{warning.code}}

</li>
  </div>
</template>


<style scoped>
</style>
