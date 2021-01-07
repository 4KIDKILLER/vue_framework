import Vue from "vue";
import Vuex from "vuex";
import Getters from "./getters";
import Mutations from "./mutations";
import Actions from "./actions";
Vue.use(Vuex);

//定义全局state
//通过`this.$store.state.count`访问值
const State = {
    count: 0,
    base: 5
};

export default new Vuex.Store({
    state: State,
    getters: Getters,
    mutations: Mutations,
    actions: Actions
});