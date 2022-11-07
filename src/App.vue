<template>
    <div id="app">
        <HeaderComponen/>
        <router-view/>
        <FooterComponent/>
    </div>
</template>

<script>

import HeaderComponen from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
export default {
  name: 'App',
  components: {
      FooterComponent,
      HeaderComponen

  }
}
</script>
<style>
    @import "./assets/css/styles.css";
</style>