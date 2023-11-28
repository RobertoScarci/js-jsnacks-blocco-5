const teamVolley = [
    {
        name: 'Brindisi',
        point: randomNumber(1, 50),
        foul: randomNumber(1, 50)
    },
    {
        name: 'Taranto',
        point: randomNumber(1, 50),
        foul: randomNumber(1, 50)
    },
    {
        name: 'Lecce',
        point: randomNumber(1, 50),
        foul: randomNumber(1, 50)
    },
    {
        name: 'Virtus Francavilla',
        point: randomNumber(1, 50),
        foul: randomNumber(1, 50)
    },
    {
        name: 'Cerignola',
        point: randomNumber(1, 50),
        foul: randomNumber(1, 50)
    },
]

function randomNumber(min, max) {
    return Math.floor((Math.random() * (max - min)) + min);
}

console.log(teamVolley)