function randomNumGen() {
    return Math.floor(Math.random() * 100) + 1;
}
var numeroRandom = randomNumGen();
console.log(numeroRandom);
function compareNum(user1, user2, numeroCasuale) {
    var sceltaUser1 = Math.abs(user1 - numeroCasuale);
    var sceltaUser2 = Math.abs(user2 - numeroCasuale);
    if (user1 === numeroCasuale) {
        return "user1 ha azzeccato il numero giusto, compimenti!";
    }
    else if (user2 === numeroCasuale) {
        return "user2 ha azzeccato il numero giusto, complimenti!";
    }
    else {
        if (sceltaUser1 === sceltaUser2) {
            return "Nessuno dei due ha azzeccato il numero, e i numeri sono uguali ";
        }
        else if (sceltaUser1 < sceltaUser2) {
            return "Nessuno dei due ha azzeccato il numero, ma user1 si è avvicinato di più";
        }
        else {
            return "Nessuno dei due ha azzeccato il numero, ma user2 si è avvicinato di più";
        }
    }
}
var result = compareNum(25, 58, numeroRandom);
console.log(result);
