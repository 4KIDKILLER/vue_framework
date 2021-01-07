<template>
  <div>
    <button @click="toInfo()">{{ description }}</button>
    <van-field v-model="value" label="文本" placeholder="请输入用户名" />
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      description: "hello world!!",
      value:"",
    };
  },
  computed: {},
  created() {},
  methods: {
    toInfo() {
      this.$router.push({ path: "/userInfomation" });
    },
  },
};
</script>
<style>
</style>