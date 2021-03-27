<template>
  <div id="app">
    <p>{{ message }}</p>
    <button type=button>はじめる</button>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      message: "Hello Vue!"
    }
  }
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
button{
  font-size: 30px;
  text-align: center;
}
</style>
