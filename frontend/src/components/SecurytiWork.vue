<template>
  <section class="ot">
    <div class="container">
      <div class="ot__header">
        <h1>Охрана труда</h1>

        <p>
          Охрана труда (ОТ) — это комплекс правовых, социально-экономических,
          организационных, технических и лечебно-профилактических мероприятий,
          направленных на сохранение жизни, здоровья и работоспособности сотрудников
          в процессе трудовой деятельности.
        </p>

        <div class="ot__alert">
          Каждая проверка документов по охране труда выявляет, что большинство организаций
          не обладает даже минимальным пакетом документов по охране труда
        </div>

        <p>
          В связи с этим, компания предлагает рассмотреть коммерческое предложение
          на выполнение работ по разработке комплекта документов по охране труда.
        </p>
      </div>

      <div class="ot__features">
        <div class="ot__features-title">
          ПРИ РАЗРАБОТКЕ ДОКУМЕНТАЦИИ ПО <br/> ОХРАНЕ ТРУДА <br/> УЧИТЫВАЕТСЯ:
        </div>

        <ul>
          <li>специфика деятельности организации</li>
          <li>эксплуатируемое оборудование, сырье, материалы</li>
          <li>обязанности сотрудников и виды выполняемых работ</li>
        </ul>
      </div>

      <div class="ot__plan">
        <h2>
          План по предоставлению услуг по разработке документов по охране труда
        </h2>

        <div class="timeline2">
            <div class="timeline2__path"></div>

            <!-- TOP -->
                <div class="timeline2__row top">
                    <div class="item">
                    <p>Согласование стоимости оказания услуг</p>
                    <div class="dot">1</div>
                    </div>

                    <div class="item">
                    <p>Заключение договора на оказание услуг</p>
                    <div class="dot">2</div>
                    </div>

                    <div class="item">
                    <p>Запрос и сбор информации, рекомендации по видимым нарушениям</p>
                    <div class="dot">3</div>
                    </div>
                </div>

                <!-- BOTTOM -->
                <div class="timeline2__row bottom">
                    <div class="item">
                    <div class="dot">6</div>
                    <p>Проверка заказчиком готового комплекта документов</p>
                    </div>

                    <div class="item">
                    <div class="dot">5</div>
                    <p>Разработка комплекта документов</p>
                    </div>

                    <div class="item">
                    <div class="dot">4</div>
                    <p>Предоставление необходимой информации заказчиком</p>
                    </div>
                </div>
            </div>
      </div>
    </div>
  </section>
</template>



<style scoped>
.ot {
  font-family: 'Nekst', sans-serif;
  background: #f5f5f7;
  padding: 40px 0;
}

.container {
  max-width: 75%;
  margin: 0 auto;
  padding: 0 20px;
}

/* HEADER */

.ot__header h1 {
    font-family: 'Nekst-Bold', sans-serif;
  text-align: center;
  background: linear-gradient(90deg, #5f5ce6, #6c63ff);
  color: white;
  padding: 20px;
  border-radius: 10px;
  font-size: clamp(2rem, 3.5vw, 3rem);
  margin-bottom: 30px;
}

.ot__header p {
    font-family: 'Nekst-Thin', sans-serif;
  text-align: center;
  color: black;
  line-height: 1.6;
  margin-bottom: 20px;
	font-size: clamp(1rem, 1.5vw, 1.2rem);;
}

.ot__alert {
    font-family: 'Nekst-SemiBold', sans-serif;
    font-size: clamp(1.2rem, 2vw, 1.4rem);
  background: #e9e9ef;
  padding: 20px;
  border-radius: 12px;
  text-align: center;
  font-weight: 600;
  margin: 25px 0;
}

/* FEATURES */

.ot__features {
  margin-top: 30px;
  display: flex;
  gap: 40px;
  justify-content: space-between;
    align-items: center;
}

.ot__features-title {
    font-family: 'Nekst-SemiBold', sans-serif;
    text-align: center;
  background: #e9e9ef;
  padding: 20px;
  border-radius: 12px;
  
  font-weight: 600;
	font-size: clamp(1.2rem, 2vw, 1.6rem);
}

.ot__features ul {
  list-style: none;
  padding: 20px 0 0 0;

}

.ot__features li {
    font-family: 'Nekst-Thin', sans-serif;
  margin-bottom: 10px;
  padding-left: 20px;
  position: relative;
	font-size: clamp(1rem, 1.5vw, 1.5rem);
}

.ot__features li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: black;
  font-weight: bold;
}

/* PLAN */

