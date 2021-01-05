let quest = prompt('quel jour lundi, mardi, mercredi, jeudi, vendredi ?')

if (quest == 'lundi' quest == 'mardi ' quest == 'mercredi'){
    console.log('vous etes en e-learning');
} else if (quest == 'jeudi' || quest == 'vendredi') {
    console.log('vous etes en presentielle.');
} else {
    console.log('votre demande est érronée.');
}