

export const encrytionKey = (card, door) => {
  let subj = 7;
  let cardLoops = 0;
  let doorLoops = 0;
  let val = 1;

  for (let i = 1 ; i < 9999; i++) {
    val = (val*subj) % 20201227;
    if (val === card) cardLoops = i;
    if (val === door) doorLoops = i;
    if (cardLoops && doorLoops) break;
  }
  subj = card;
  val = 1;
  for (let i=0 ; i < doorLoops; i++) {
    val = (val*subj)%20201227;
  }
  return val;
}