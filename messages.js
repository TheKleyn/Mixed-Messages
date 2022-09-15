// mixed messages

const times = ['Today', 'Tomorrow', 'In two weeks', 'Next year', 'In ten years', 'Next month', 'In a fortnight'];
const subject = ['you', 'your mom', 'your dog', 'your parrot', 'your spouse', 'your boss', 'your grandpa'];
const adjective = ['a great', 'a tiny', 'a gargantuan', 'an enourmous', 'a microscopic', 'an eternal', 'a resplendid'];
const verb = ['experience', 'behold', 'see', 'sense', 'feel', 'percieve', 'ken'];
const action = ['rubbing of parts', 'flatulance', 'existential crisis', 'menapause', 
'hair ball', 'revelation of Mosiath', 'visitaion of Jemendel'];

const randNum = () => {
return Math.floor(Math.random() *7);}

function generator() {
     // word array random selections below
     let timesRand = times[randNum()];
     let subjectRand = subject[randNum()];
     let adjectiveRand = adjective[randNum()];
     let verbRand = verb[randNum()];
     let actionRand = action[randNum()];

     /*console.log(timesRand);
     console.log(subjectRand);
     console.log(adjectiveRand);
     console.log(verbRand);
     console.log(actionRand);*/

     console.log(`And the very Reverend spaketh on to his flock: ${timesRand}, ${subjectRand} shalt ${verbRand} ${adjectiveRand} ${actionRand}. Amen.`)
    
}

console.log(generator());