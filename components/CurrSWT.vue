<script lang="ts" setup>
import { defineProps } from 'vue';

const props = defineProps<{
  swtData: Record<string, any>;
}>();
const swtData = computed(() => {
  return props.swtData.swtData;
})

</script> 

<template>
   <div class="text-center h-full border-round-sm bg-primary font-bold">

    <li>    {{ swtData }} </li>



  </div>
</template>


<style scoped>
</style>
