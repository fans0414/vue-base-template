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
          @select="handleSelect"
        >
          <el-menu-item v-if="!isSignIn">
            <router-link class="signBtn" to="/login">登录</router-link>
          </el-menu-item>

          <el-submenu index="1" v-else>
            <template slot="title">{{ userInfo.username }}</template>
            <el-menu-item index="1-1">个人中心</el-menu-item>
            <el-menu-item index="1-2">退出登录</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  computed: {
    isSignIn() {
      return this.$store.state.isSignIn;
    },
    userInfo() {
      return this.$store.state.userInfo;
    },
  },
  methods: {
    logout() {
      this.$message.success('退出登录!');
      this.$router.push({ name: 'login' });
      this.$store.commit('setToken', null);
      this.$store.commit('changeIsSignIn', false);
    },
    handleSelect(key) {
      switch (key) {
        case '1-1':
          this.$router.push({ name: 'person' });
          break;
        case '1-2':
          this.logout();
          break;
        default:
          break;
      }
    },
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
    line-height: 60px;
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
