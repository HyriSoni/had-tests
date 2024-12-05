// JSON с кодами для каждого пользователя
const accessCodes = {
    "user1": "A3B7X9P4",
    "user2": "D5G1M8Q2",
    "user3": "F9T2Z6R1",
    "user4": "J2H4P3N9",
    "user5": "M7K5W1B8",
    "user6": "R9Q2S4D6"
};

// Проверка доступа
function checkAccess() {
    const accessCode = document.getElementById('accessCode').value;

    // Проверяем, есть ли введенный код в нашем объекте и совпадает ли он
    let accessGranted = false;
    for (let user in accessCodes) {
        if (accessCodes[user] === accessCode) {
            accessGranted = true;
            break;
        }
    }

    if (accessGranted) {
        // Если код верный, скрываем модальное окно и показываем контент
        sessionStorage.setItem('accessGranted', 'true');
        document.getElementById('accessModal').style.display = 'none';
    } else {
        alert('Неверный код доступа');
    }
}

// При загрузке страницы проверяем, был ли введен правильный код
window.onload = function() {
    if (sessionStorage.getItem('accessGranted') !== 'true') {
        document.getElementById('accessModal').style.display = 'flex';
    } else {
        document.getElementById('accessModal').style.display = 'none';
    }
};

// Открытие теста
function openTest(url) {
    const iframe = document.getElementById('testIframe');
    iframe.src = url;
    document.getElementById('testModal').style.display = 'flex';
}

// Закрытие модального окна теста
function closeModal() {
    document.getElementById('testModal').style.display = 'none';
    document.getElementById('testIframe').src = '';
}
