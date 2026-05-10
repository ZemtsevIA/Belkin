<template>
  <div class="services-page">
    <AppHeader />
    <SecurytiWork />
    <section class="services-content" ref="content">
      <h1>Услуги компании <br /> ИП “Белкин”</h1>
      <div class="text-box">
        <div class="ride-text">
          <h2>Специальная оценка <br /> условий труда</h2>
          <p>
            Специальная оценка условий труда является единым комплексом последовательно осуществляемых мероприятий по идентификации вредных и (или) опасных факторов производственной среды и трудового процесса и оценке уровня их воздействия на работника с учетом отклонения их фактических значений от установленных уполномоченным Правительством Российской Федерации федеральным органом исполнительной власти нормативов (гигиенических нормативов) условий труда и применения средств индивидуальной и коллективной защиты работников.
          </p>
        </div>
        <img src="/images/helmet.png" alt="Каска" class="helmet-image" />
      </div>
      <div class="price-container">
        <div class="price">
          <h3>Периодичность проведения <br/> специальной оценки <br/> условий труда</h3>
          <h1 class="big-text">НЕ РЕЖЕ, <br/> ЧЕМ 1 РАЗ <br/> В 5 ЛЕТ</h1>
        </div>
        <div class="left-price">
          <h3>Штраф за нарушение требований охраны труда</h3>
          <h4>Для юридических лиц:</h4>
          <h1 class="big-text">60 - 70 тыс. руб.</h1>
          <h4>Для физических лиц:</h4>
          <h1 class="big-text">5 - 10 тыс. руб.</h1>
        </div>
      </div>
      <div class="dop">
        <div class="left-dop">
            <h1><span>Оценка профессиональных рисков</span></h1>
            <p>Оценка профессиональных рисков — это выявление возникающих в процессе осуществления трудовой деятельности опасностей, определение их величины и тяжести потенциальных последствий</p>
        </div>
        <div class="right-dop">
          <h1><span>Управление рисками</span></h1>
          <p>Управление рисками — комплекс взаимосвязанных мероприятий, включающих в себя меры по выявлению, оценке и снижению уровней профессиональных рисков.</p>
        </div>
        <div class="center-dop">
          <h1>Средства индивидуальной защиты и смывающих средств</h1>
          <p>Разработка норм выдачи средств индивидуальной защиты и смывающих средств с учетом результатов оценки профессиональных рисков и специальной оценки условий труда</p>
        </div>
        <h2>Процедура оценки и управления профессиональными рисками, в силу требований Приказа Минтруда России от 29.10.2021 г. №776н, обязательна для работодателя, являясь неотъемлемой частью Системы управления охраной труда (СУОТ)</h2>


      </div>
    </section>
    <FormFive />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import FormFive from '@/components/FormFive.vue';
import AppFooter from '@/components/AppFooter.vue';
import SecurytiWork from '@/components/SecurytiWork.vue';


export default {
  name: 'ServicesPage',
  components: {
    AppHeader,
    FormFive,
    AppFooter,
    SecurytiWork
  },
  mounted() {
    this.setupScrollAnimation();
  },
  methods: {
    setupScrollAnimation() {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.animateElements();
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.2 } // Срабатывает при 20% видимости
      );

      this.$nextTick(() => {
        if (this.$refs.content) {
          observer.observe(this.$refs.content);
        }
      });
    },

    animateElements() {
      const elements = this.$refs.content.querySelectorAll(`
        h1, 
        .ride-text h2, 
        .ride-text p, 
        .helmet-image, 
        .price h3, 
        .price .big-text, 
        .left-price h3, 
        .left-price h4, 
        .left-price .big-text
      `);

      elements.forEach((el, index) => {
        // Начальное состояние
        el.style.opacity = '0';
        el.style.transform = 'translateY(25px)';
        el.style.transition = `opacity 0.7s ease ${index * 0.12}s, transform 0.7s ease ${index * 0.12}s`;

        // Запуск анимации
        setTimeout(() => {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        }, 100 + index * 120);
      });
    }
  }
};
</script>

