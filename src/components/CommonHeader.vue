<template>
  <div class="container">
    <el-row>
      <el-col :span="4" class="system-info">
        <img class="logo" src="../assets/logo.png" alt="" />
        <span class="system-name">系统名称</span>
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
  .system-info {
    position: relative;
    height: 60px;
    .logo {
      position: absolute;
      left: 10px;
      top: 50%;
      width: 40px;
      height: 40px;
      transform: translate(0, -50%);
    }
    .system-name {
      position: absolute;
      left: 60px;
      top: 50%;
      transform: translate(0, -50%);
    }
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
