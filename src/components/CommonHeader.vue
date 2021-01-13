<template>
  <div class="container">
    <el-row>
      <el-col :span="4">
        <div class="logo">系统名称</div>
      </el-col>
      <el-col :span="20">
        <el-menu
          mode="horizontal"
          class="nav"
          background-color="#2d2d2d"
          text-color="#9d9d9d"
          active-text-color="#fff"
        >
          <el-menu-item>
            <router-link class="signBtn" to="/login">登录</router-link>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {},
  },
};
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  .logo {
    line-height: 60px;
    font-size: 18px;
  }
  .nav {
    float: right;
    li {
      padding: 0;
      a {
        display: inline-block;
        padding: 0 20px;
      }
    }
    .signBtn {
      background: #3b99fc !important;
      color: #fff !important;
      line-height: 60px;
    }
  }
}
</style>
