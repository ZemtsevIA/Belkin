<template>
    <AppHeader />
    <div class="contacts-container">
        <div class="contacts">
            <h1>Контакты</h1>
            <h2>Группа компаний по охране труда</h2>
            <p>Фактический адрес: 634050, г. Томск, Площадь Батенькова дом 2 офис №1, 3 этаж (Бизнес центр «Статус»)<br/>
            Адрес электронной почты: trud-70@mail.ru<br/>
            8 (3822) 97-99-06, 8-961-095-5007<br/>
            ИНН 701738244637<br/>ОГРНИП 319703100051790</p>
            <h3>
№9660 от 24.06.2014 г. Реестра аккредитованных организаций, оказывающих услуги в области охраны труда утвержденным постановления Правительства Российской Федерации от 16 декабря 2021 г. № 2334</h3>
        </div>
        
        <div class="map-section">
            <h3>Мы на карте</h3>
            <div id="yandex-map" class="map-container"></div>
        </div>
    </div>
    <AppFooter />
</template>

<script setup>
/* eslint-disable no-undef */

import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
import { onMounted } from 'vue';

const coords = [56.484809, 84.951179];
let mapInstance = null;

onMounted(() => {
    // Проверяем, загружен ли уже ymaps
    if (typeof ymaps !== 'undefined') {
        initMap();
    } else {
        // Загружаем скрипт простым способом
        const script = document.createElement('script');
        script.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU';
        script.onload = () => {
            ymaps.ready(initMap);
        };
        script.onerror = () => {
            console.error('Ошибка загрузки карты');
            showError();
        };
        document.head.appendChild(script);
    }
});

function initMap() {
    const mapElement = document.getElementById('yandex-map');
    if (!mapElement) return;
    
    try {
        mapInstance = new ymaps.Map(mapElement, {
            center: coords,
            zoom: 17,
            controls: ['zoomControl', 'fullscreenControl']
        });
        
        const placemark = new ymaps.Placemark(coords, {
            balloonContentHeader: 'Группа компаний по охране труда',
            balloonContentBody: `
                <div style="padding: 5px;">
                    📍 Площадь Батенькова, дом 2, офис №1, 3 этаж<br>
                    (Бизнес-центр «Статус»)<br><br>
                    📧 trud-70@mail.ru<br>
                    ☎ 8 (3822) 97-99-06<br>
                    📱 8-961-095-5007
                </div>
            `
        }, {
            preset: 'islands#redIcon'
        });
        
        mapInstance.geoObjects.add(placemark);
        placemark.balloon.open();
        
    } catch (err) {
        console.error('Ошибка инициализации карты:', err);
        showError();
    }
}

function showError() {
    const mapElement = document.getElementById('yandex-map');
    if (mapElement) {
        mapElement.innerHTML = `
            <div style="display: flex; align-items: center; justify-content: center; height: 100%; background: #f5f5f5; border-radius: 8px;">
                <div style="text-align: center;">
                    <div style="font-size: 48px;">🗺️</div>
                    <div>Не удалось загрузить карту</div>
                    <button onclick="location.reload()" style="margin-top: 10px; padding: 8px 16px; background: #4CAF50; color: white; border: none; border-radius: 4px; cursor: pointer;">Повторить</button>
                </div>
            </div>
        `;
    }
}

onMounted(() => {
    // Ваш существующий код загрузки карты
});
</script>

<style scoped>
/* Общий контейнер страницы */
.contacts-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 90px 20px 40px; /* 👈 ВАЖНО */
    

    display: flex;
    flex-direction: column;
    gap: 40px;
    
}

/* Блок с контактами */
.contacts {
    max-width: 800px;
    margin: 0 auto;

    text-align: left; /* можно заменить на center при желании */
    line-height: 1.6;

    overflow-wrap: break-word;
}

/* Заголовки */
.contacts h1 { 
    font-size: clamp(24px, 4vw, 32px);
    margin-bottom: 10px;
    font-family: 'Nekst-SemiBold', sans-serif;
    text-align: center;
}

.contacts h2 {
    font-size: clamp(16px, 2.5vw, 20px);
    margin-bottom: 15px;
    color: black;
    font-family: 'Nekst-Medium', sans-serif;
}

.contacts h3 {
    font-size: clamp(12px, 1.5vw, 14px);
    margin-top: 20px;
    color: #3d3d3d;
    font-family: 'Nekst-Thin', sans-serif;
}

/* Текст */
.contacts p {
    font-size: clamp(14px, 2vw, 16px);
    margin-bottom: 20px;
    font-family: 'Nekst-Light', sans-serif;
}

/* Секция карты */
.map-section {
    max-width: 800px;
    margin: 0 auto;
    width: 100%;
}

/* Контейнер карты */
.map-container {
    width: 100%;
    height: 400px;

    border-radius: 12px;
    overflow: hidden;
}



</style>