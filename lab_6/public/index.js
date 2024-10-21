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
let filteredInformation = [];
let isSearchActive = false;

async function fetchLamps() {
  try {
    const response = await fetch('http://localhost:5000/lamps');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    information = await response.json();
    filteredInformation = information;
    updateDOM();
  } catch (error) {
    console.error('Error fetching lamps:', error);
  }
}

fetchLamps();

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

async function deleteLamp(id) {
  try {
    await fetch(`http://localhost:5000/lamps/${id}`, {
      method: 'DELETE',
    });

    information = information.filter(lamp => lamp.id !== id);
    if (isSearchActive) {
      filteredInformation = filteredInformation.filter(lamp => lamp.id !== id);
    }
    updateDOM(isSearchActive ? filteredInformation : information);
  } catch (error) {
    console.error('Error deleting lamp:', error);
  }
}

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
      if (isSearchActive) {
        filteredInformation.push(addedLamp);
      }
      updateDOM(isSearchActive ? filteredInformation : information);

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

async function sortByPower() {
  try {
    const response = await fetch('http://localhost:5000/lamps/sort/power' + (isSearchActive ? `?term=${searchInput.value}` : ''));
    const sortedLamps = await response.json();
    updateDOM(sortedLamps);
  } catch (error) {
    console.error('Error sorting lamps:', error);
  }
}

async function sortByLeds() {
  try {
    const response = await fetch('http://localhost:5000/lamps/sort/leds' + (isSearchActive ? `?term=${searchInput.value}` : ''));
    const sortedLamps = await response.json();
    updateDOM(sortedLamps);
  } catch (error) {
    console.error('Error sorting lamps by LEDs:', error);
  }
}

async function countLeds() {
  try {
    const response = await fetch('http://localhost:5000/lamps/count-leds' + (isSearchActive ? `?term=${searchInput.value}` : ''));
    const { totalLeds } = await response.json();
    const resultElement = document.getElementById('total-leds-result');

    if (resultElement) {
      resultElement.textContent = `Total LEDs: ${totalLeds}`;
    } else {
      const newElement = document.createElement('p');
      newElement.id = 'total-leds-result';
      newElement.textContent = `Total LEDs: ${totalLeds}`;
      main.appendChild(newElement);
    }
  } catch (error) {
    console.error('Error counting LEDs:', error);
  }
}

async function searchLamp() {
  const searchTerm = searchInput.value.trim().replace(/[^\w\s]/gi, '').toLowerCase();
  if (searchTerm) {
    isSearchActive = true;
    try {
      const response = await fetch(`http://localhost:5000/lamps/search?term=${searchTerm}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      filteredInformation = await response.json();
      updateDOM(filteredInformation);
    } catch (error) {
      console.error('Error searching lamps:', error);
    }
  } else {
    isSearchActive = false;
    filteredInformation = information;
    updateDOM(information);
  }
}

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

    if (!isNaN(updatedPower) && !isNaN(updatedLeds) && updatedType && updatedManufacturer) {
      const updatedLamp = { ...lampData, type: updatedType, power: updatedPower, leds: updatedLeds, manufacturer: updatedManufacturer };

      try {
        const response = await fetch(`http://localhost:5000/lamps/${lampData.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(updatedLamp),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const savedLamp = await response.json();
        const index = information.findIndex(lamp => lamp.id === lampData.id);
        information[index] = savedLamp;
        if (isSearchActive) {
          filteredInformation[index] = savedLamp;
        }
        updateDOM(isSearchActive ? filteredInformation : information);
      } catch (error) {
        console.error('Error updating lamp:', error);
      }
    } else {
      alert('Invalid input. Please provide valid lamp details.');
    }
  });
}

addLampBtn.addEventListener('click', addLamp);
sortBtn.addEventListener('click', sortByPower);
sortLedsBtn.addEventListener('click', sortByLeds);
countLedsBtn.addEventListener('click', countLeds);
searchInput.addEventListener('input', searchLamp);
