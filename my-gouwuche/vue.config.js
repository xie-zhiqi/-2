const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  // bug的原因是 在创建项目的最后一步选项
  // 使用这个手动添加 解决bug
  lintOnSave:false
});
