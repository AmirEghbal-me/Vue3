<script setup lang="ts">
import FileUpload from 'primevue/fileupload';
</script>
<template>
  <FileUpload
      name="demo[]"
      url="/api/upload"
      @upload="onAdvancedUpload($event)"
      :multiple="true"
      accept="image/png"
      :maxFileSize="10024"
  >
    <template #empty>
      <p>Drag and drop files to here to upload.</p>
    </template>
  </FileUpload>
</template>
