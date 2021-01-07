import {
    COUNT,
    BASE
} from "./mutations-types";

/**
 * vuex mutation:更改store中state
 * 必须同步执行
 * 
 * 通过`this.$store.commit(COUNT,{count:6})`来访问并传值
 */
export default {
    [COUNT](state, { count }) {
        state.count = count;
    },
    [BASE](state, { base }) {
        state.base = base;
    }
};