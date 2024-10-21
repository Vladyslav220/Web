const main = document.getElementById('main');
const lampTypeInput = document.getElementById('lamp-type');
const lampPowerInput = document.getElementById('lamp-power');
const lampLedsInput = document.getElementById('lamp-leds');
const lampManufacturerInput = document.getElementById('lamp-manufacturer');
const addLampBtn = document.getElementById('add-lamp');
const sortBtn = document.getElementById('sort');
const sortLedsBtn = document.getElementById('sort-leds');
const countLedsBtn = document.getElementById('count-leds');
const searchInput = document.getElementById('search');

let information = [];

// Функція для отримання списку ламп
async function fetchLamps() {
  try {
    const response = await fetch('http://localhost:5000/lamps');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    information = await response.json();
    updateDOM();
  } catch (error) {
    console.error('Error fetching lamps:', error);
  }
}

fetchLamps();

// Оновлення DOM
function updateDOM(providedData = information) {
  main.innerHTML = '<h2>Lamp List</h2>';

  providedData.forEach(item => {
    const element = document.createElement('div');
    element.classList.add('lamp');
    element.innerHTML = `
            <strong>${item.type}</strong>: Power = ${item.power} Watts; LEDs = ${item.leds}; Manufacturer = ${item.manufacturer}
            <button class="edit-button">Edit</button>
            <button class="delete-button">Delete</button>`;
    main.appendChild(element);

    const editButton = element.querySelector('.edit-button');
    editButton.addEventListener('click', () => {
      editLamp(element, item);
    });

    const deleteButton = element.querySelector('.delete-button');
    deleteButton.addEventListener('click', async () => {
      await deleteLamp(item.id);
    });
  });
}

// Функція для видалення лампи
async function deleteLamp(id) {
  try {
    await fetch(`http://localhost:5000/lamps/${id}`, {
      method: 'DELETE',
    });

    information = information.filter(lamp => lamp.id !== id);
    updateDOM();
  } catch (error) {
    console.error('Error deleting lamp:', error);
  }
}

// Функція для додавання нової лампи
async function addLamp() {
  const type = lampTypeInput.value;
  const power = parseFloat(lampPowerInput.value);
  const leds = parseInt(lampLedsInput.value);
  const manufacturer = lampManufacturerInput.value;

  if (power < 0 || leds < 0) {
    alert('Power and number of LEDs must be positive values.');
    return;
  }

  if (!isNaN(power) && !isNaN(leds) && type && manufacturer) {
    const newLamp = { type, power, leds, manufacturer };

    try {
      const response = await fetch('http://localhost:5000/lamps', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newLamp),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const addedLamp = await response.json();
      information.push(addedLamp);
      updateDOM();

      // Очистка полів введення
      lampTypeInput.value = '';
      lampPowerInput.value = '';
      lampLedsInput.value = '';
      lampManufacturerInput.value = '';
    } catch (error) {
      console.error('Error adding lamp:', error);
    }
  } else {
    alert('Invalid input. Please provide valid lamp details.');
  }
}

// Функція для сортування ламп за потужністю
async function sortByPower() {
  const searchTerm = searchInput.value.toLowerCase();

  information.sort((a, b) => a.power - b.power);

  const filteredLamps = information.filter(lamp =>
      lamp.type.toLowerCase().includes(searchTerm)
  );
  updateDOM(filteredLamps);
}

// Функція для сортування ламп за кількістю світлодіодів
async function sortByLeds() {
  const searchTerm = searchInput.value.toLowerCase();

  information.sort((a, b) => a.leds - b.leds);

  const filteredLamps = information.filter(lamp =>
      lamp.type.toLowerCase().includes(searchTerm)
  );

  updateDOM(filteredLamps);
}

