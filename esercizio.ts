function randomNumGen(): number {
  return Math.floor(Math.random() * 100) + 1;
}

const numeroRandom = randomNumGen();
console.log(numeroRandom);

function compareNum(
  user1: number,
  user2: number,
  numeroCasuale: number
): string {
  const sceltaUser1 = Math.abs(user1 - numeroCasuale);
  const sceltaUser2 = Math.abs(user2 - numeroCasuale);

  if (user1 === numeroCasuale) {
    return "user1 ha azzeccato il numero giusto, compimenti!";
  } else if (user2 === numeroCasuale) {
    return "user2 ha azzeccato il numero giusto, complimenti!";
  } else {
    if (sceltaUser1 === sceltaUser2) {
      return "Nessuno dei due ha azzeccato il numero, e i numeri sono uguali ";
    } else if (sceltaUser1 < sceltaUser2) {
      return "Nessuno dei due ha azzeccato il numero, ma user1 si è avvicinato di più";
    } else {
      return "Nessuno dei due ha azzeccato il numero, ma user2 si è avvicinato di più";
    }
  }
}

const result = compareNum(25, 58, numeroRandom);
console.log(result);
