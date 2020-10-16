<template>
  <div class="m-form">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "MForm",
  props: {
    model: {
      type: Object,
      required: true
    },
    rules: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      name: "MForm"
    };
  }
};
</script>
