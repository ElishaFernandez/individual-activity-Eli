class Hero {
    constructor(n) {//parameter is a name
        this.name = n;
        this.health = 100;
    }
}

const weapons = {
  Sword:(Damage=20, Accuracy=0.8),
  Bow:(Damage=15, Accuracy=0.9),
  Axe:(Damage=25, Accuracy=0.7)
};

let player1, player2;
let currentplayer;

function startGame() {
    player1 = new Hero(document.getElementById("player1-name").value.trim());
    player2 = new Hero(document.getElementById("player2-name").value.trim());
    document.getElementById("player1-title").innerHTML = player1.name;
    document.getElementById("player2-title").innerHTML = player2.name;
    document.getElementById("player1-health").innerHTML = "Health: " + player1.health;
    document.getElementById("player2-health").innerHTML = "Health: " + player2.health;
    document.getElementById("player-input").style.display = "none";
      
}

function messageLog(msg) {
    const gamelog = document.getElementById("game-log");
    gamelog.innerHTML += `<p>$(msg)</p>`;
    gamelog.scrollTop = gamelog.scrollHeight;
}

