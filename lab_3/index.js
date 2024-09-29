const main = document.getElementById('main');
const lampTypeInput = document.getElementById('lamp-type');
const lampPowerInput = document.getElementById('lamp-power');
const lampLedsInput = document.getElementById('lamp-leds');
const lampManufacturerInput = document.getElementById('lamp-manufacturer');
const sortByLedsBtn = document.getElementById('sort-by-leds');
const sortByPowerBtn = document.getElementById('sort-by-power');
const countLedsBtn = document.getElementById('count-leds');
const searchInput = document.getElementById('search');

let data = [
  { type: 'Diode', power: 10, leds: 5, manufacturer: 'Philips' },
  { type: 'Halogen', power: 20, leds: 10, manufacturer: 'Osram' },
  { type: 'Fluorescent', power: 30, leds: 15, manufacturer: 'Panasonic' },
  { type: 'Fluorescent2', power: 350, leds: 20, manufacturer: 'Panasonic' },
  { type: 'Fluorescent3', power: 20, leds: 40, manufacturer: 'Panasonic' }
];

function updateDOM(providedData = data) {
  main.innerHTML = '<h2>Lamp List</h2>';

  providedData.forEach(item => {
    const element = document.createElement('div');
    element.classList.add('lamp');
    element.innerHTML = `<strong>${item.type}</strong>: Power = ${item.power} Watts; LEDs = ${item.leds}; Manufacturer = ${item.manufacturer}`;
    main.appendChild(element);
  });
}

function getFilteredLamps() {
  const searchTerm = searchInput.value.trim().toLowerCase();
  if (searchTerm === '') {
    return data; // Повертаємо всі дані, якщо searchTerm порожній
  }
  return data.filter(lamp =>
      lamp.type.toLowerCase().includes(searchTerm)
  );
}

function sortByLeds() {
  const filteredLamps = getFilteredLamps();
  filteredLamps.sort((a, b) => a.leds - b.leds);
  updateDOM(filteredLamps);
}

function sortByPower() {
  const filteredLamps = getFilteredLamps();
  filteredLamps.sort((a, b) => a.power - b.power);
  updateDOM(filteredLamps);
}

function countLedsAndPower() {
  const filteredLamps = getFilteredLamps();
  const totalLeds = filteredLamps.reduce((total, lamp) => total + lamp.leds, 0);
  const totalPower = filteredLamps.reduce((total, lamp) => total + lamp.power, 0);
  const resultElement = document.getElementById('total-leds-result');

  if (resultElement) {
    resultElement.textContent = `Total LEDs: ${totalLeds}, Total Power: ${totalPower} Watts`;
  } else {
    const newElement = document.createElement('p');
    newElement.id = 'total-leds-result';
    newElement.textContent = `Total LEDs: ${totalLeds}, Total Power: ${totalPower} Watts`;
    main.appendChild(newElement);
  }
}

countLedsBtn.addEventListener('click', countLedsAndPower);
searchInput.addEventListener('input', () => {
  if (searchInput.value.trim() !== '') {
    updateDOM(getFilteredLamps());
  } else {
    updateDOM(); // Оновлюємо DOM, якщо поле порожнє
  }
});
sortByLedsBtn.addEventListener('click', sortByLeds);
sortByPowerBtn.addEventListener('click', sortByPower);

// Оновлення DOM при завантаженні
updateDOM();

// Введення в полі lamp type тільки літерами
lampTypeInput.addEventListener('input', function() {
  lampTypeInput.value = lampTypeInput.value.replace(/[^a-zA-Z]/g, '');
});
