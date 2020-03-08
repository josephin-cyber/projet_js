let texte = 'Bonjour tout le monde,je suis Christian Lisangola,développeur logiciels à Kinshasa Digital.Mon numéro de téléphone est le +243840964176 qui un numéro vodacom,et mon adresse email privé est le christian.lisangola@gmail.com. Par le passé j\'ai eu à utiliser d\'autres numéros de téléphones à l\'instar d\'un numéro Airtel qui fut le +243971151294 mais qui ne passe plus je suppose et aussi un numéro Tigo,le +243895602911. Ici à Kinshasa Digital,j\'utilise une adresse mail d\'entreprise qui est le christian@kinshasadigital.com.';

//1. Trouver le nombre des adresses mail et les lister

texte = texte.split(/[ ,']/);

const toutLesAdresseMails = texte.filter((adresseMail) => {
    return adresseMail.includes('@');
});

//Fonction pour supprimer les points restés collés aux mots

let supprimerLePoint = (dot) => {
    for (let i = 0; i < dot.length; i++) {
        if (dot[i].endsWith('.')) {
            dot[i] = dot[i].slice(0, dot[i].length - 1);
        }
    }
};

supprimerLePoint(toutLesAdresseMails);
console.log('Nous avons repertorié ' + toutLesAdresseMails.length + ' adresses mails dont: ' + toutLesAdresseMails);

//2.Trouver le nombre des numbers de téléphones et les lister

const toutLesCellsPhones = texte.filter((phone) => {
    return phone.startsWith('+243');
});

supprimerLePoint(toutLesCellsPhones);
console.log('Nous avons repertorié ' + toutLesCellsPhones.length + ' numeros de téléphone dont: ' + toutLesCellsPhones);

//3. collecter tous les numéros de téléphones Vodacoms

const toutLesCellsPhonesvoda = texte.filter((phone) => {
    return phone.startsWith('+24381') || phone.startsWith('+24382');
});

console.log('Nous avons repertorié ' + toutLesCellsPhonesvoda.length + ' numeros de téléphone vodacom dont: ' + toutLesCellsPhonesvoda);

//4. collecter tous les numéros de téléphones Tigo(#de Orange)

const toutLesCellsPhonestigo = texte.filter((phone) => {
    return phone.startsWith('+24389');
});

supprimerLePoint(toutLesCellsPhonestigo);
console.log('Nous avons repertorié ' + toutLesCellsPhonestigo.length + ' numeros de téléphone vodacom dont: ' + toutLesCellsPhonestigo);

//5. collecter tous les numéros de téléphones Orange(#Tigo)

const toutLesCellsPhonesorange = texte.filter((phone) => {
    return phone.startsWith('+24380') || phone.startsWith('+24384') || phone.startsWith('+24385');
});

console.log('Nous avons repertorié ' + toutLesCellsPhonesorange.length + ' numeros de téléphone vodacom dont: ' + toutLesCellsPhonesorange);

//6. Lister toutes les adresses de messageries professionnelles

const toutLesAdresseMailsPro = texte.filter((mailPro) => {
    return mailPro.includes('@') && !mailPro.includes('gmail');
});

supprimerLePoint(toutLesAdresseMailsPro);
console.log('Nous avons repertorié ' + toutLesAdresseMailsPro.length + ' adresse mail professionnelle dont: ' + toutLesAdresseMailsPro);

//7. Lister toutes les adresses de messageries privées

const MessageriePrive = texte.filter((prive) => {
    return prive.includes('gmail');
});

supprimerLePoint(MessageriePrive);
console.log('Nous avons repertorié ' + MessageriePrive.length + ' adresse mail professionnelle dont: ' + MessageriePrive);

//8. Trouver le nombre des mots(Ici les numéros de téléphones,les adresses email,les articles,pronoms personnels,pronoms relatifs(qui),prépositions(à) ne sont pas des mots)

let listeMotsRestreints = ['le', 'la', 'les', 'des', 'du', 'un', 'une', '+243', '@', 'je', 'tu', 'il', 'elle', 'nous', 'vous', 'elles', 'ils', 'à', 'qui', 'tout', 'mon', 'de', 'et', 'par', 'j', 'd', 'l', 'mais', 'ne', 'plus', 'aussi', 'ici', 'Par'];

for (motRestreint of listeMotsRestreints) {
    texte = texte.filter(mot => !(mot.includes(motRestreint)));
}
console.log('Nous avons repertorié ' + texte.length + ' mots respectant la condition. Et ces mots sont: ' + texte);