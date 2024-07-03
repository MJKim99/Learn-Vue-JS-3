<template>
  <AppHeader 
    :appTitle="message"
    v-on:change="changeMessage">
  </AppHeader>
  <!-- <div>
    {{ message }}
  </div>
  <button @click="showAlert">경고</button> -->
</template>

<script>
  //import 컴포넌트 이름 from './컴포넌트 경로'
  import AppHeader from './components/AppHeader.vue'

  export default {
    components: {
      //'컴포넌트 이름': 컴포넌트 내용
      // 'app-header': AppHeader
      // 'AppHeader': AppHeader
      // AppHeader: AppHeader
      AppHeader
    },
    data() {
      return {
        message: '앱 헤더 컴포넌트'
      }
    },
    methods: {
      changeMessage() {
        this.message = '변경됨';
      },
      showAlert() {
        alert('Hello')
      }
    }
  }
</script>

<style scoped>

</style>

<!-- HTML
<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<!- JavaScript
<script>
// import 라이브러리 from '라이브러리 이름'
// import 파일 이름 from './파일 경로'
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<!- CSS
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
