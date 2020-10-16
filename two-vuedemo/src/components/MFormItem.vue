<template>
  <div class="m-form-item">
    <div class="m-input-container">
      <span>{{ label }}</span>
      <slot></slot>
    </div>
    <div class="errmsg">
      {{ errmsg }}
    </div>
  </div>
</template>
<script>
export default {
  name: "MFormItem",
  props: {
    label: {
      type: String,
      requires: false,
      default: ""
    },
    prop: {
      type: String,
      requires: false,
      default: ""
    }
  },
  data() {
    return {
      errmsg: ""
    };
  }
};
</script>
<style lang="scss" scoped>
.m-input-container {
  display: flex;
}
.m-form-item {
  padding: 20px;
}
.errmsg {
  color: red;
}
</style>
