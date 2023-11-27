// creo la lista delle macchine
const carList = [
    {
        marca: 'BMW',
        modello: 'Serie 1',
        alimentazione: 'diesel'
    },
    {
        marca: 'Audi',
        modello: 'RS8',
        alimentazione: 'benzina'
    },
    {
        marca: 'Range Rover',
        modello: '4x4',
        alimentazione: 'gpl'
    },
    {
        marca: 'Renault',
        modello: 'Clio 2018',
        alimentazione: 'diesel'
    },
    {
        marca: 'Bugatti',
        modello: 'Chiron',
        alimentazione: 'elettrico'
    },
    {
        marca: 'Tesla',
        modello: 'Model S',
        alimentazione: 'elettrico'
    },
    {
        marca: 'Volkswagen',
        modello: 'Golf GT',
        alimentazione: 'benzina'
    },
    {
        marca: 'Mercedes',
        modello: 'Classe A',
        alimentazione: 'diesel'
    },
    {
        marca: 'Mercedes',
        modello: 'Benz Classe A',
        alimentazione: 'benzina'
    },
    {
        marca: 'BMW',
        modello: 'Serie 7',
        alimentazione: 'metano'
    }
]

const fuelCar = carList.filter((car) => {
    if (car.alimentazione === 'benzina'){
        return true;
    }
})

console.log(fuelCar)

const dieselCar = carList.filter((car) => {
    if (car.alimentazione === 'diesel'){
        return true;
    }
})

console.log(dieselCar)

const otherCar = carList.filter((car) => {
    if(car.alimentazione === 'benzina'){
        return false;
    } else if(car.alimentazione === 'diesel'){
        return false;
    } else {
        return true;
    }
})

console.log(otherCar)