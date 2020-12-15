<template>
  <div>
    <button @click="toInfo()">{{ description }}</button>
  </div>
</template>

<script>
import Http from "../../util/Http";
export default {
  name: "Index",
  data() {
    return {
      description: "hello world!!",
    };
  },
  created(){
    this.test();
  },
  methods: {
    toInfo() {
      this.$router.push({ path: "/userInfomation" });
    },
    test() {
      Http.post("lucky", {
        'message':'This is a test request'
      },(response)=>{
        console.log(response);
      });
    },
  },
};
</script>
<style>
</style>