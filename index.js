function change(){
    var randomnumber1 = Math.floor(Math.random()*6)+1;
    var randomnumber2 = Math.floor(Math.random()*6)+1;

    document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice"+randomnumber1+".png");
    document.getElementsByClassName("img2")[0].setAttribute("src", "images/dice"+randomnumber2+".png");

    var h1 = document.getElementsByTagName("h1")[0];

    if(randomnumber1 > randomnumber2){
        h1.innerHTML = "🚩 Player 1 wins!";
    } else if(randomnumber1 < randomnumber2){
        h1.innerHTML = "Player 2 wins! 🚩";
    } else{
        h1.innerHTML = "Draw!";
    }
}