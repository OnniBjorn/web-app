  const nimiSisalto = document.querySelector('#nimi');
  const osoiteSisalto = document.querySelector('#osoite');
  const kurssinappi = document.querySelector('.kurssinappi');
  const virhe = document.querySelector(".virheilmoitus");
  const area = document.querySelector("#area");
  const lomake = document.querySelector(".lomake");
  const emailnappi = document.querySelector('.kurssinappi')

kurssinappi.addEventListener('click', e =>{
  e.preventDefault();
  if(nimiSisalto.value === ''|| osoiteSisalto.value === '' || area.value === ''){
    virhe.classList.add('virhe');
    virhe.innerHTML ='Täytä kaikki kentät';
    kurssinappi.style.background = 'red';
    kurssinappi.value= 'Odota 30 sekunttia';
    setTimeout(() => virhe.classList.remove('virhe'), 3000);
    setTimeout(() => virhe.innerHTML='', 3000);
    setTimeout(() => kurssinappi.value ='Lähetä', 30000);
    setTimeout(() => kurssinappi.style.background='', 30000);
    kurssinappi.disabled = true,3000;
    
  }else{
    lomake.innerHTML ='Kiitos viestistäsi ' + (nimiSisalto.value);
    nimiSisalto.value = '';
    osoiteSisalto.value = '';
    area.value = '';
    sendJSON();
  }
});
function sendJSON(){
  let xhr = new XMLHttpRequest();
  let url = "https://salpausemail.azurewebsites.net/api/HttpTriggerCSharp1?code=1WOELqiU07AqsBviOQYzuNIrQP7xoV7NV7C5W2ctgjIRcf7nXE2biw==";

  xhr.open("POST", url, true);

  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onreadystatechange = function (){
   if(xhr.readyState === 4 && xhr.status === 200){
     console.log("valmis, yhteys toimii");
   } 
  };
var data = JSON.stringify({
  "EmailMsg":"" ,
  "EmailAddress":"",
  
})






