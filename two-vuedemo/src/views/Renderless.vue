<template>
  <div class="renderless">
    <m-form :rules="rules" :model="formData">
      <m-form-item label="姓名" prop="name">
        <m-input />
      </m-form-item>
      <m-form-item label="邮箱" prop="emila">
        <m-input />
      </m-form-item>
    </m-form>
  </div>
</template>
<script>
import MForm from "@/components/MForm.vue";
import MFormItem from "@/components/MFormItem.vue";
import MInput from "@/components/MInput.vue";
export default {
  name: "Renderless",
  components: { MForm, MFormItem, MInput },
  data() {
    return {
      formData: {
        name: "",
        email: ""
      },
      rules: {
        name: { required: true }
      }
    };
  }
};
</script>
