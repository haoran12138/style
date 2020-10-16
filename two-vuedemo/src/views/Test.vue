<template>
  <div class="test">
    <input v-model="aaa" type="text" />
    <button @click="handleEmit">emit</button>
  </div>
</template>
<script>
export default {
  name: "Test",
  data() {
    return {
      aaa: "adf"
    };
  },
  methods: {
    handleEmit() {
      this.$emit("update:name", this.aaa);
    }
  }
};
</script>
