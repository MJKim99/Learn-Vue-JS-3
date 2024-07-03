<template>
  <form action="" @submit.prevent="submitForm">
    <div>
      <label for="userId">ID: </label>
      <input type="text" name="userId" id="userId" v-model="username">
    </div>
    <div>
      <label for="password">PW: </label>
      <input type="text" name="password" id="password" v-model="password">
    </div>
    <button type="submit">로그인</button>
  </form>
</template>

<script>
  import axios from 'axios'
  import { ref } from 'vue'

  export default {
    setup() { // composition API
      // data
      const username = ref('');
      const password = ref('');

      // methods
      const submitForm = () => {
        axios.post('https://jsonplaceholder.typicode.com/users', {
          username: username.value,
          password: password.value,
        }).then(response => {
            console.log(response);
        })
      }

      return { username, password, submitForm }
    },
  //   data() {
  //     return {
  //       username: '',
  //       password: '',
  //     }
  //   },
  //   methods: {
  //     submitForm() {
  //       // event.preventDefault(); // submit 시 새로고침 되는 form 의 기본 동작을 막음
  //       const data = {
  //         username: this.username,
  //         password: this.password,
  //       }

  //       axios.post('https://jsonplaceholder.typicode.com/users', data)
  //         .then(response => {
  //           console.log(response);
  //         })
  //       console.log('제출됨');
  //     }
  //   }
  }
</script>

<style scoped>

</style>