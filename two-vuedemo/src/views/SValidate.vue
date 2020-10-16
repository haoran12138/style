<template>
  <div>
    <slot :validate="validate"></slot>
    {{ errMsg }}
  </div>
</template>
<script>
export default {
  name: "SValidate",
  props: ["value", "rules", "prop"],
  data() {
    return {
      errMsg: ""
    };
  },
  methods: {
    validate() {
      if (!(this.rules && this.prop)) {
        return;
      }
      let rule = this.rules[this.prop];
      //   rule.reduce((pre, cur) => {
      //     console.log("aa");
      //     let check = pre && cur && cur.test && cur.test(this.value);
      //     this.errMsg = check ? "" : cur.message;
      //   }, true);
      for (let value of rule) {
        console.log(value);
        let check = value && value.test && value.test(this.value);
        this.errMsg = check ? "" : value.message;
        if (!check) {
          break;
        }
      }
    }
  }
};
</script>
