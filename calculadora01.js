function calculateLevel(wins, losses) {
    let winBalance = wins - losses;
    let level = "";

    if (wins < 10) {
        level = "Ferro";
    } else if (wins >= 11 && wins <= 20) {
        level = "Bronze";
    } else if (wins >= 21 && wins <= 50) {
        level = "Prata";
    } else if (wins >= 51 && wins <= 80) {
        level = "Ouro";
    } else if (wins >= 81 && wins <= 90) {
        level = "Diamante";
    } else if (wins >= 91 && wins <= 100) {
        level = "Lendário";
    } else {
        level = "Imortal";
    }

    console.log(`O Herói tem saldo de ${winBalance} e está no nível de ${level}`);
    return { winBalance, level };
}


let result = calculateLevel(150, 54);