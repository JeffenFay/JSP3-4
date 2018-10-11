//Écouteur qui applique le comportement désiré (au clique vérifie si les mdp sont équivalents)
document.getElementsByTagName('button')[0].addEventListener('click', function() {
  passwordTest(document.getElementById('password').value, document.getElementById('confirmPassword').value);
});
//fonction qui teste les mdp et impose le style au champ d'entrée
function passwordTest(passWd1, passWd2){
  if(passWd1 != passWd2){
    document.getElementById('confirmPassword').style.border = 'thick solid red';
  }else{
    document.getElementById('confirmPassword').style.border = 'thick solid green';
  };
}
