//ETAPE 1 :

//1-1 : affiche une boite de dialogue en utilisant la fonction alert()
alert('!!!!!!!!!  Welcome at the RoofTopParty !!!!!'); //Objet WINDOW de base du script qui déclare :alert, prompt...

//1-2 : Une fonction "addition()" de 2 nombres en utilisant prompt() [une boite de dialogue], la fonction
// devra afficher le résultat dans la page web

function addition() {
	//var first, second; 

	const first = prompt('Enter the first number :');
	const second = prompt('Enter the second number :');
	
	//const pIci = document.querySelector("p.ici"); // retourne le 1er élément de type "p" de classe "ici"	
	//const newLink = document.createElement("p"); // ""Création"" d un objet paragraphe p		
	//newLink.textContent = parseInt(first) + parseInt(second);//Ajout le contenu dans l'objet créé
	//pIci.appendChild(newLink); //Affichage dans page HTML
	//pIci.appendChild(document.createElement("p"));
	
	const pIci = document.querySelector("p.ici");
	pIci.textContent += parseInt(first) + parseInt(second); //+= concatene à la suite
		
}

//récupère l'élément dont l'ID est contenu
//const contenu = document.getElementById("contenu")
//contenu.textContent = addition();

// Récupération du paragraphe p avec class "ici"

function saisir5Nbre() {
	//var first, second, third, fourth, fifth

	const first = prompt('Enter the first number :');
	const second = prompt('Enter the second number :');
	const third = prompt('Enter the third number :');
	const fourth = prompt('Enter the fourth number :');
	const fifth = prompt('Enter the fifth number :');
	const tab = [ first, second, third, fourth, fifth ];
	
	console.log(tab.length); // Affiche longueur du tableau, soit 5
	//Methode 1 de balayage tableau
	//for (var i = 0; i < tab.length; i++) {
	//	console.log(tab[i]);
	//}
	//Methode 2 de balayage tableau
	tab.forEach(function(tabInt) {
		console.log(tabInt);
	});
	
	//Methode 3 de balayage tableau trié du plus petit au plus grand
	tab.sort(function(a, b) {

	    if (a < b) {
	        return -1;
	    } else if (a > b) {
	        return 1;
	    } else {
	        return 0;
	    }

	});
	
	//L'élément HTML <ol> représente une liste ordonnée. 
	const divTablo = document.getElementById("divTablo");//recherche de balise DIVTABLO
	const olTag= document.createElement("ol"); // Création nouvelle balise/tag ligne tableau
	divTablo.appendChild(olTag); //Ajout de l'élément dans ma DIV
	for (let i = 0; i < tab.length; i++) {  //surtout ne pas mettre const !!!!! car i s'incrémente et pa valeur fixe
		const liTag= document.createElement("li");
		liTag.textContent = tab[i]; //Valorisation du contenu du tableau dans chaque li
		olTag.appendChild(liTag); //Ajout de l'élément dans ma liste ol
	}		
	
}

function Main() {
//Appel de la fonction "addition()" au bout de délai 1000 msecondes
setTimeout(addition, 1000);
//Appel de la fonction saisie de 5 chiffres au bout de 10 msecondes
setTimeout(saisir5Nbre, 1000);
}

document.body.addEventListener("onLoad", Main()); //je met un ecouteur sur le chargement du body. A la fin lancement de fonction Main
