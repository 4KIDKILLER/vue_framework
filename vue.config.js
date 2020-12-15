module.exports = {
    //Solution For Issue:You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.
    runtimeCompiler: true,
    chainWebpack:config=>{
        config
        .plugin('html')
        .tap(args=>{
            args[0].title='vue_framework_title';
            return args;
        })
    }
  }