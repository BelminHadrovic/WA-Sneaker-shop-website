/*Ovaj JavaScript kod preuzima stavku iz memorije sesije pretraživača sa ključem "TheArray" i dodeljuje je varijabli "sessionString". Metoda JSON.parse() se zatim koristi za pretvaranje stringa iz skladišta sesije u JavaScript objekat i dodeljuje ga varijabli "checkoutItems".
Zatim kod koristi metodu getElementById() za odabir elemenata na HTML stranici*/

var sessionString = sessionStorage.getItem('TheArray');
var checkoutItems = JSON.parse(sessionString);


document.getElementById('yzdb').innerHTML = checkoutItems[0].toString();
document.getElementById('yzMXb').innerHTML = checkoutItems[1].toString();
document.getElementById('yzBt').innerHTML = checkoutItems[2].toString();
document.getElementById('ajdm').innerHTML = checkoutItems[3].toString();
document.getElementById('ajg').innerHTML = checkoutItems[4].toString();
document.getElementById('ajunc').innerHTML = checkoutItems[5].toString();

/* Ovaj kod definira varijablu "cijena" koja je rezultat množenja prvog elementa niza "checkoutItems" sa 300, drugog elementa sa 300, trećeg elementa sa 320, četvrtog elementa sa 500, petog elementa sa 450, i šesti element za 400. Zatim postavlja unutrašnji HTML elementa HTML sa id-om 'sub-total' na niz "Sub Total:$" povezan sa vrijednošću "price" koja je konvertirana u niz pomoću .toString() metoda. On postavlja innerHTML elementa HTML s id-om 'taxes' na niz "Takse:$" povezan s rezultatom množenja "price" sa 0,04 i zatim ga zaokružuje na dvije decimale pomoću metode Math.round(), koji se takođe konvertuje u string pomoću metode .toString(). Takođe postavlja innerHTML elementa HTML sa id-om 'total' na niz "Total:$" povezan s rezultatom množenja "price" sa 1,04 i zatim ga zaokružuje na dvije decimale koristeći Math.round() metodu , koji se takođe pretvara u string pomoću metode .toString(). */

var price = (checkoutItems[0] * 300) +(checkoutItems[1] * 300)+(checkoutItems[2] * 320) +(checkoutItems[3] * 500)+ (checkoutItems[4] * 450)+(checkoutItems[5] * 400);

document.getElementById('sub-total').innerHTML = "Sub Total:$"+price.toString();
document.getElementById('taxes').innerHTML = "Takse:$"+(Math.round(100*(price*0.04))/100).toString();
document.getElementById('total').innerHTML = 'Total:$'+(Math.round(100*(price*1.04))/100).toString();

/* Ovaj kod odabire prvi element sa klasom "checkoutbtn" koristeći metodu document.querySelector(.checkoutbtn") i dodeljuje ga varijabli "checkoutbtnjs". Zatim dodaje slušalac događaja (eventListener) elementu "checkoutbtnjs" koji osluškuje događaj "klik". Kada dođe do događaja "klik", on će izvršiti anonimnu funkciju unutar addEventListener metode. Anonimna funkcija koristi metodu upozorenja da prikaže poruku upozorenja sa stringom Uspješna naplata $ spojenim s rezultatom množenja varijable cijene sa 1,04 i zatim je zaokružuje na dvije decimale pomoću metode Math.round(), koja je također podijeljena sa 100 i spojen sa potrošenim nizom .
Kada korisnik klikne na element s klasom "checkoutbtn", prikazat će se poruka upozorenja s ukupnim potrošenim iznosom */
var checkoutbtnjs = document.querySelector(".checkoutbtn");

checkoutbtnjs.addEventListener("click",function(){
  alert(`Uspješna kupovina $${(Math.round(100*(price*1.04))/100)} potrošeno!`)
});
