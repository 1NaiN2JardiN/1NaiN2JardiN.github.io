function echelle1a10(nbr){
    var monTexte
    if (nbr == 1){
      monTexte = "Faux !";
    } 
    if (nbr == 2){
      monTexte = "Bah non :/";
    }
    if (nbr == 3){
      monTexte = "Non mais là t'abuse";
    }
    if (nbr == 4){
      monTexte = "MAIS 10, YA QUOI QUE TU COMPRENDS PAS ?!";
    } 
    if (nbr == 5){
      monTexte = "Allez on y est presque plus que 5";
    }
    if (nbr == 6){
      monTexte = "Heuresement que j'ai pas mis une echelle de 1 à 100";
    }
    if (nbr == 7){
      monTexte = "+3";
    }
    if (nbr == 8){
      monTexte = "+2";
    }
    if (nbr == 9){
      monTexte = "Pas mal mais +1";
    }
    if (nbr == 10){
      monTexte = "Merci, c'est trop gentil :)";
    }
    document.getElementById("echellereponse").textContent = monTexte;
  }

