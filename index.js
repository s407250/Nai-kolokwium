var pole=document.querySelector('#input-field');
var lista=document.querySelector('#listaAut');
var przycisk=document.querySelector('#btn');
var wyswietlenie=document.querySelector('#list');
dlugoscListy =0;
iloscCheck = 0;

zmienna = document.querySelector('#dlugosc_listy');
zmienna2 = document.querySelector('#liczba_checkbox');
zmienna.innerHTML = dlugoscListy;
zmienna2.innerHTML=iloscCheck;

var ListEl1 = document.createElement('option');
ListEl1.textContent="Fiat";
listaAut.appendChild(ListEl1);
var ListEl2 = document.createElement('option');
ListEl2.textContent="Opel";
listaAut.appendChild(ListEl2);
var ListEl3 = document.createElement('option');
ListEl3.textContent="Skoda";
listaAut.appendChild(ListEl3);

przycisk.addEventListener('click', function(){
	
	var elementListy = document.createElement('li');
	elementListy.textContent=pole.value+" ";
	
	var button = document.createElement('button');
	var checkbox = document.createElement('input');
	checkbox.type = "checkbox";
	checkbox.name="wypozyczny";
	var marka = document.createElement('span');
	marka.textContent=lista.value;
	
	button.innerHTML= "Remove";
	button.addEventListener('click', function(){
	wyswietlenie.removeChild(button.parentNode);
	dlugoscListy=dlugoscListy-1;
	zmienna.innerHTML = dlugoscListy;
	});
	
	checkbox.addEventListener('click', function(){
		if(checkbox.checked){
			iloscCheck++;
			zmienna2.innerHTML=iloscCheck;
			button.disabled=true;
		}
		else{
			iloscCheck--;
			zmienna2.innerHTML=iloscCheck;
			button.disabled=false;
		}
	});
	var text=document.createElement('text');
	text.textContent=" Wypozyczny: ";
	
	elementListy.appendChild(marka);
	elementListy.appendChild(text);
	elementListy.appendChild(checkbox);
	elementListy.appendChild(button);
	wyswietlenie.appendChild(elementListy);
	console.log(elementListy.value);
	dlugoscListy=dlugoscListy+1;
	zmienna.innerHTML = dlugoscListy;
	
});