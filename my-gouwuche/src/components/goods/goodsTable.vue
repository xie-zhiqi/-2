<template>
        <!-- <div> -->
            <table class="tb">
                <tr>
                    <th>
                        <input type="checkbox"  value="all">
                    </th>
                    <th>产品图片</th>
                    <th>编号</th>
                    <th>品牌名称</th>
                    <th>价格</th>
                    <th>数量</th>
                    <th>操作</th>
                </tr>
            </table>
        
</template>

<style scoped>

    .tb {
        border-collapse: collapse;
        width: 100%;
    }

    .tb th {
        background-color: #0094ff;
        color: white;
    }

    .tb td,
    .tb th {
        padding: 5px;
        border: 1px solid black;
        text-align: center;
    }
</style>