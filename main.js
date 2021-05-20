let body = document.body
let ul_1 = document.getElementsByTagName('ul')[0]
let ul_2 = document.getElementsByTagName('ul')[1]
let  newLi_1 = document.createElement('li')
newLi_1.innerText = 'je suis le premier LI maggle'

function randomNum(length) {
    return Math.floor(Math.random() * (length));
}



body.addEventListener('click', e => {
    console.log(e)

    switch (e.target.value) {

        // > https://developer.mozilla.org/fr/docs/Web/API/Node/removeChild
        // > Avec la methode removeChild()


            // ## 1. 
            // - Utilise le premier bouton pour supprimer le premier enfant
        case 'Delete First Child':
            ul_1.removeChild(ul_1.firstElementChild)
            break;


            // ## 2. 
            // - Utilise le second bouton pour supprimer le dernier enfant 
        case 'Delete Last Child':
            ul_1.removeChild(ul_1.lastElementChild)
            break;



            // ## 3 .
            // - Utilise le dernier bouton pour supprimer un enfant au hasard
        case 'Delete Random Child':
            ul_1.removeChild(ul_1.children[randomNum(ul_1.children.length)])
            break;



        // > https://developer.mozilla.org/fr/docs/Web/API/Node/replaceChild
        // > Avec la methode replaceChild()


            // ## 4 . Dans la partie Remplacement de ton HTML
            // - Créer un élément li dans ton fichier JS
            // - Remplace le deuxième li par celui ci quand on clique sur le button exercice 4
        case 'exercice 4':
            ul_2.replaceChild(newLi_1,ul_2.children[1])
            break;

            
            // ## 5. 
            // - Créer un programme qui permet avec l'input de créer un li et de remplacer le "li" 3 par celui ci en appuyant sur le bouton exercice 5
        case 'exercice 5':
            let  newLi_2 = document.createElement('li')
            let yourTxt = document.getElementById('replaceValue').value
            newLi_2.innerText = yourTxt
            ul_2.replaceChild(newLi_2,ul_2.children[2])
            break;

        default:
            break;
    }
})