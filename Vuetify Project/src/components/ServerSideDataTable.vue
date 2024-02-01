<!--
<template>
  <v-data-table
      :headers="headers"
      :items="users"
      :search="search"
      :loading="loading"
      :server-items-length="totalUsers"
      :items-per-page.sync="itemsPerPage"
      @update:page="getUsers"
      @update:items-per-page="getUsers"
      :footer-props="{
        itemsPerPageOptions: [5, 10, 15],
    }"
  >
    <template v-slot:no-data>
      No users found
    </template>
    <template v-slot:items="{ item }">
      <td>{{ item.id }}</td>
      <td>{{ item.name }}</td>
      <td>{{ item.email }}</td>
      <td>
        <v-btn text color="primary" @click="editUser(item)">
          Edit
        </v-btn>
        <v-btn text color="error" @click="deleteUser(item)">
          Delete
        </v-btn>
      </td>
    </template>
  </v-data-table>
</template>

<script>
import axios from 'axios';
import { VDataTable, VButton } from 'vuetify/lib';
export default {
  data() {
    return {
      headers: [
        { text: 'ID', value: 'id' },
        { text: 'Name', value: 'name' },
        { text: 'Email', value: 'email' }
      ],
      users: [],
      search: '',
      loading: false,
      totalUsers: 0,
      itemsPerPage: 10,
    };
  },
  created() {
    this.getUsers();
  },
  methods: {
    getUsers(page = 1) {
      this.loading = true;

      axios.post(`http://localhost:8000/api/users?page=${page}&perPage=${this.itemsPerPage}`)
          .then(response => {
            this.users = response.data;
            this.totalUsers = response.data.totalUsers;
            this.loading = false;
          })
          .catch(error => {
            console.log(error);
            this.loading = false;
          });
    },
    editUser(user) {

    },
    deleteUser(user) {
      // Implement your delete logic
    },
  },
};
</script>-->

<template>
  <v-data-table
      :headers="headers"
      :items="items"
      :server-items-length="totalItems"
      :loading="loading"
      :loading-text="loadingText"
      :options.sync="options"
      :rows-per-page-items="[10, 20, 30]"
      :pagination.sync="pagination"
      :footer-props="{ itemsPerPageOptions: [10, 20, 30] }"
      item-key="id"
  >
    <template #top>
      <v-toolbar flat>
        <v-toolbar-title class="text-h5">لیست کاربران لاراول</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn text @click="refreshData">به روز رسانی</v-btn>
      </v-toolbar>
    </template>

    <template #item.actions="{ item }">
      <v-container>
        <v-row>
          <v-col
              cols="12"
              sm="6"
          >
            <v-text-field
                v-model="name"
                :model-value=item.name
                clearable
                single-line
                persistent-clear
                variant="underlined"
                @click:clear="onClear"
            ></v-text-field>
          </v-col>
          <v-col
              cols="12"
              sm="6"
          >
            <v-btn small @click="handleAction(item)">عملیات</v-btn>
          </v-col>
        </v-row>
      </v-container>

    </template>
  </v-data-table>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      headers: [
        { title: 'شناسه', value: 'id' },
        { title: 'نام', value: 'name' },
        { title: 'ایمیل', value: 'email' },
        { title: 'عملیات', value: 'actions', sortable: false },
      ],
      items: [],
      totalItems: 0,
      loading: false,
      loadingText: '',
      options: {},
      pagination: {},
      name : ''
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    async loadData() {
      try {
        this.loading = true;
        this.loadingText = 'Loading...';
        const response = await axios.post('http://localhost:8000/api/users'); // Replace with your API endpoint
        this.totalItems = response.data.length;
        this.items = response.data;
        this.loading = false;
      } catch (error) {
        console.error('Error loading data:', error);
        this.loading = false;
      }
    },
    async refreshData() {
      this.pagination.page = 1;
      await this.loadData();
    },
    handleAction(item) {
      // Implement your action logic here
      console.log('Performing action on item:', item);
      console.log('Name:', this.name);
    },
  },
};
</script>
