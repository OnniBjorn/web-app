  const nimiSisalto = document.querySelector('#nimi');
  const osoiteSisalto = document.querySelector('#osoite');
  const kurssinappi = document.querySelector('.kurssinappi');
  const virhe = document.querySelector(".virheilmoitus");
  const area = document.querySelector("#area");
  const lomake = document.querySelector(".lomake");

kurssinappi.addEventListener('click', e =>{
  e.preventDefault();
  if(nimiSisalto.value === ''|| osoiteSisalto.value === ''){
    virhe.classList.add('virhe');
    virhe.innerHTML ='Täytä kaikki kentät';
    kurssinappi.style.background = 'red';
    kurssinappi.value= 'Odota 30 sekunttia';
    setTimeout(() => virhe.classList.remove('virhe'), 3000);
    setTimeout(() => virhe.innerHTML='', 3000);
    setTimeout(() => kurssinappi.value ='Lähetä', 30000);
    setTimeout(() => kurssinappi.style.background='', 30000);
  }else{
    lomake.innerHTML ='Kiitos viestistäsi ' + (nimiSisalto.value);
    nimiSisalto.value = '';
    osoiteSisalto.value = '';
    area.value = '';
  }
});


