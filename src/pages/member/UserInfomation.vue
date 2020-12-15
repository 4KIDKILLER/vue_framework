<template>
  <button @click="back()">back</button>
</template>

<script>
export default {
  name: "UserInfomation",
  data() {
    return {};
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
};
</script>
<style lang="less" scoped>
</style>