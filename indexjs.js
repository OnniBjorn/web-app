  const nimiSisalto = document.querySelector('#nimi');
  const osoiteSisalto = document.querySelector('#osoite');
  const kurssinappi = document.querySelector('.kurssinappi');
  const virhe = document.querySelector(".virheilmoitus");
  const area = document.querySelector("#area");
  const lomake = document.querySelector(".lomake");
  const emailnappi = document.querySelector('.kurssinappi')
  const tumma= document.querySelector('#musta')
  const vaalea = document.querySelector('#valkoinen')
  const sivu = document.querySelector('.sivu')
  const asetus = document.querySelector('.asetukset')
  const nappula = document.querySelector('#asetus')


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
    setTimeout(() => kurssinappi.disabled = true,);
    setTimeout(() => kurssinappi.disabled = false,30000);

  }else{
    lomake.innerHTML ='Kiitos viestistäsi ' + (nimiSisalto.value);
    sendJSON();
    nimiSisalto.value = '';
    osoiteSisalto.value = '';
    area.value = '';
    kurssinappi.style.display = 'none';
  }
});
//const nimikentta = document.querySelector('#nimi').value;
//const osoitekentta = document.querySelector('#osoite').value;
//const viesti = document.querySelector('#area').value;

function sendJSON(){
  let xhr = new XMLHttpRequest();
  let url = "https://salpausemail.azurewebsites.net/api/HttpTriggerCSharp2?code=PnWhScmEcspN8Fy7eYKnIZA37AFgUZ0fMQ1OpXOJ6dtBPBGNXAMIqQ==";

  xhr.open("POST", url, true);

  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onreadystatechange = function (){
   if(xhr.readyState === 4 && xhr.status === 200){
     console.log("valmis, yhteys toimii");
   } 
  };
console.log("nimikentän sisältö: " + nimiSisalto.value);
console.log("osoitekentän sisältö: " + osoiteSisalto.value);
console.log("viestikentän sisältö: " + area.value);
var data = JSON.stringify({
  "EmailMsg":"Viesti  osoitteesta: " + osoiteSisalto.value + "Viestin sisaltö: " + area.value,
  //"EmailAddress":osoiteSisalto.value,
  "EmailTo": "onni.bjorn",
  "EmailName": nimiSisalto.value
});
xhr.send(data);
}

nappula.addEventListener('click', e =>{
  e.preventDefault();
  if(asetus.style.display ="none")
  asetus.style.display =("block");
});

musta.addEventListener('click', e =>{
  e.preventDefault();
  sivu.style.background = 'grey';
  asetus.style.display  =("none");
})
valkoinen.addEventListener('click', e =>{
  e.preventDefault();
  sivu.style.background = 'white';
  asetus.style.display  =("none");
})




