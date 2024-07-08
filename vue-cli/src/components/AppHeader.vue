<template>
  <div>
    <h1>{{ propsdata }}</h1>
    <button @click="sendEvent">send</button>
  </div>
</template>

<script>
export default {
  props: [
    'propsdata',
  ],
  methods: {
    sendEvent() {
      this.$emit('renew');
    }
  }
}
</script>

<style>

</style>