function loadData(callback) {
    // Імітація асинхронного запиту
    setTimeout(() => {
        const data = "Дані з сервака";
        callback(data);
    }, 1000);
}
loadData((result) => {
    console.log(result); // Виведе: Дані з сервера
});




const myPromise = new Promise((resolve, reject) => {
    const success = true; // успіх або невдача
    if (success) {
        resolve("Операція була успішною!");
    } else {
        reject("Операція завершилася невдачею.");
    }
});

myPromise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    });




myPromise
    .then((result) => {
        console.log(result); // Виведе: "Операція була успішною!"
    })
    .catch((error) => {
        console.error(error); // Не викликається, якщо обіцянка успішна
    });





myPromise
    .catch((error) => {
        console.error(error); // Виведе: "Операція завершилася невдачею."
    });





myPromise
    .finally(() => {
        console.log("Операція завершена."); // Викликається завжди
    });






const myPromise = new Promise((resolve, reject) => {
    const success = true;
    if (success) {
        resolve("Операція була успішною!");
    } else {
        reject("Операція завершилася невдачею.");
    }
});

myPromise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    })
    .finally(() => {
        console.log("Операція завершена.");
    });













function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true; // Імітація успіху або невдачі
            if (success) {
                resolve("Дані отримано!");
            } else {
                reject("Не вдалося отримати дані.");
            }
        }, 1000);
    });
}

// Асинхронна функція
async function getData() {
    try {
        const result = await fetchData(); // Чекаємо на виконання обіцянки
        console.log(result); // Виведе: "Дані отримано!"
    } catch (error) {
        console.error(error); // Виведе помилку, якщо обіцянка відхилена
    } finally {
        console.log("Операція завершена."); // Викликається завжди
    }
}
getData();











