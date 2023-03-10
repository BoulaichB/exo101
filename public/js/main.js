// # Exercice d'observation :
// >*En utilisant querySelector et querySelectorAll, prend le temps d'observer les résultats*

// >*Cherche des methodes pour résoudre les énoncés suivants :*

// >*Attention, dans l'exercice précédent les éléments HTML et les propriétés dans l'objet étaient dans le même ordre ! Cette fois ci, l'ordre est différent, prend le en compte*

let softSkills = {
    Trello: '49%',
    Git: '87%',
    GitHub : '50%',
    Discord: '15%',
}

// ### 1. Stock tous les h2 dans une variable du nom de 'elements', attention voici les contraintes :
// - Tu dois utiliser un querySelectorAll
// - Tu dois ciblé la div et plus précicément son id "liste-soft-skills"
const elements = document.querySelectorAll('#liste-soft-skills h2');
// ### 2. Insert dans les bons H2 les pourcentages de ton objet, voici les contraintes :
// - Utilise une boucle "for in" pour parcourir ton objet
// ### 3. Change le style des h2 selons certaines conditions :
// - Si le pourcentage est inférieur à 50 alors le h2 a un background rouge
// - Si le pourcentage est supérieur à 50 alors le background est vert et l'écriture blanche
// - Si //     //  égale à 50 alors il n'y a pas de background
// - Si //     // est égale à 100 alors le bakcground est gold et l'écriture est noir
for (let i = 0; i < elements.length; i++) {
    for (const skill in softSkills){
        if(elements[i].innerText == skill){
            elements[i].innerText += ` : ${softSkills[skill]}`;
            if(softSkills[skill].substring(0, 3) == 100){
                elements[i].style.backgroundColor = 'gold';
                elements[i].style.color = 'black';
            } else if(softSkills[skill].substring(0, 2) == 50){
                elements[i].backgroundColor = 'none';
            } else if(Number(softSkills[skill].substring(0, 2)) > 50){
                elements[i].style.backgroundColor = 'green';
                elements[i].style.color = 'white';
            } else if(Number(softSkills[skill].substring(0, 2)) < 50){
                elements[i].style.backgroundColor = 'red';
            }
        }
    }
}






    