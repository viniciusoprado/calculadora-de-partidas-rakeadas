function calculateLevel(wins, losses) {
    let winBalance = wins - losses;
    let level = "";

    switch (true) {
        case wins < 10:
            level = "Ferro";
            break;
        case wins >= 11 && wins <= 20:
            level = "Bronze";
            break;
        case wins >= 21 && wins <= 50:
            level = "Prata";
            break;
        case wins >= 51 && wins <= 80:
            level = "Ouro";
            break;
        case wins >= 81 && wins <= 90:
            level = "Diamante";
            break;
        case wins >= 91 && wins <= 100:
            level = "Lendário";
            break;
        default:
            level = "Imortal";
    }

    console.log(`O Herói tem saldo de ${winBalance} e está no nível de ${level}`);
    return { winBalance, level };
}


let result = calculateLevel(84, 25); 