<style scoped>
.services-page {
  width: 100%;
  height: fit-content;
  
  overflow: hidden;
  margin-top: 7vh;
  position: relative;
  font-family: 'Nekst', sans-serif;
}

.services-content {
  padding: 10vh 7vh;
  text-align: center;
}

.services-content h1 {
  font-family: 'Nekst-SemiBold', sans-serif;
  font-size: clamp(2rem, 3.5vw, 4rem);
  color: black;
  margin-bottom: 2vh;
  line-height: 1;
}

.services-content h2 {
  font-family: 'Nekst-SemiBold', sans-serif;
  font-size: clamp(1.5rem, 2.5vw, 3.5rem);
  color: black;
  margin-bottom: 2vh;
  line-height: 1;
}

.services-content p {
  font-family: 'Nekst-Light', sans-serif;
  font-size: clamp(1rem, 1.5vw, 1.5rem);
  color: #4a5568;
}

/* Стили для text-box */
.text-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  margin-top: 4vh;
}

.ride-text {
  flex: 1;
  text-align: left;
}

.helmet-image {
  flex: 0 0 auto;
  width: clamp(250px, 35vw, 500px);
  height: auto;
  margin-left: 5vh;
  object-fit: cover;
}

/* Стили для price-container */
.price-container {
  display: flex; /* Используем Flexbox для горизонтального расположения */
  justify-content: space-between; /* Распределяем столбцы с равным расстоянием */
  align-items: center; /* Выравниваем по верхнему краю */
  gap: 4rem; /* Отступ между столбцами */
  margin-top: 6vh; /* Отступ сверху от text-box */
}

.price,
.left-price {
  flex: 1; /* Каждый столбец занимает половину доступного пространства */
  text-align: left; /* Выравниваем текст по левому краю */
}

.price h3,
.left-price h3 {
  text-align: center;
  font-family: 'Nekst-Regular', sans-serif;
  font-size: clamp(1.2rem, 2vw, 1.8rem);
  color: black;
  margin-bottom: 2.5vh;
}

.left-price h4 {
  text-align: center;
  font-family: 'Nekst-Light', sans-serif;
  font-size: clamp(1rem, 1.5vw, 1.5rem);
  color: #4a5568;
  
}

.big-text {
  text-align: center;
  font-family: 'Nekst-SemiBold', sans-serif;
  font-size: clamp(3rem, 4vw, 5rem);
  color: black;
  line-height: 1;
  margin-bottom: 2vh;
}

.services-content h1,
.ride-text h2,
.ride-text p,
.helmet-image,
.price h3,
.price .big-text,
.left-price h3,
.left-price h4,
.left-price .big-text {
  opacity: 0;
  transform: translateY(25px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}

/* Остальные стили — без изменений */
.services-page {
  width: 100%;
  height: fit-content;
  overflow: hidden;
  margin-top: 7vh;
  position: relative;
  font-family: 'Nekst', sans-serif;
}

.services-content {
  padding: 10vh 7vh;
  text-align: center;
}

.services-content h1 {
  font-family: 'Nekst-SemiBold', sans-serif;
  font-size: clamp(2rem, 3.5vw, 4rem);
  color: black;
  margin-bottom: 2vh;
  line-height: 1;
}

.services-content h2 {
  font-family: 'Nekst-SemiBold', sans-serif;
  font-size: clamp(1.5rem, 2.5vw, 3.5rem);
  color: black;
  margin-bottom: 2vh;
  line-height: 1;
}

.services-content p {
  font-family: 'Nekst-Light', sans-serif;
  font-size: clamp(1rem, 1.5vw, 1.5rem);
  color: #4a5568;
}

.text-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  margin-top: 4vh;
}

.ride-text {
  flex: 1;
  text-align: left;
}

.helmet-image {
  flex: 0 0 auto;
  width: clamp(250px, 35vw, 500px);
  height: auto;
  margin-left: 5vh;
  object-fit: cover;
}

.price-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4rem;
  margin-top: 6vh;
}

.price,
.left-price {
  flex: 1;
  text-align: left;
}

.price h3,
.left-price h3 {
  text-align: center;
  font-family: 'Nekst-Regular', sans-serif;
  font-size: clamp(1.2rem, 2vw, 1.8rem);
  color: black;
  margin-bottom: 2.5vh;
}

