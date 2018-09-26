<template>
  <div id="app">

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app{
  border: thin solid black;
  height: 100%;
}
html,body{
  margin: 0;
  border: 0;
  outline: none;
}
*{
  box-sizing: border-box;
}
</style>
