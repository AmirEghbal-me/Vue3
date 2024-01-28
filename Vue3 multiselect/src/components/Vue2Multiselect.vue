<template>
  <div>
    <Multiselect
        v-model="vue2"
        :close-on-select="true"
        :searchable="true"
        placeholder="Vue2 options Multiselect"
        :options="options"
    />
  </div>
</template>

<script>
import Multiselect from '@vueform/multiselect'

export default {
  components: {
    Multiselect,
  },
  data() {
    return {
      mode: 'multiple',
      vue2: null,
      options: [
        'Batman',
        'Robin',
        'Joker',
      ]
    }
  }
}

</script>

<style src="@vueform/multiselect/themes/default.css"></style>