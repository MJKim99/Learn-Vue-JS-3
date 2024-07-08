<template>
  <div>
    <!-- <app-header v-bind:프롭스 속성 이름 = "상위 컴포넌트의 데이터 이름"></app-header> -->
    <app-header :propsdata = "str" @renew="renewStr">
  </app-header>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'

export default {
  data() {
    return {
      str: 'Header',
    }
  },
  components: {
    AppHeader
  },
  methods: {
    renewStr() {
      this.str = 'Hi';
    },
  },
}
</script>

<style>

</style>

<!-- <template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <-- 컴포넌트 명명법 종류 ->
    <--
    <hello-world></hello-world>
    <HelloWorld></HelloWorld>
    <HelloWorld/>
    ->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  // 인스턴스 옵션 속성 or 컴포넌트 옵션 속성
  name: 'App',
  components: {
    HelloWorld // == 'hello-world':
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> -->
