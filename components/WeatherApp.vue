<script lang="ts" setup>
import CurrTemp from './CurrTemp.vue';
import CurrWarning from './CurrWarning.vue';
import CurrWeather from './CurrWeather.vue';
import ForecastWeather from './ForecastWeather.vue';

    let weatherData = ref({});
    let warningData = ref({});
    let tempData = ref({});
    let foreData = ref({});
    onMounted(async () => {
        console.log('Hello popup!');
        chrome.runtime.sendMessage({ action: 'weatherRequest'});  

        foreData.value = await chrome.storage.sync.get("weatherData");
        tempData.value = await chrome.storage.sync.get("tempData");
        warningData.value = await chrome.storage.sync.get("warningData");
        weatherData.value = await chrome.storage.sync.get("weatherData");

    })
    chrome.runtime.onMessage.addListener(async (message) => {  
        if (message.action === 'updateWeather') {  
           console.log('Weather updated', message);
           weatherData.value = await chrome.storage.sync.get("weatherData");
        }  
        if (message.action === 'updateWarnings') {  
           console.log('Warning updated', message);
           warningData.value = await chrome.storage.sync.get("warningData");
        }  
        if (message.action === 'updateTemp') {  
           console.log('temp updated', message);
           tempData.value = await chrome.storage.sync.get("tempData");
        }    
        if (message.action === 'updateFore') {  
           console.log('fore updated', message);
           foreData.value = await chrome.storage.sync.get("foreData");
        }    
    });
    console.log("========================")
    console.log(weatherData)
    console.log(warningData)
    console.log(tempData)
    console.log(foreData )

    console.log("========================")

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
                    <CurrWarning :warningData="warningData" />
                </div>
            </div>
            <div class="col-6">
                <div class=" h-15rem text-center p-3 border-round-sm bg-primary font-bold">
                    <CurrWeather :weatherData="weatherData" />

                </div>
            </div>
            <div class="col-12">
                <div class="h-15rem text-center p-5 border-round-sm bg-primary font-bold">
                    <ForecastWeather :foreData="foreData" />
                </div>
            </div>
        </div>
    </div>
</div>
 
 
</template>


<style scoped>
</style>
