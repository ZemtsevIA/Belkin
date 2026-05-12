<template>
  <div class="reviews-2">
    <AppHeader />

    <FormFour :showAll="true" />

    <AppFooter class="footer"/>
  </div>
</template>

<script setup>

import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
import FormFour from '@/components/FormFour.vue';


</script>

<style scoped>
.reviews-2 {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

.footer{
	margin-top: 10vh;
}
</style>