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
  min-height: 758px;
  height: 100%;
}
html,body{
  margin: 0;
  border: 0;
  outline: none;
  /*height: 100%;*/
}
*{
  box-sizing: border-box;
}
</style>
