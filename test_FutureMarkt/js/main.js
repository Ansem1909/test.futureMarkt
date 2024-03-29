// ФОРМА
function submitForm(event) {
  event.preventDefault();
    
  // Получаем значения из полей формы
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
    
  // Проверяем, что чекбокс согласия отмечен
  const consent = document.getElementById("consent").checked;
    
  if (name && phone && consent) {
    // Скрываем форму
    document.getElementById("myForm").style.display = "none";
    
    // Показываем благодарность
    document.getElementById("thankYou").style.display = "block";
  } else {
    alert("Пожалуйста, заполните все обязательные поля и отметьте согласие на обработку данных");
  }
}

// Показыываем бэкграунд и попап
function openForm() {
  document.getElementById("popup_background").style.display = "block";
  document.getElementById("popup").style.display = "block";
}

// Скрываем бэкграунд и попап
function closeForm() {
  document.getElementById("popup_background").style.display = "none";
  document.getElementById("popup").style.display = "none";
}

// При клике сработает функция openForm
document.getElementById("openPopup").addEventListener("click", openForm);


// СОХРАНЯЕМ ДАННЫЕ В localStorage
// Получаем доступ к форме
const form = document.getElementById('myForm');

// Слушаем отправку формы и во 2 стр предотвращаем стандартное поведение формы
form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    // Получаем все элементы формы
    const formElements = form.elements;

    // Создаем объект для хранения данных
    const formData = {};

    // Проходимся по всем элементам формы с помощью цикла 
    for (let i = 0; i < formElements.length; i++) {
      const element = formElements[i];
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            formData[element.id] = element.value;
        }
    }

    // Сохраняем данные в LocalStorage
    localStorage.setItem('formData', JSON.stringify(formData));

    alert('Данные успешно сохранены в LocalStorage!');
});

// АНИМАЦИЯ ЗАГОЛОВКА
document.addEventListener("DOMContentLoaded", function() {
  // Получаем элемент, который нужно плавно показать
  const header = document.getElementById("basis__h1");
  // Задаем максимальную прозрачность
  let opacityMax = 1;
  // Задаем задержку перед началом анимации
  setTimeout(function() {
    // Создаем интервал анимации
    const intervalId = setInterval(function() {
      // Увеличиваем прозрачность элемента на 0.01 каждые 10 мс
      opacityMax -= 0.01;
      // устанавливаем значение свойства opacity для элемента header равным переменной opacityMax.
      header.style.opacity = opacityMax;

      // Если значение прозрачности достигло макс значения (1), останавливаем анимацию
      if (opacityMax <= 0) {
        clearInterval(intervalId);
      }
    }, 10);
  }, 1000); // Задержка в сек перед началом анимации
  
  // Устанавливаем мин прозрачность
  let opacityMin = 0;

  // Задаем задержку перед началом анимации
  setTimeout(function() {
    // Создаем интервал анимации
    const intervalId1 = setInterval(function() {
      // Увеличиваем прозрачность элемента на 0.1 каждые 10 миллисекунд
      opacityMin += 0.002;
      header.style.opacity = opacityMin;

      // Если значение прозрачности достигло максимального значения (1), останавливаем анимацию
      if (opacityMin >= 1) {
        clearInterval(intervalId1);
      }
    }, 10);
  }, 2500); // Задержка в 2.5сек перед началом анимации
});



