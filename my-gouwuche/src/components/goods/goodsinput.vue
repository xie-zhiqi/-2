<template>
  <div class="app">
    <div class="add">
      编号:<input type="text" /> 品牌名称:<input type="text" />
      <br />
      产品图片地址:<input type="text" /> 价格:<input type="text" />
      <input type="button" value="添加" />
    </div>
    <div class="add">
      品牌名称:<input type="text" placeholder="请输入搜索条件" />
    </div>
  </div>
</template>

<style scoped>
    .add {
        padding: 5px;
        border: 1px solid black;
        margin-bottom: 10px;
    }
</style>