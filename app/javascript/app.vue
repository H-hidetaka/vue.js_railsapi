<template>
  <div class="d-flex flex-column min-vh-100">
    <TheHeader class="mb-auto" />
    <router-view />
    <TheFooter class="mt-auto" />
  </div>
</template>

<script>
import TheHeader from 'components/TheHeader.vue'
import TheFooter from 'components/TheFooter.vue'

export default {
  components: {
    TheHeader,
    TheFooter
  },
  name: "TopIndex",
  data(){
    return {
      title: "タスク管理アプリ"
    }
  }
}
</script>

<style scoped>
</style>
