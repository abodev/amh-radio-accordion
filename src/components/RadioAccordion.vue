<template>
  <div
    class="flex p-4 pb-0 my-4 shadow-md hover:bg-amh-light-yellow"
    :class="[(expanded ? 'bg-amh-light-yellow' : 'bg-white')]"
  >
    <div class="relative mr-4">
      <input
        :id="id"
        :name="name"
        :value="value"
        :disabled="!active"
        type="radio"
        v-model="internalModelValue"
        class="hidden"
      />
      <CheckMarkIcon
        :checked="expanded"
        @click="onChange"
        class="absolute top-[14px] cursor-pointer"
      />
    </div>
    <div class="w-full px-0 py-2">
      <div class="pb-3 pl-2">
        <div class="text-lg font-medium">{{ option.title }}</div>
        <div class="text-amh-subtitle">{{ option.subtitle }}</div>
      </div>
      <div v-show="expanded" class="border-t-[1px] border-t-gray mt-2 pt-2">
        <a
          v-for="suboption in option.subOptions"
          :key="suboption.title"
          :href="suboption.link"
          class="flex items-center justify-between py-2 pl-2 hover:bg-pink-100"
        >
          <span class="font-medium text-amh-suboption">{{
            suboption.title
          }}</span>
          <RightArrowIcon class="w-6 h-6" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue';
import { Options } from '../types/RadioAccordion';
import CheckMarkIcon from './CheckMarkIcon.vue';
import RightArrowIcon from './RightArrowIcon.vue';

interface Props {
  modelValue?: string;
  value?: string;
  name?: string;
  id: string;
  active: boolean;
  option: Options;
}

const props = defineProps<Props>();
const emit = defineEmits<(event: 'update:modelValue', value: string) => void>();

const internalModelValue = ref(props.modelValue);

watchEffect(() => {
  internalModelValue.value = props.modelValue;
});

const expanded = computed(() => internalModelValue.value === props.value);

const onChange = () => {
  if (!props.active) return;
  if (props.value) {
    emit('update:modelValue', props.value);
  }
};
</script>

<style scoped></style>
