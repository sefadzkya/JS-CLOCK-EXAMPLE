let Name=prompt("Adınızı Giriniz:")
let info=document.querySelector("#myName")
if (Name){

    info.innerHTML=`${Name}`
}
else{alert("Boş Bırakılamaz.")
location.reload();//yeniden yükler.
}


const days=["Pazar","Pazartesi","salı","çarşamba","Perşembe","cuma","cumartesi"];

let zaman=new Date();
let saat = zaman.getHours()
let dakika = zaman.getMinutes()
let saniye = zaman.getSeconds()
let gun= days[zaman.getDay()]
let info1=document.querySelector("#myClock")
info1.innerHTML=`${saat} : ${dakika}: ${saniye} : ${gun} ` //anlık sanıyeyi arttıramadım.

