<template>
  <div>
    <m-input :value="name" @input="onInput"></m-input>
    {{ name }}
  </div>
</template>
<script>
import mInput from "@/components/m-input.vue";
export default {
  name: "Home",
  data() {
    return {
      name: ""
    };
  },
  mounted() {
    this.$notify("adsf");
  },
  components: { mInput },
  methods: {
    onInput(e) {
      this.name = e.target.value;
    }
  }
};
</script>