.left-price h4 {
  text-align: center;
  font-family: 'Nekst-Light', sans-serif;
  font-size: clamp(1rem, 1.5vw, 1.5rem);
  color: #4a5568;
}

.big-text {
  text-align: center;
  font-family: 'Nekst-SemiBold', sans-serif;
  font-size: clamp(3rem, 4vw, 5rem);
  color: black;
  line-height: 1;
  margin-bottom: 2vh;
}




.dop {
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: sans-serif;
  position: relative;
}

/* Общие стили карточек */
.left-dop,
.right-dop,
.center-dop {
  
  border-radius: 20px;
  padding: 25px 30px;
  box-sizing: border-box;
}

/* Верхний ряд */
.left-dop,
.right-dop {
  width: 48%;
  display: inline-block;
  vertical-align: top;
}

.left-dop {
  margin-right: 4%;
}

/* Заголовки */
.dop h1 {
  font-size: clamp(20px, 1.8vw, 32px);
  margin-bottom: 15px;
  background: #e9e9ed;
  padding: 10px 20px;
  border-radius: 20px;
  position: relative;
  display: inline-block;
  z-index: 1;
}

.dop h1::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  background: #e9e9ed;
  border-radius: 20px;
  z-index: -1;
}

/* Текст */
.dop p {
  font-size: clamp(1rem, 1.5vw, 1.5rem);
  color: #555;
  line-height: 1.5;
}

/* Центральный блок */
.center-dop {
  width: 60%;
  margin: 40px auto 0;
  text-align: center;
}

/* Нижний блок */
.dop h2 {
  margin-top: 40px;
  padding: 25px;
  border-radius: 20px;
  color: #fff;
  font-size: 16px;
  text-align: center;
  line-height: 1.5;

  background: linear-gradient(135deg, #5a5cff, #7b5cff);
}

.left-dop h1::before {
  left: -100vw;
  right: 0;
}

/* ПРАВЫЙ блок — тянем вправо */
.right-dop h1::before {
  left: 0;
  right: -100vw;
}

/* ЦЕНТР — как был */
.center-dop h1::before {
  left: 0;
  right: 0;
}



/* Адаптивность для мобильных устройств */
@media (max-width: 768px) {
  .services-page {
    max-height: none;
    margin-top: 5vh;
  }

  .services-content {
    padding: 5vh 3vh;
  }

  .services-content h1 {
    font-size: clamp(1.5rem, 5vw, 1.5rem);
  }

  .services-content h2 {
    font-size: clamp(1.2rem, 4vw, 1.3rem);
  }

  .services-content p {
    font-size: clamp(0.9rem, 3vw, 1.1rem);
  }

  .text-box {
    flex-direction: column;
    gap: 1.5rem;
    margin-top: 2vh;
  }

  .ride-text {
    text-align: center;
  }

  .price{
    text-align: center;
  }

  .helmet-image {
    width: clamp(150px, 50vw, 300px);
    margin: 0;
  }

  .price-container {
    flex-direction: column; /* Переключаем на вертикальное расположение */
    gap: 1rem; /* Увеличиваем отступ между столбцами */
    margin-top: 4vh;
  }

  .price h3,
  .left-price h3 {
    font-size: clamp(1rem, 3vw, 1.5rem);
  }

  .left-price h4 {
    font-size: clamp(0.9rem, 2.5vw, 1.2rem);
  }

  .big-text {
    font-size: clamp(1.5rem, 4vw, 2.5rem);
  }

  .services-page {
    max-height: none;
    margin-top: 5vh;
  }

  .services-content {
    padding: 5vh 3vh;
  }

  .services-content h1 {
    font-size: clamp(1.5rem, 5vw, 1.5rem);
  }

  .services-content h2 {
    font-size: clamp(1.2rem, 4vw, 1.3rem);
  }

  .services-content p {
    font-size: clamp(0.9rem, 3vw, 1.1rem);
  }

  .text-box {
    flex-direction: column;
    gap: 1.5rem;
    margin-top: 2vh;
  }

  .ride-text {
    text-align: center;
  }

  .price {
    text-align: center;
  }

  .helmet-image {
    width: clamp(150px, 50vw, 300px);
    margin: 0;
  }

  .price-container {
    flex-direction: column;
    gap: 1rem;
    margin-top: 4vh;
  }

  .price h3,
  .left-price h3 {
    font-size: clamp(1rem, 3vw, 1.5rem);
  }

  .left-price h4 {
    font-size: clamp(0.9rem, 2.5vw, 1.2rem);
  }

  .big-text {
    font-size: clamp(1.5rem, 4vw, 2.5rem);
  }
}

@media (max-width: 900px) {
  .left-dop,
  .right-dop {
    width: 100%;
    margin-right: 0;
    margin-bottom: 20px;
    display: block;
  }

  .center-dop {
    width: 100%;
    margin-top: 20px;
  }
}

/* Мобильные */
@media (max-width: 600px) {
  .dop {
    padding: 20px 15px;
  }

  .left-dop,
  .right-dop,
  .center-dop {
    padding: 20px;
    border-radius: 15px;
  }

  .dop h1 {
    font-size: 16px;
    padding: 8px 15px;
  }

  .dop p {
    font-size: 14px;
  }

  .dop h2 {
    font-size: 14px;
    padding: 20px;
    border-radius: 15px;
    margin-top: 25px;
  }
}






.dop {
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: sans-serif;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: stretch;
}

/* Общие стили карточек */
.left-dop,
.right-dop {
  
  border-radius: 20px;
  padding: 25px 30px;
  box-sizing: border-box;
  width: calc(50% - 20px);
  display: flex;
  flex-direction: column;
}

/* Стили для заголовков с сохранением растянутого фона */
.left-dop h1,
.right-dop h1 {
  font-size: clamp(20px, 1.8vw, 32px);
  margin: 0 0 15px 0;
  padding: 10px 20px;
  border-radius: 20px;
  position: relative;
  display: flex;
  align-items: center;
  min-height: 4.5rem;
  word-break: break-word;
  line-height: 1.3;
  z-index: 1;
  background: transparent;
  isolation: isolate;
}

/* Общий фон через псевдоэлемент */
.left-dop h1::before,
.right-dop h1::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  background: #e9e9ed;
  border-radius: 20px;
  z-index: -1;
}

