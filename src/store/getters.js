/**
 * vuex getters就像计算属性一样，
 * getter 的返回值会根据它的依赖被缓存起来，
 * 且只有当它的依赖值发生了改变才会被重新计算。
 * 可以在这里将store中的状态进行计算后返回。
 * 
 * 通过`this.$store.getter.take`访问该对象中的属性
 */
export default {
    take: (state) => {
        return state.count * state.base;
    }
}