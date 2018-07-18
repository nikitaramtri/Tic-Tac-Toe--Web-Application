//constructor for creating player objects
function Player(name){
    this.playerName = name;
}
var player1 = document.getElementById("computer-p1name").value;
var player2 = document.getElementById("computer-p2name").value;
var Player1 = new Player(player1); //has cross
var Player2 = new Player(player2);//has nought
//window.alert(Player1.playerName);
var i = 1;//counter

//player1 variables
var player1Row1=0;
var player1Row2=0;
var player1Row3=0;
var player1Col1=0;
var player1Col2=0;
var player1Col3=0;
var player1Diag1=0;
var player1Diag2=0;

//player2 variables
var player2Row1=0;
var player2Row2=0;
var player2Row3=0;
var player2Col1=0;
var player2Col2=0;
var player2Col3=0;
var player2Diag1=0;
var player2Diag2=0;

document.getElementById("player1name").innerHTML = Player1.playerName;
document.getElementById("player2name").innerHTML = Player2.playerName;
// document.getElementById("player1chances").innerHTML = ((i+1)/2).toString();
// document.getElementById("player1chances").innerHTML = (i/2).toString();
function check(){
    var x = Math.max.apply(null, arguments);
    if(x === 3){
        document.getElementsByClassName("winner-box")[0].style.display = "block";
        document.getElementsByClassName("background-container")[0].style.display = "none";
        return true;
    }
    else
        return false;
}