/* ЛЕВЫЙ блок — тянем влево */
.left-dop h1::before {
  left: -100vw;
  right: 0;
}

/* ПРАВЫЙ блок — тянем вправо */
.right-dop h1::before {
  left: 0;
  right: -100vw;
}

/* Текст внутри заголовка */
.left-dop h1 span,
.right-dop h1 span {
  position: relative;
  z-index: 2;
}

/* Текст параграфа */
.dop p {
  font-size: clamp(1rem, 1.5vw, 1.5rem);
  color: #555;
  line-height: 1.5;
  margin-top: 0;
  flex: 1;
}

/* Центральный блок */
.center-dop {
  
  border-radius: 20px;
  padding: 25px 30px;
  box-sizing: border-box;
  width: 100%;
  margin-top: 40px;
  text-align: center;
}

.center-dop h1 {
  font-size: clamp(20px, 1.8vw, 32px);
  margin-bottom: 15px;
  padding: 10px 20px;
  border-radius: 20px;
  position: relative;
  display: inline-block;
  z-index: 1;
  background: transparent;
}

.center-dop h1::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #e9e9ed;
  border-radius: 20px;
  z-index: -1;
}

/* Нижний блок */
.dop h2 {
  margin-top: 40px;
  padding: 25px;
  border-radius: 20px;
  color: #fff;
  font-size: 16px;
  text-align: center;
  line-height: 1.5;
  background: linear-gradient(135deg, #5a5cff, #7b5cff);
  width: 100%;
}

/* Адаптивность */
@media (max-width: 900px) {
  .left-dop,
  .right-dop {
    width: 100%;
    margin-bottom: 20px;
  }
  
  /* На мобильных убираем растягивание фона */
  .left-dop h1::before {
    left: 0;
    right: 0;
  }
  
  .right-dop h1::before {
    left: 0;
    right: 0;
  }
}
</style>