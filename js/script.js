// Определение функции clickElements
const clickElements = () => {
    // Находим все элементы с атрибутом data-click
    const elementsClick = document.querySelectorAll('[data-click]');

    // Для каждого найденного элемента выполняем следующие действия
    elementsClick.forEach(elementClick => {
        // Убираем у элемента класс 'active'
        elementClick.classList.remove('active');

        // Добавляем обработчик события 'click' к найденному элементу
        elementClick.addEventListener('click', () => {
            // При клике на элемент убираем класс '_active' у всех элементов
            elementsClick.forEach(item => {
                item.classList.remove('_active');
            });

            // Добавляем класс '_active' только к текущему элементу, по которому было произведено нажатие
            elementClick.classList.add('_active');
        })
    });
}

// Вызываем функцию clickElements
clickElements();

const accordion = () => {
    // Получаем все элементы аккордеона
    const items = document.querySelectorAll('[data-accordion]');

    items.forEach((item, index) => {
        // Получаем контент и кнопку для каждого элемента аккордеона
        const content = document.querySelector(`[data-accordion=${item.dataset.accordion}-content]`);
        const btn = document.querySelector(`[data-accordion-btn=${item.dataset.accordion}]`);

        // Изначально открываем первый элемент аккордеона
        // if (index === 0) {
        //     content.style.maxHeight = content.scrollHeight + 'px';
        //     btn.classList.add('_active');
        // }

        // Добавляем обработчик события клика на элемент аккордеона
        item.addEventListener('click', (event) => {
            // Проверяем, является ли целевой элемент клика потомком контента аккордеона
            if (content.contains(event.target)) {
                return;
            }

            // Если у контента уже установлена максимальная высота, сворачиваем его
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                btn.classList.remove('_active');
            } else {
                // В противном случае разворачиваем контент до его полной высоты
                const height = content.scrollHeight;
                content.style.maxHeight = height + 'px';
                btn.classList.add('_active');
            }
        });
    });
};

// Запускаем функцию для инициализации аккордеона
accordion();

const teamSchedule = () => {
    const dropBtn = document.querySelector('#teamScheduleBtn');
    const dropList = document.querySelector('#teamScheduleList');

    let isOpen = false;

    dropBtn.addEventListener('click', () => {
        if (!isOpen) {
            const dropListHeight = dropList.scrollHeight;
            dropList.style.maxHeight = dropListHeight + 'px';
            dropBtn.classList.add('_rotate-drop');
            isOpen = true;
        } else {
            dropBtn.classList.remove('_rotate-drop');
            dropList.style.maxHeight = 0;
            isOpen = false;
        }
    });
};

teamSchedule();

const theme = () => {
    const day = document.querySelector("#day"),
        night = document.querySelector("#night");

    const setDayTheme = () => {
        document.body.classList.add("day-theme");
        document.body.classList.remove("night-theme");
        night.classList.remove("_active"); // Убираем класс _active у кнопки "Ночная тема"
    };

    const setNightTheme = () => {
        document.body.classList.add("night-theme");
        document.body.classList.remove("day-theme");
        night.classList.add("_active"); // Добавляем класс _active кнопке "Ночная тема"
    };

    day.addEventListener("click", setDayTheme);
    night.addEventListener("click", setNightTheme);
};

theme();

const profilePanel = () => {
    const profilePanel = document.querySelector('.profile__panel');
    const settingsBtn = document.querySelector('#settingsbtn');

    let isPanelOpen = false;

    settingsBtn.addEventListener('click', () => {
        if (!isPanelOpen) {
            profilePanel.style.opacity = 1;
            isPanelOpen = true;
        } else {
            profilePanel.style.opacity = 0;
            isPanelOpen = false;
        }
    });
}

profilePanel();