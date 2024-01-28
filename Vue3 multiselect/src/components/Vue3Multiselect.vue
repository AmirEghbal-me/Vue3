<template>
  <div>
    <Multiselect
        v-model="value"
        :multiple="true"
        :close-on-select="true"
        :searchable="true"
        :options="options"
        placeholder="Vue3 composition Multiselect"
    />
  </div>
</template>
<script>
import { ref } from 'vue';
import Multiselect from '@vueform/multiselect';
export default {
  components: { Multiselect, },
  setup() {
    const value = ref(null);
    const options = ref([ 'Batman', 'Robin', 'Joker', ]);
    return { value, options, };
  },
};
</script>
<style src="@vueform/multiselect/themes/default.css"></style>