<template>
  <v-data-table-server
      v-model:items-per-page="itemsPerPage"
      :search="search"
      :headers="headers"
      :items-length="totalItems"
      :items="serverItems"
      :loading="loading"
      item-value="name"
      @update:options="loadItems"
      :items-per-page-text= '$t("items-per-page-text")'
  >
    <template v-slot:tfoot>
      <tr>
        <td>
          <v-text-field v-model="name" hide-details :placeholder='$t("search")' class="ma-2" density="compact"></v-text-field>
        </td>
        <td>
          <v-text-field
              v-model="calories"
              hide-details
              :label='$t("max_calories")'
              type="number"
              class="ma-2"
              density="compact"
          ></v-text-field>
        </td>
      </tr>
    </template>
  </v-data-table-server>
</template>
<script setup>
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const desserts = [
  {
    name: 'گوشت منجمد',
    calories: 159,
    fat: 6,
    carbs: 24,
    protein: 4,
    iron: '1',
  },
  {
    name: 'ژله لوبیا',
    calories: 375,
    fat: 0,
    carbs: 94,
    protein: 0,
    iron: '0',
  },
  {
    name: 'شکلات کیت کت',
    calories: 518,
    fat: 26,
    carbs: 65,
    protein: 7,
    iron: '6',
  },
  {
    name: 'زعفران',
    calories: 262,
    fat: 16,
    carbs: 23,
    protein: 6,
    iron: '7',
  },
  {
    name: 'نان زنجفیل',
    calories: 356,
    fat: 16,
    carbs: 49,
    protein: 3.9,
    iron: '16',
  },
  {
    name: 'بستنی',
    calories: 237,
    fat: 9,
    carbs: 37,
    protein: 4.3,
    iron: '1',
  },
  {
    name: 'آب نبات چوبی',
    calories: 392,
    fat: 0.2,
    carbs: 98,
    protein: 0,
    iron: '2',
  },
  {
    name: 'کاپ کیک',
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4.3,
    iron: '8',
  },
  {
    name: 'شانه عسل',
    calories: 408,
    fat: 3.2,
    carbs: 87,
    protein: 6.5,
    iron: '45',
  },
  {
    name: 'دونات',
    calories: 452,
    fat: 25,
    carbs: 51,
    protein: 4.9,
    iron: '22',
  },
]
const FakeAPI = {
  async fetch ({ page, itemsPerPage, sortBy, search }) {
    return new Promise(resolve => {
      setTimeout(() => {
        const start = (page - 1) * itemsPerPage
        const end = start + itemsPerPage
        const items = desserts.slice().filter(item => {
          if (search.name && !item.name.toLowerCase().includes(search.name.toLowerCase())) {
            return false
          }
          // eslint-disable-next-line sonarjs/prefer-single-boolean-return
          if (search.calories && !(item.calories >= Number(search.calories))) {
            return false
          }
          return true
        })
        if (sortBy.length) {
          const sortKey = sortBy[0].key
          const sortOrder = sortBy[0].order
          items.sort((a, b) => {
            const aValue = a[sortKey]
            const bValue = b[sortKey]
            return sortOrder === 'desc' ? bValue - aValue : aValue - bValue
          })
        }
        const paginated = items.slice(start, end)
        resolve({ items: paginated, total: items.length })
      }, 500)
    })
  },
}
const itemsPerPage = ref(5)
const headers = ref([
  {
    title: 'دسر (100 گرم)',
    align: 'start',
    sortable: false,
    key: 'name',
  },
  { title: 'کالری', key: 'calories', align: 'end' },
  { title: 'چربی (گرم)', key: 'fat', align: 'end' },
  { title: 'کربن (گرم)', key: 'carbs', align: 'end' },
  { title: 'پروتئین (گرم)', key: 'protein', align: 'end' },
  { title: 'آهن (%)', key: 'iron', align: 'end' },
])
const serverItems = ref([])
const loading = ref(true)
const totalItems = ref(0)
const name = ref('')
const calories = ref('')
const search = ref('')
function loadItems ({ page, itemsPerPage, sortBy }) {
  loading.value = true
  FakeAPI.fetch({ page, itemsPerPage, sortBy, search: { name: name.value, calories: calories.value } }).then(({ items, total }) => {
    serverItems.value = items
    totalItems.value = total
    loading.value = false
  })
}
watch(name, () => {
  search.value = String(Date.now())
})
watch(calories, () => {
  search.value = String(Date.now())
})
</script>
