/* Ovaj kod prati broj artikala u korpi za kupovinu.
Počinje deklarisanjem varijable koja se zove "itemcount" i inicijaliziranjem na 0. Zatim se deklaracija varijable "itemcountdisplay" i dodjeljuje joj vrijednost prvog elementa koji odgovara imenu klase "items" koristeći metodu querySelector.
Zatim postoji varijabla "atc" kojoj se dodjeljuje vrijednost svih elemenata koji odgovaraju nazivu klase "add" pomoću metode querySelectorAll.
Takođe ima niz nazvan "cartitems" koji je niz od 6 nula.
Koristi se for petlja za ponavljanje kroz sve elemente sa klasom "add", a za svaki element se dodaje eventListener koji sluša "klik". Kada se klikne na element, varijabla itemcount se povećava za 1, innerHTML elementa itemcountdisplay se ažurira da prikaže novu vrijednost brojača, a vrijednost odgovarajućeg elementa u nizu "cartitems" se povećava za 1.
Skripta prati broj artikala u korpi za kupovinu povećavanjem varijable "itemcount" svaki put kada se klikne na dugme sa klasom "add", ažuriranjem prikaza brojanja na stranici i ažuriranjem odgovarajućeg elementa u nizu "cartitems". */

var itemcount = 0;
var itemcountdisplay = document.querySelector(".items");
let atc = document.querySelectorAll(".add");
var cartitems = [0, 0, 0, 0, 0, 0];

for (let i = 0; i < atc.length; i++) {
  atc[i].addEventListener("click", function () {
    itemcount += 1;
    itemcountdisplay.innerHTML = `${itemcount}`;
    cartitems[i] += 1;
  });
}

/*Počinje deklarisanjem varijable koja se zove "checkout" i dodjeljuje joj vrijednost prvog elementa koji odgovara imenu klase "cart" koristeći metodu querySelector.
Zatim definira funkciju pod nazivom "gotoCheckout" koja se pokreće kada se klikne na ovaj element. Unutar funkcije, if naredba provjerava da li je varijabla itemcount veća od 0. Ako jeste, koristi metod sessionStorage.setItem za pohranu niza cartitems kao string, koristeći metodu JSON.stringify da ga konvertuje u string. Zatim ažurira svojstvo href varijable "checkout" u "checkout.html" što uzrokuje da se stranica preusmjeri na stranicu za naplatu.
Ako broj artikla nije veći od 0, funkcija će prikazati poruku upozorenja "Nevažeći broj proizvoda u korpi"*/

var checkout = document.querySelector(".cart");

function gotoCheckout() {
  if (itemcount > 0) {
    sessionStorage.setItem("TheArray", JSON.stringify(cartitems));
    checkout.href = "checkout.html";
  } else {
    alert("Nevažeći broj proizvoda u korpi");
  }
}
