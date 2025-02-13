<script lang="ts" setup>
import { defineProps } from 'vue';
import Button from 'primevue/button';

const props = defineProps<{
  warningData: Record<string, any>;
}>();
const emit = defineEmits(['showWarning']);

</script> 

<template>
   <div class="text-center h-full border-round-sm bg-primary font-bold">
  <li v-for="(warning, index) in warningData.warningData">
 {{warning.code}}

</li>
<Button label="Show" @click="emit('showWarning')"/>

  </div>

</template>


<style scoped>
</style>