// Функція для підрахунку загальної кількості світлодіодів
async function countLeds() {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredLamps = information.filter(lamp =>
      lamp.type.toLowerCase().includes(searchTerm)
  );

  const totalLeds = filteredLamps.reduce((total, lamp) => total + lamp.leds, 0);
  const resultElement = document.getElementById('total-leds-result');

  if (resultElement) {
    resultElement.textContent = `Total LEDs: ${totalLeds}`;
  } else {
    const newElement = document.createElement('p');
    newElement.id = 'total-leds-result';
    newElement.textContent = `Total LEDs: ${totalLeds}`;

    main.appendChild(newElement);
  }
}

// Функція для пошуку лампи
async function searchLamp() {
  const searchTerm = searchInput.value.trim().replace(/[^\w\s]/gi, '').toLowerCase();
  const filteredLamps = information.filter(lamp =>
      lamp.type.toLowerCase().includes(searchTerm)
  );
  updateDOM(filteredLamps);
}

// Функція для редагування лампи
async function editLamp(lampElement, lampData) {
  const typeLabel = document.createElement('label');
  typeLabel.textContent = 'Type: ';

  const powerLabel = document.createElement('label');
  powerLabel.textContent = 'Power (Watts): ';

  const ledsLabel = document.createElement('label');
  ledsLabel.textContent = 'LEDs: ';

  const manufacturerLabel = document.createElement('label');
  manufacturerLabel.textContent = 'Manufacturer: ';

  const editTypeInput = document.createElement('input');
  editTypeInput.type = 'text';
  editTypeInput.value = lampData.type;

  const editPowerInput = document.createElement('input');
  editPowerInput.type = 'number';
  editPowerInput.value = lampData.power;
  editPowerInput.min = 0;

  const editLedsInput = document.createElement('input');
  editLedsInput.type = 'number';
  editLedsInput.value = lampData.leds;
  editLedsInput.min = 0;

  const editManufacturerInput = document.createElement('input');
  editManufacturerInput.type = 'text';
  editManufacturerInput.value = lampData.manufacturer;

  const saveButton = document.createElement('button');
  saveButton.textContent = 'Save';

  lampElement.innerHTML = '';
  lampElement.appendChild(typeLabel);
  lampElement.appendChild(editTypeInput);
  lampElement.appendChild(document.createElement('br'));
  lampElement.appendChild(powerLabel);
  lampElement.appendChild(editPowerInput);
  lampElement.appendChild(document.createElement('br'));
  lampElement.appendChild(ledsLabel);
  lampElement.appendChild(editLedsInput);
  lampElement.appendChild(document.createElement('br'));
  lampElement.appendChild(manufacturerLabel);
  lampElement.appendChild(editManufacturerInput);
  lampElement.appendChild(document.createElement('br'));
  lampElement.appendChild(saveButton);

  saveButton.addEventListener('click', async () => {
    const updatedType = editTypeInput.value;
    const updatedPower = parseFloat(editPowerInput.value);
    const updatedLeds = parseInt(editLedsInput.value);
    const updatedManufacturer = editManufacturerInput.value;

    if (updatedPower < 0 || updatedLeds < 0) {
      alert('Power and number of LEDs must be positive values.');
      return;
    }

    if (updatedType && !isNaN(updatedPower) && !isNaN(updatedLeds) && updatedManufacturer) {
      const updatedLamp = { type: updatedType, power: updatedPower, leds: updatedLeds, manufacturer: updatedManufacturer };

      try {
        const response = await fetch(`http://localhost:5000/lamps/${lampData.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(updatedLamp),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        lampData.type = updatedType;
        lampData.power = updatedPower;
        lampData.leds = updatedLeds;
        lampData.manufacturer = updatedManufacturer;
        updateDOM();
      } catch (error) {
        console.error('Error updating lamp:', error);
      }
    } else {
      alert('Please enter valid values for all fields.');
    }
  });
}

// Додавання обробників подій
addLampBtn.addEventListener('click', addLamp);
sortBtn.addEventListener('click', sortByPower);
sortLedsBtn.addEventListener('click', sortByLeds);
countLedsBtn.addEventListener('click', countLeds);
searchInput.addEventListener('input', searchLamp);
