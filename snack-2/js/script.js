// creo una lista di persone
const list = [
    {
        name: 'Anakin',
        surname: 'Skywalker',
        age: '22'
    },
    {
        name: 'Greta',
        surname: 'Thumberg',
        age: '16'
    },
    {
        name: 'Walter',
        surname: 'White',
        age: '54'
    },
    {
        name: 'Alessia',
        surname: 'Porcino',
        age: '19'
    },
    {
        name: 'Obi-Wan',
        surname: 'Kenobi',
        age: '42'
    },
    {
        name: 'Francesco',
        surname: 'Camarda',
        age: '15'
    },
    {
        name: 'Jude',
        surname: 'Bellingham',
        age: '20'
    }
]

const driver = list.map((people) => {
    if( people.age >= 18 ){
        return people.name + '' + people.surname + ' è abilitato/a alla guida';
    } else if( people.age < 18 ){
        return people.name + '' + people.surname + ' non è abilitato/a alla guida';
    }
})

console.log(list, driver)
