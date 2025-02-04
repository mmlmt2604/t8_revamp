import imageUrl from '~/assets/icon.png';

export default defineBackground(() => {
  console.log('Hello background!', { id: browser.runtime.id });
  chrome.alarms.create('fetchData', { periodInMinutes: 0.1});  
  
  chrome.alarms.onAlarm.addListener((alarm) => {  
  if (alarm.name === 'fetchData') {  
  fetchWeatherData();  
  fetchWarningData();  
  }  
  }); 

});


let isUpdating = false; // Shared state to track update status  
  
function fetchWeatherData() {  
if (isUpdating) return; // Skip if an update is already in progress  
//isUpdating = true;  
  
fetch('https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=flw&lang=en') // Replace with actual API  
.then(response => response.json())  
.then(data => {  
const weatherData = {  
  generalSituation: data.generalSituation,  
  tcInfo: data.tcInfo,  
  fireDangerWarning: data.fireDangerWarning,  
  forecastDesc: data.forecastDesc,  
  outlook: data.outlook,  
  updateTime: data.updateTime,  

};  
chrome.storage.sync.set({ weatherData });  
// chrome.runtime.sendMessage({ action: 'updateWeather', data: weatherData });  
})  
.catch(error => {  
console.error('Error fetching weather data:', error);  
})  
.finally(() => {  
isUpdating = false; // Reset the flag after the update is complete  
});  
}  
  
function fetchWarningData() {  
if (isUpdating) return; // Skip if an update is already in progress  
//isUpdating = true;  
  
fetch('https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=warnsum&lang=en') // Replace with actual API  
.then(response => response.json())  
.then(data => {  
  console.log("xxx");
const warningData = data;  
chrome.storage.sync.set({ warningData });  
// chrome.runtime.sendMessage({ action: 'updateWarnings', data: warningData });  
const warningObjects = Object.keys(warningData).map(key => {
  return {
    name: warningData[key].name,
    code: warningData[key].code,
    actionCode: warningData[key].actionCode,
    issueTime: warningData[key].issueTime,
    updateTime: warningData[key].updateTime,
    type: warningData[key].type // Optional, only if exists
  };
});
// if (data) { 
// chrome.notifications.create({  
// type: 'basic',  
// iconUrl: imageUrl,  
// title: 'Cyclone Warning',  
// message: `Warning Level: ${data.level}`,  
// });  
// }  
})  
.catch(error => {  
console.error('Error fetching warning data:', error);  
})  
.finally(() => {  
isUpdating = false; // Reset the flag after the update is complete  
});  
}  