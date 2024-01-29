<template>
  <div>
    <Multiselect
        v-model="value"
        mode="tags"
        :close-on-select="true"
        :searchable="true"
        :options="options"
        placeholder="Vue3 composition Multiselect"
    />
  </div>
</template>
<script lang="ts">
import { ref } from 'vue';
import Multiselect from '@vueform/multiselect';
export default {
  components: { Multiselect, },
  setup() {
    const value = ref<any>(null);
    const options = ref<Array<string>>([ 'Batman', 'Robin', 'Joker', ]);
    return { value, options, };
  },
};
</script>
<style src="@vueform/multiselect/themes/default.css"></style>
