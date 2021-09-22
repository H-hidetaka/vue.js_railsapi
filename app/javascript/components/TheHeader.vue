<template>
  <header class="mb-auto">
    <nav class="navbar navbar-dark bg-dark">
      <span class="nacbar-brand mb-0 h1">{{ title }}</span>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return{
      name: "TheHeader",
      title: "タスク管理アプリ"
    }
  }
}
</script>

<style scoped>
</style>
