<script lang="ts" setup>
import CurrTemp from './CurrTemp.vue';
import CurrWarning from './CurrWarning.vue';
import CurrWeather from './CurrWeather.vue';

    let weatherData = ref({});
    let warningData = ref({});
    let tempData = ref({});

    chrome.runtime.onMessage.addListener((message) => {  
        if (message.action === 'updateWeather') {  
           console.log('Weather updated', message);
           weatherData.value = message.data;
        }  
        if (message.action === 'updateWarnings') {  
           console.log('Warning updated', message);
           warningData.value = message.data;
        }  
        if (message.action === 'updateTemp') {  
           console.log('temp updated', message);
           tempData.value = message.data;
        }    
    });

</script>

<template>
<div class="grid nested-grid">
    <div class="col-4 h-30rem" >
        <div class="text-center h-full border-round-sm h-full bg-primary font-bold">
            <CurrTemp :tempData="tempData" />
        </div>
    </div>
    <div class="col-8">
        <div class="grid h-30rem">
            <div class="col-6 ">
                <div class="h-15rem text-center p-3 border-round-sm bg-primary font-bold">
                    <CurrWarning :tempData="warningData" />
                </div>
            </div>
            <div class="col-6">
                <div class=" h-15rem text-center p-3 border-round-sm bg-primary font-bold">6</div>
            </div>
            <div class="col-12">
                <div class="h-15rem text-center p-5 border-round-sm bg-primary font-bold">
                    
                    7 day forecast
                </div>
            </div>
        </div>
    </div>
</div>
 
 
</template>


<style scoped>
</style>