function computerTurn(){
    var positions = document.getElementsByClassName("unchecked");
    var rand_position =Math.floor(Math.random() * (positions.length) );
    var id = positions[rand_position].id;
    if(id==="box-1"){
        positions[rand_position].innerHTML = "<img style = 'width: 100%; ' src='Images/Tic-tac-toe-nought.png'><img>";
        positions[rand_position].className = "click-box checked player2";
        player2Row1++;
        player2Col1++;
        player2Diag1++;
        if(check(player2Row1, player2Col1, player2Diag1))
            document.getElementById('winner').innerHTML = 'Player 2: ' + Player2.playerName + ' won!';
    }
    else if(id === "box-2"){
        positions[rand_position].innerHTML = "<img style = 'width: 100%; ' src='Images/Tic-tac-toe-nought.png'><img>";
        positions[rand_position].className = "click-box checked player2";
        player2Row1++;
        player2Col2++;
        if(check(player2Row1, player2Col2))
            document.getElementById('winner').innerHTML = 'Player 2: ' + Player2.playerName + ' won!';
    }
    else if(id === "box-3"){
        positions[rand_position].innerHTML = "<img style = 'width: 100%; ' src='Images/Tic-tac-toe-nought.png'><img>";
        positions[rand_position].className = "click-box checked player2";
        player2Row1++;
        player2Col3++;
        player2Diag2++;
        if(check(player2Row1, player2Col3, player2Diag2))
            document.getElementById('winner').innerHTML = 'Player 2: ' + Player2.playerName + ' won!';
    }
    else if(id === "box-4"){
        positions[rand_position].innerHTML = "<img style = 'width: 100%; ' src='Images/Tic-tac-toe-nought.png'><img>";
        positions[rand_position].className = "click-box checked player2";
        player2Row2++;
        player2Col1++;
        if(check(player2Row2, player2Col1))
            document.getElementById('winner').innerHTML = 'Player 2: ' + Player2.playerName + ' won!';
    }
    else if(id === "box-5"){
        positions[rand_position].innerHTML = "<img style = 'width: 100%; ' src='Images/Tic-tac-toe-nought.png'><img>";
        positions[rand_position].className = "click-box checked player2";
        player2Row2++;
        player2Col2++;
        player2Diag1++;
        player2Diag2++;
        if(check(player2Row2, player2Col2, player2Diag1, player2Diag2))
            document.getElementById('winner').innerHTML = 'Player 2: ' + Player2.playerName + ' won!';
    }
    else if(id === "box-6"){
        positions[rand_position].innerHTML = "<img style = 'width: 100%; ' src='Images/Tic-tac-toe-nought.png'><img>";
        positions[rand_position].className = "click-box checked player2";
        player2Row2++;
        player2Col3++;
        if(check(player2Row2, player2Col3))
            document.getElementById('winner').innerHTML = 'Player 2: ' + Player2.playerName + ' won!';
    }
    else if(id === "box-7"){
        positions[rand_position].innerHTML = "<img style = 'width: 100%; ' src='Images/Tic-tac-toe-nought.png'><img>";
        positions[rand_position].className = "click-box checked player2";
        player2Row3++;
        player2Col1++;
        player2Diag2++;
        if(check(player2Row3, player2Col1, player2Diag2))
            document.getElementById('winner').innerHTML = 'Player 2: ' + Player2.playerName + ' won!';
    }
    else if(id === "box-8"){
        positions[rand_position].innerHTML = "<img style = 'width: 100%; ' src='Images/Tic-tac-toe-nought.png'><img>";
        positions[rand_position].className = "click-box checked player2";
        player2Row3++;
        player2Col2++;
        if(check(player2Row3, player2Col2))
            document.getElementById('winner').innerHTML = 'Player 2: ' + Player2.playerName + ' won!';
    }
    else {
        positions[rand_position].innerHTML = "<img style = 'width: 100%; ' src='Images/Tic-tac-toe-nought.png'><img>";
        positions[rand_position].className = "click-box checked player2";
        player2Row3++;
        player2Col3++;
        player2Diag1++;
        if(check(player2Row3, player2Col3, player2Diag1))
            document.getElementById('winner').innerHTML = 'Player 2: ' + Player2.playerName + ' won!';
    }
}
function myFunction1() {
    var element = document.getElementById("box-1");
    if(i%2) {
        element.innerHTML = "<img style = 'width: 100%; ' src='Images/Tic-tac-toe-cross.png'><img>";
        element.className = "click-box checked player1";
        player1Row1++;
        player1Col1++;
        player1Diag1++;
        var checker = check(player1Row1, player1Col1, player1Diag1);
        if(checker)
            document.getElementById('winner').innerHTML = 'Player 1: ' + Player1.playerName + ' won!';
    }
    i++;
    if (i===10 && checker===false){
        draw();
    }
    computerTurn();
    i++;
    if (i===10){
        draw();
    }
}
function myFunction2() {
    var element = document.getElementById("box-2");
    if(i%2) {
        element.innerHTML = "<img style = 'width: 100%; ' src='Images/Tic-tac-toe-cross.png'><img>";
        element.className = "click-box checked player1";
        player1Row1++;
        player1Col2++;
        var checker = check(player1Row1, player1Col2);
        if(checker)
            document.getElementById('winner').innerHTML = 'Player 1: ' + Player1.playerName + ' won!';
    }
    i++;
    if (i===10 && checker===false){
        draw();
    }
    computerTurn();
    i++;
    if (i===10){
        draw();
    }
}
function myFunction3() {
    var element = document.getElementById("box-3");
    if(i%2) {
        element.innerHTML = "<img style = 'width: 100%; ' src='Images/Tic-tac-toe-cross.png'><img>";
        element.className = "click-box checked player1";
        player1Row1++;
        player1Col3++;
        player1Diag2++;
        var checker = check(player1Row1, player1Col3, player1Diag2);
        if(checker)
            document.getElementById('winner').innerHTML = 'Player 1: ' + Player1.playerName + ' won!';
    }
    i++;
    if (i===10 && checker===false){
        draw();
    }
    computerTurn();
    i++;
    if (i===10){
        draw();
    }
}
function myFunction4() {
    var element = document.getElementById("box-4");
    if(i%2) {
        element.innerHTML = "<img style = 'width: 100%; ' src='Images/Tic-tac-toe-cross.png'><img>";
        element.className = "click-box checked player1";
        player1Row2++;
        player1Col1++;
        var checker = check(player1Row2, player1Col1);
        if(checker)
            document.getElementById('winner').innerHTML = 'Player 1: ' + Player1.playerName + ' won!';
    }
    i++;
    if (i===10 && checker===false){
        draw();
    }
    computerTurn();
    i++;
    if (i===10){
        draw();
    }
}
function myFunction5() {
    var element = document.getElementById("box-5");
    if(i%2) {
        element.innerHTML = "<img style = 'width: 100%; ' src='Images/Tic-tac-toe-cross.png'><img>";
        element.className = "click-box checked player1";
        player1Row2++;
        player1Col2++;
        player1Diag1++;
        player1Diag2++;
        var checker = check(player1Row2, player1Col2, player1Diag1, player1Diag2);
        if(checker)
            document.getElementById('winner').innerHTML = 'Player 1: ' + Player1.playerName + ' won!';
    }
    i++;
    if (i===10 && checker===false){
        draw();
    }
    computerTurn();
    i++;
    if (i===10){
        draw();
    }
}
function myFunction6() {
    var element = document.getElementById("box-6");
    if(i%2) {
        element.innerHTML = "<img style = 'width: 100%; ' src='Images/Tic-tac-toe-cross.png'><img>";
        element.className = "click-box checked player1";
        player1Row2++;
        player1Col3++;
        var checker = check(player1Row2, player1Col3);
        if(checker)
            document.getElementById('winner').innerHTML = 'Player 1: ' + Player1.playerName + ' won!';
    }
    i++;
    if (i===10 && checker===false){
        draw();
    }
    computerTurn();
    i++;
    if (i===10){
        draw();
    }
}
function myFunction7() {
    var element = document.getElementById("box-7");
    if(i%2) {
        element.innerHTML = "<img style = 'width: 100%; ' src='Images/Tic-tac-toe-cross.png'><img>";
        element.className = "click-box checked player1";
        player1Row3++;
        player1Col1++;
        player1Diag2++;
        var checker = check(player1Row3, player1Col1, player1Diag2);
        if(checker)
            document.getElementById('winner').innerHTML = 'Player 1: ' + Player1.playerName + ' won!';
    }
    i++;
    if (i===10 && checker===false){
        draw();
    }
    computerTurn();
    i++;
    if (i===10){
        draw();
    }
}
function myFunction8() {
    var element = document.getElementById("box-8");
    if(i%2) {
        element.innerHTML = "<img style = 'width: 100%; ' src='Images/Tic-tac-toe-cross.png'><img>";
        element.className = "click-box checked player1";
        player1Row3++;
        player1Col2++;
        var checker = check(player1Row3, player1Col2);
        if(checker)
            document.getElementById('winner').innerHTML = 'Player 1: ' + Player1.playerName + ' won!';
    }
    i++;
    if (i===10 && checker===false){
        draw();
    }
    computerTurn();
    i++;
    if (i===10){
        draw();
    }
}
function myFunction9() {
    var element = document.getElementById("box-9");
    if(i%2) {
        element.innerHTML = "<img style = 'width: 100%; ' src='Images/Tic-tac-toe-cross.png'><img>";
        element.className = "click-box checked player1";
        player1Row3++;
        player1Col3++;
        player1Diag1++;
        var checker = check(player1Row3, player1Col3, player1Diag1);
        if(checker)
            document.getElementById('winner').innerHTML = 'Player 1: ' + Player1.playerName + ' won!';
    }
    i++;
    if (i===10 && checker===false){
        draw();
    }
    computerTurn();
    i++;
    if (i===10){
        draw();
    }
}