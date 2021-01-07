/**
 * 用于异步修改vuex state 必须提交一个mutation commit
 * 例如请求用户数据后存储到vuex等
 * 
 * 通过`this.$store.dispatch('getUserInfo')`访问该对象下的属性
 */
export default {
    // 例子
    /* 
    async getUserInfo({ commit, state }) {
         let res = await request("user/userinfo");
         // import {GET_USERINFO} from "./mutations-types";
         commit(GET_USERINFO, res)
    },
    */
}