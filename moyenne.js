function moyenne(){
    DC1=Number(prompt("Donner la note du DC1 : ",""));
    Coef1=Number(prompt("Donner le coefficient du DC1 : ",""));
    DC2=Number(prompt("Donner la note du DC2 : ",""));
    Coef2=Number(prompt("Donner le coefficient du DC2 : ",""));
    DS=Number(prompt("Donner la note du DS : ",""));
    CoefDS=Number(prompt("Donner le coefficient du DS : ",""));
    Moyenne = ((DC1 * Coef1) + (DC2 * Coef2) + (DS * CoefDS)) / (Coef1 + Coef2 + CoefDS);
    document.write("La moyenne est : "+Moyenne);
};