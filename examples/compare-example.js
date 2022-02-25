let people = {};
let names = [];
const Sam = ['Jack', 'Zach', 'Jennifer', 'Emma', 'Edward', 'Caroline', 'Rohin', 'Xan'];
const Emma = ['Zach', 'Edward', 'Sam', 'Rohin', 'Jennifer'];
const Zach = ['Jack', 'Emma', 'Caroline', 'Xan'];
people['Sam'] = Sam;
people['Emma'] = Emma;
people['Zach'] = Zach;
names.push('Sam');
names.push('Emma');
names.push('Zach');
let allMutuals = {};

const comparePeople = (A, B) => {
    let mutuals = [];
    let newNodeName;
    let peopleOne = people[A];
    let peopleTwo = people[B];

    for (let i = 0; i < peopleOne.length; i++) {
        let comparative = peopleOne[i];
        for (let k = 0; k < peopleTwo.length; k++) {
            peopleTwo[k] == comparative ? mutuals.push(peopleTwo[k]) : null
        }
    }
    newNodeName = (A + ' and ' + B);
    allMutuals[newNodeName] = mutuals;
};
for (let p = 0; p < names.length; p++) {
    let comparerA = names[p];
    for (let z = 0; z < names.length; z++) {
        let comparerB = names[z];
        if (comparerB !== comparerA) {
            comparePeople(comparerA, comparerB)
        }
    }

}
console.log(allMutuals)