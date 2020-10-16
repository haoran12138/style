<template>
  <div>
    <!-- <m-input :value="name" @input="onInput"></m-input>
    {{ name }} -->
    <!-- <test :name.sync="name"></test> -->
    <s-validate #default="{validate}" :value="name" :rules="rules" prop="name">
      <input v-model="name" type="text" @blur="validate" />
    </s-validate>
  </div>
</template>
<script>
import Renderless from "./Renderless";
import SValidate from "./SValidate.vue";
import Test from "./Test";
export default {
  name: "Home",
  components: { Test, Renderless, SValidate },
  data() {
    return {
      name: "",
      rules: {
        name: [
          {
            test: function(value) {
              return /^\d{3,10}$/.test(value);
            },
            message: "请输入数字(3-10)"
          },
          {},
          {}
        ]
      }
    };
  },
  mounted() {
    // this.$notify("adsf");
  },

  methods: {
    onInput(e) {
      this.name = e.target.value;
    }
  }
};
</script>
