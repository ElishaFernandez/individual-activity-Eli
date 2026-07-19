class Hero {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.weapon = weapons.Sword;
        this.weaponName = "Sword";
    }

    setWeapon(weaponName) {
        this.weapon = weapons[weaponName];
        this.weaponName = weaponName;
        messageLog(`${this.name} equipped ${weaponName}`);
    }

    attack(opponent) {
        if (Math.random() <= this.weapon.Accuracy) {
            const damage = this.weapon.Damage;
            messageLog(`${this.name} attacked ${opponent.name} with ${this.weaponName} for ${damage} damage`);
            opponent.takeDamage(damage);
        } else {
            messageLog(`${this.name} missed the attack!`);
        }
    }

    takeDamage(damage) {
        this.health -= damage;
        if (this.health < 0) this.health = 0;
    }
}

const weapons = {
    Sword: { Damage: 20, Accuracy: 0.8 },
    Bow: { Damage: 15, Accuracy: 0.9 },
    Axe: { Damage: 25, Accuracy: 0.7 }
};

let player1, player2;

function startGame() {
    player1 = new Hero(document.getElementById("player1-name").value);
    player2 = new Hero(document.getElementById("player2-name").value);

    document.getElementById("player1-title").innerText = player1.name;
    document.getElementById("player2-title").innerText = player2.name;

    updateUI();
    document.getElementById("player-input").style.display = "none";
    messageLog("⚔️ The battle begins!");
}

function playerAttack(playerNum) {
    const attacker = playerNum === 1 ? player1 : player2;
    const defender = playerNum === 1 ? player2 : player1;

    const weapon = document.getElementById(`player${playerNum}-weapon`).value;
    attacker.setWeapon(weapon);
    attacker.attack(defender);

    updateUI();
}

function updateUI() {
    document.getElementById("player1-health").innerText = `Health: ${player1.health}`;
    document.getElementById("player2-health").innerText = `Health: ${player2.health}`;

    document.getElementById("player1-health-bar").style.width = player1.health + "%";
    document.getElementById("player2-health-bar").style.width = player2.health + "%";
}

function messageLog(msg) {
    const log = document.getElementById("game-log");
    log.innerHTML += `<p>${msg}</p>`;
    log.scrollTop = log.scrollHeight;
}

function selectWeapon(player, weapon, img) {
    document.getElementById(`player${player}-weapon`).value = weapon;

    const imgs = document
        .getElementById(`player${player}-weapon-choices`)
        .getElementsByClassName("weapon-img");

    for (let i = 0; i < imgs.length; i++) {
        imgs[i].classList.remove("weapon-selected");
    }

    img.classList.add("weapon-selected");
     
}
