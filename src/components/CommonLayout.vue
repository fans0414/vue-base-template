<template>
  <el-container  class="home-container">
    <el-header>
      <common-header></common-header>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <common-aside></common-aside>
      </el-aside>
      <router-view></router-view>
    </el-container>
  </el-container>
</template>

<script>
import CommonHeader from '@/components/CommonHeader.vue';
import CommonAside from '@/components/CommonAside.vue';

export default {
  components: {
    CommonHeader,
    CommonAside,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.home-container {
  height: 100%;
}
.el-header {
  background-color: #373d41;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  color: #fff;
  font-size: 20px;
}
.el-aside {
  background-color: #333744;
  .el-menu {
    border-right: none;
  }
}
</style>
