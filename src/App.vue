<template>
  <div class="max-w-2xl p-8 mx-auto mt-20 bg-white rounded-lg shadow">
    <div class="mb-4 font-medium text-amh-gray">{{ TITLE }}</div>
    <RadioAccordion
      v-for="(option, index) in RADIO_ACCORDIONS_MOCK"
      :key="option.value"
      :id="'option-' + index"
      :name="'options'"
      :value="option.value"
      :option="option"
      :active="option.active ?? true"
      v-model="selectedOption"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import RadioAccordion from './components/RadioAccordion.vue';
import { RADIO_ACCORDIONS_MOCK } from './mocks/RadioAccordionMock';

const TITLE = 'What are you looking to do?';

const selectedOption = ref('');
</script>

<style scoped></style>
