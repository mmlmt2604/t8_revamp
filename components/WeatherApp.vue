<script lang="ts" setup>
import CurrTemp from './CurrTemp.vue';
import CurrWarning from './CurrWarning.vue';
import CurrSWT from './CurrSWT.vue';
import ForecastWeather from './ForecastWeather.vue';
import Dialog from 'primevue/dialog';

    let weatherData = ref({});
    let warningData = ref({});
    let tempData = ref({});
    let foreData = ref({});
    let warningDetailData = ref({});
    let swtData = ref({});

    onMounted(async () => {
        console.log('Hello popup!');
        chrome.runtime.sendMessage({ action: 'weatherRequest'});  

        foreData.value = await chrome.storage.sync.get("weatherData");
        tempData.value = await chrome.storage.sync.get("tempData");
        warningData.value = await chrome.storage.sync.get("warningData");
        weatherData.value = await chrome.storage.sync.get("weatherData");
        warningDetailData.value = await chrome.storage.sync.get("warningDetail");
        swtData.value = await chrome.storage.sync.get("swtData");

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
        if (message.action === 'updateWarnDetail') {  
           console.log('warning detail updated', message);
           warningDetailData.value = await chrome.storage.sync.get("warningDetailData");
        }    
        if (message.action === 'updateSWT') {  
           console.log('swt detail updated', message);
           swtData.value = await chrome.storage.sync.get("swtData");
        }    
    });
    console.log("========================")
    console.log(weatherData)
    console.log(warningData)
    console.log(tempData)
    console.log(foreData )
    console.log(swtData )

    const warningDetail = ref(false);
    const wetherDetail = ref(false);

    function handleShowWarning(warning) {
        console.log("SADASd");
        warningDetail.value = true;
    }

    function handleWeatherDetail() {
        console.log("ASD");
        wetherDetail.value = true;
    }
</script>

<template>
<div class="grid nested-grid">
    <div class="col-4 h-30rem" >
        <div class="">
            <CurrTemp :tempData="tempData" @showWeatherDetail="handleWeatherDetail" />
        </div>
    </div>
    <div class="col-8">
        <div class="grid h-30rem">
            <div class="col-6 ">
                <div class="h-15rem text-center p-3 border-round-sm bg-primary font-bold">
                    <CurrWarning :warningData="warningData" @showWarning="handleShowWarning"/>
                </div>
            </div>
            <div class="col-6">
                <div class=" h-15rem text-center p-3 border-round-sm bg-primary font-bold">
                    <CurrSWT :swtData="swtData" />

                </div>
            </div>
            <div class="col-12">
                <div class="h-15rem text-center p-5 border-round-sm bg-primary font-bold">
                    <ForecastWeather :foreData="foreData" />
                </div>
            </div>
        </div>
    </div>
    <Dialog v-model:visible="warningDetail" modal header="Edit Profile" :style="{ width: '25rem' }">
            <div class="flex items-center gap-4 mb-4">
                {{ warningDetailData }}     
            </div>
        </Dialog>
    <Dialog v-model:visible="wetherDetail" modal header="Edit Profile" :style="{ width: '25rem' }">
            <div class="flex items-center gap-4 mb-4">
                {{weatherData}}
            </div>
        </Dialog>
</div>

 
</template>


<style scoped>
</style>
