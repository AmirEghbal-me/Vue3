<template>
  <label>
    Localization
  </label>
  <date-picker
      locale="fa,en"
      :locale-config="{
    fa: {
      displayFormat: 'jYYYY/jMM/jDD',
      lang: { label: 'شمسی' }
    },
    en: {
      displayFormat: 'YYYY/MM/DD',
      lang: { label: 'Gregorian' }
    }
  }"
  />
</template>

<script>
import DatePicker from 'vue3-persian-datetime-picker'
export default {
  data(){
    return {
      date: ''
    }
  },
  components: { DatePicker }
}
</script>