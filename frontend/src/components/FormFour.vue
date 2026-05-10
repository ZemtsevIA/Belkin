<template>
  <section class="form4">
    <h2>Отзывы клиентов</h2>
    <p class="subtitle">Доверие, подтвержденное результатами</p>
    
    <div class="reviews">
      <div 
        class="review-card" 
        v-for="(review, index) in displayedReviews" 
        :key="review.id || index"
        :data-index="index"
      >
        <img src="/images/review-icon.png" alt="Review icon" class="review-icon" />
        <p>{{ review.text }}</p>
        <p class="author">{{ review.name }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  name: 'FormFour',
  data() {
    return {
      reviews: [],
      fallbackReviews: [
        {
          id: 1,
          name: "Алексей Иванов",
          text: "Очень довольны качеством проведенной специальной оценки условий труда. Всё сделали быстро и профессионально."
        },
        {
          id: 2,
          name: "ООО \"СтройТех\"",
          text: "Работаем с ИП \"Белкин\" уже третий год. Всегда оперативно и с хорошим пониманием наших задач."
        },
        {
          id: 3,
          name: "Мария Смирнова",
          text: "Спасибо за грамотное оформление всех документов по охране труда. Специалисты действительно знают своё дело."
        }
      ]
    };
  },

  computed: {
    // Используем резервные отзывы, если основные не загрузились
    displayedReviews() {
      return this.reviews.length > 0 ? this.reviews.slice(0, 3) : this.fallbackReviews;
    }
  },

  async mounted() {
    await this.fetchReviews();
    this.$nextTick(() => this.setupScrollAnimation());
  },

  methods: {
    async fetchReviews() {
      try {
        const response = await axios.get('http://212.192.127.152:9000/reviews/', { 
          params: { _limit: 3 },
          timeout: 800 // Добавил таймаут
        });
        
        if (response.data && response.data.length > 0) {
          this.reviews = response.data;
        }
      } catch (error) {
        console.warn('Не удалось загрузить отзывы с сервера, используются резервные отзывы');
        // reviews остаётся пустым — будет использован fallback
      }
    },

    setupScrollAnimation() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.review-card');
            cards.forEach((card, i) => {
              setTimeout(() => {
                card.classList.add('visible');
              }, i * 200);
            });
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.3 });

      this.$nextTick(() => {
        if (this.$el) observer.observe(this.$el);
      });
    }
  }
};
</script>

<style scoped>
.form4 {
  top: 7vh;
  position: relative;
  width: 100%;
  padding: 10vh 7vh;
  background-color: #fff;
  font-family: 'Nekst', sans-serif;
  text-align: center;
}

.form4 h2 {
  font-family: 'Nekst-SemiBold', sans-serif;
  font-size: clamp(1.5rem, 3.3vw, 3.5rem);
  color: #1a202c;
  margin-bottom: 1rem;
  line-height: 1.1;
}

.subtitle {
  font-family: 'Nekst-Thin', sans-serif;
  font-size: clamp(1rem, 1.7vw, 1.2rem);
  color: #4a5568;
  margin-bottom: 3rem;
}

.reviews {
  display: flex;
  justify-content: space-around;
  gap: 2rem;
  flex-wrap: wrap;
}

.review-card {
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.9);
  padding: 2rem;
  width: 25%;
  min-width: 250px;
  text-align: center;

  opacity: 0;
  transform: translateY(40px) scale(0.95);
  transition: opacity 0.7s ease, transform 0.7s ease;
}

.review-card.visible {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.review-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
}

.review-icon {
  width: clamp(80px, 10vw, 120px);
  height: auto;
  margin-bottom: 1rem;
  display: block;
  margin-left: auto;
  margin-right: auto;

  transition: transform 0.4s ease;
}

.review-card:hover .review-icon {
  transform: scale(1.15) rotate(5deg);
}

.review-card p {
  font-family: 'Nekst-Thin', sans-serif;
  font-size: clamp(0.9rem, 1.2vw, 1.1rem);
  color: #4a5568;
  line-height: 1.4;
}

.author {
  font-family: 'Nekst-SemiBold', sans-serif;
  font-size: clamp(1rem, 1.3vw, 1.2rem);
  color: #1a202c;
  margin-top: 1rem;
}

.loading {
  font-family: 'Nekst-Light', sans-serif;
  font-size: clamp(1rem, 1.2vw, 1.2rem);
  color: #4a5568;
  text-align: center;
  margin: 2rem 0;
}

.review-card {
  opacity: 0;
  transform: translateY(40px) scale(0.95);
  transition: opacity 0.7s ease, transform 0.7s ease;
}

.review-card.visible {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.review-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
}

.review-icon {
  transition: transform 0.4s ease;
}

.review-card:hover .review-icon {
  transform: scale(1.15) rotate(5deg);
}

@media (max-width: 768px) {
  .form4 {
    padding: 5vh 3vh;
  }

  .form4 h2 {
    font-size: clamp(1.2rem, 2.5vw, 1.8rem);
  }

  .subtitle {
    font-size: clamp(0.9rem, 1.2vw, 1rem);
    margin-bottom: 2rem;
  }

  .reviews {
    flex-direction: column;
    align-items: center;
  }

  .review-card {
    width: 80%;
    margin-bottom: 2rem;
  }
}
</style>