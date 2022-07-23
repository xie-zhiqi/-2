<template>
  <div id="app">
    <Goodis-input></Goodis-input>
    <Goodis-table></Goodis-table>
  </div>
</template>

<script>
    import GoodisInput from "./goodsinput.vue";
    import GoodisTable from "./goodsTable.vue"
    export default {
        components:{
            GoodisInput,
            GoodisTable
        }
    }
</script>

<style scoped>
    #app {
        width: 600px;
        margin: 10px auto;
    }

</style>