.ot__plan h2 {
  margin: 50px auto 30px;
  text-align: center;
	margin-top: 100px;
  background: linear-gradient(90deg, #5f5ce6, #6c63ff);
  color: white;
  padding: 20px 30px;
  border-radius: 40px;
  font-size: clamp(2rem, 3.5vw, 2.5rem);
  max-width: 90%;
  font-family: 'Nekst-Bold', sans-serif;
}

/* TIMELINE */

.timeline {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 40px;
  padding-bottom: 40px;
}

.timeline__line {
  position: absolute;
  top: 40px;
  left: 5%;
  right: 5%;
  height: 2px;
  background: #ccc;
}

.timeline__item {
  width: 150px;
  text-align: center;
  position: relative;
}

.timeline__item span {
  font-size: 13px;
  color: #444;
  display: block;
  margin-bottom: 15px;
}

.dot {
  width: 32px;
  height: 32px;
  background: #6c63ff;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  font-weight: bold;
  position: relative;
  z-index: 2;
}

/* адаптив */

@media (max-width: 900px) {
  .timeline {
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
  }

  .timeline__line {
    display: none;
  }

  .timeline__item {
    width: 45%;
  }

  .ot__features {
    flex-direction: column;
  }
}


/* TIMELINE 2 */
.timeline2 {
  position: relative;
  margin-top: 200px;
  padding-bottom: 40px;
}

/* ЛИНИЯ */
.timeline2__path {
  position: absolute;
  left: 15%;
  right: 15%;
  top: 48px; /* Сдвинуто на 2px, чтобы центр линии 2px был ровно на отметке 50px */
  height: 120px;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  border-right: 2px solid black;
  border-radius: 0 60px 60px 0;
  z-index: 1; /* Линия под точками */
}

/* РЯДЫ */
.timeline2__row {
  display: flex;
  justify-content: space-between;
  padding: 0 15%;
  position: relative;
  z-index: 2; /* Строки поверх линии */
}

.timeline2__row.top {
  margin-bottom: 0px;
}

.timeline2__row.bottom {
  margin-top: 90px;
}

/* ЭЛЕМЕНТ */
.item {
  width: 180px;
  text-align: center;
  position: relative;
}

.item p { 
  font-size: clamp(1rem, 1.5vw, 1.5rem);
  color: black;
  margin: 0 0 10px;
  font-family: 'Nekst-Regular', sans-serif;
  line-height: 1.2; /* Фиксируем высоту текста для точного расчета */
}

/* ТОЧКИ */
.dot {
  width: 32px;
  height: 32px;
  background: #6c63ff;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  font-weight: bold;
  position: relative;
  z-index: 3; /* Точки поверх всего */
}

/* ТОЧНОЕ ПОЗИЦИОНИРОВАНИЕ НА ЛИНИЯХ */
.top .dot {
  margin-top: 0;
  top: -6px; /* Смещает центр кружка на верхнюю линию */
}

.bottom .dot {
  margin-bottom: 0;
  top: 00px; /* Смещает центр кружка на нижнюю линию */
}

/* УБЕРИТЕ старые правила: .top .dot { margin-top: 0; top: -6px; } */

.timeline2__row.top .item {
  position: relative; /* Точка будет позиционироваться относительно этого блока */
}

.timeline2__row.top .item p {
  margin-bottom: 65px; /* Фиксированный отступ снизу, чтобы текст не наезжал на точку */
}

.timeline2__row.top .dot {
  position: absolute;
  /* Линия начинается на top: 48px. Высота точки 32px. 
     Чтобы центр точки совпал с линией: 48px - 16px = 32px */
  top: 32px; 
  left: 50%;
  transform: translateX(-50%); /* Центрируем точку по горизонтали внутри .item */
  margin: 0;
}
.timeline2__row.top .item p {
  margin-top: -140px;    /* Отрицательный отступ поднимает текст. Регулируйте значение (-10px, -20px и т.д.) */
  margin-bottom: 65px;  /* Фиксирует расстояние до точки, чтобы текст не наезжал на неё */
}

.timeline2__row.bottom .item p{
	margin-top: 10px;
}


/* ====================== АНИМАЦИИ ====================== */

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.7);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes popIn {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  70% {
    transform: scale(1.1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

/* Применение анимаций */

.ot__header h1 {
  animation: scaleIn 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.ot__header p {
  animation: fadeInUp 0.8s ease forwards 0.2s;
}

.ot__alert {
  animation: popIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards 0.4s;
}

.ot__features-title {
  animation: fadeInUp 0.8s ease forwards 0.6s;
}

/* Пункты списка */
.ot__features li {
  animation: fadeInUp 0.7s ease forwards;
}
.ot__features li:nth-child(1) { animation-delay: 0.8s; }
.ot__features li:nth-child(2) { animation-delay: 1s; }
.ot__features li:nth-child(3) { animation-delay: 1.2s; }

/* Заголовок плана */
.ot__plan h2 {
  animation: scaleIn 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards 0.3s;
}

/* Таймлайн */
.timeline2__row .item {
  animation: fadeInUp 0.9s ease forwards;
  opacity: 0;
}

/* Задержки для таймлайна */
.timeline2__row.top .item:nth-child(1) { animation-delay: 0.5s; }
.timeline2__row.top .item:nth-child(2) { animation-delay: 0.8s; }
.timeline2__row.top .item:nth-child(3) { animation-delay: 1.1s; }

.timeline2__row.bottom .item:nth-child(1) { animation-delay: 1.5s; }
.timeline2__row.bottom .item:nth-child(2) { animation-delay: 1.8s; }
.timeline2__row.bottom .item:nth-child(3) { animation-delay: 2.1s; }

/* Точки */
.dot {
  animation: popIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

/* Дополнительно — плавное появление всей секции */
.ot {
  animation: fadeIn 1.2s ease forwards;
}

</style>