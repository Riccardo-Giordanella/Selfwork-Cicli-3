let bibita = Number(prompt(`Scegli una delle seguenti bibite: \n 1 - Acqua \n 2 - Coca-cola \n 3 - Birra`));

while(typeof bibita == "number"){
    if(bibita == 1){
        console.log(`è stata selezionata l'acqua`);
        break;

    }else if(bibita == 2){
        console.log(`è stata selezionata la coca-cola`);
        break;

    }else if(bibita == 3){
        console.log(`è stata selezionata la birra`);
        break;

    }
    bibita = Number(prompt(`Scelta non consentita, scegli una delle seguenti bibite: \n 1 - Acqua \n 2 - Coca-cola \n 3 - Birra`));
}