let people = {};
let names = [];

document.getElementById('addFriend').addEventListener('click', function () {
    const list = document.getElementById('listGroup');
    const listLi = list.getElementsByTagName("li");
    const name = document.getElementById('newFriendName').value;
    if (name.length) {
        const newListItem = `
            <li class="list-group-item">${name}</li>
            `
        let namesList = [];
        for (let i = 0; i < listLi.length; i++) {

            namesList.push(listLi[i].textContent)
        }
        document.getElementById('newFriendName').value = ''
        namesList.includes(name) ? window.alert('This friend is already added!') : list.innerHTML += newListItem;
    }
})


document.getElementById('addPerson').addEventListener('click', function () {
    const list = document.getElementById('listGroup');
    const listLi = list.getElementsByTagName("li");
    if (document.getElementById('newPersonName').value.length && listLi.length > 1) {
        names.push(document.getElementById('newPersonName').value)
        const fnNames = [];
        if (names.includes(document.getElementById('newPersonName').value)) {
            for (let i = 0; i < listLi.length; i++) {

                i !== 0 ? fnNames.push(listLi[i].textContent) : null

            }
            //names.push(fnNames)
            //console.log(names)
            people[document.getElementById('newPersonName').value] = fnNames;
            console.log(people)
            addFriendButton(document.getElementById('newPersonName').value, fnNames);
            document.getElementById('newPersonName').value = '';
            document.getElementById('listGroup').innerHTML = `<li class="list-group-item" id='listHeader'>Added Friends Will Appear Here</li>`
        }
        else {
            window.alert('This friend has already been added!')
        }
    }
    else {
        window.alert('Not all fields completed!')
    }
})


const sampleNames = ['jliu', 'john', 'liu']
function addFriendButton(id, names) {
    const newModal = `
    <button class="button-red" role="button" data-toggle="modal" data-target="#${id}">${id}</button>

    <div class="modal fade" id="${id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
   
      <div class="modal-content" style='display: inline-block;'>
        <div class="modal-header">
          <h3 class="modal-title" id="exampleModalLabel" >${id} and Friends</h3>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
            </div>
            <ul class="list-group text-center" id='${id}-listGroup'>
                <li class="list-group-item" id='listHeader' style='font-size: 1.2em !important;'>Friends:</li>
            </ul>
        </div>
      </div>
      
    </div>
  </div>
  `
    document.getElementById('friendButtonsDiv').innerHTML += newModal;
    const listId = id + '-listGroup';
    for (let i = 0; i < names.length; i++) {
        const newListItem = `
    <li class="list-group-item">${names[i]}</li>
    `
        document.getElementById(listId).innerHTML += newListItem;
    }
}

document.getElementById('calculateButton').addEventListener('click', function () {
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
})