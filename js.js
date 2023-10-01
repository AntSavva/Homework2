class Passenger {
    constructor (age, distance){
        this.age = age;
        this.distance = distance;
    }
}

class Taxi{
    constructor(number, driverName, costPerKilomert){
        this.number = number;
        this.driverName = driverName;
        this.costPerKilomert = costPerKilomert;
        this.passengers = [];
    }

    showPassengers(passengers){
        const passengerInfo = document.getElementById("passengerInfo")
        let text;
        console.log(passengers)
        for (let i = 0; i < passengers.length; i++){
            text = text + `<p>Возраст: ${passengers[i].age}, Путь ${passengers[i].distance} Итоговая сумма: ${this.calculateTripCost()}</p>`
        }
        text = text + `Итоговая сумма: ${this.calculateTripCost()}`
        passengerInfo.innerHTML = text;
        
    }

    calculateTripCost(){
        let totalCost = 0;
        for (const passenger of this.passengers){
            totalCost += passenger.distance * this.costPerKilomert;
        }
        return totalCost;
    }

    addPassenger(passenger){
        if (this.passengers.length < 4){
            console.log("Клиент добавлен")
            this.passengers.push(passenger)
            console.log(this.passengers)
            this.showPassengers(this.passengers)
        }
        else{
            console.log("Такси заполнено")
        }

    }


}

document.addEventListener("DOMContentLoaded", ()=>{
    const taxi = new Taxi("Р777УС", "Степан Слизких", 2.5)

    const button = document.getElementById("button")
    button.addEventListener("click", (event) =>{
        event.preventDefault()
        console.log("тест")
        const ageInput = document.getElementById("age");
        const distanceInput = document.getElementById("distance");

        const age = parseInt(ageInput.value);
        const distance = parseFloat(distanceInput.value)

        const passenger = new Passenger(age, distance);
        taxi.addPassenger(passenger);
    })

})




