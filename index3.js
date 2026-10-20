let cargoHold = ['Топливо', 'Кислород', 'Провизия', 'Кристаллы', 'Инструменты'];

cargoHold.forEach(item => {
    console.log(`Внимание: груз ${item} проверен`);

    if (item == 'Кристаллы') {
        console.log("⚠️ Внимание! Обнаружен ценный груз!");
    }
});

let pop = cargoHold.pop();
console.log("Разгружен последний отсек:");
console.log(pop);

let scienceCargo = cargoHold.slice(1, 4);
console.log(scienceCargo);
console.log(cargoHold);

cargoHold.splice(1, 2);
console.log(cargoHold);

cargoHold.splice(1, 0, 'Золото', 'Детектор лжи');
console.log(cargoHold);