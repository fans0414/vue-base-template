<template>
  <nav>侧边栏区域</nav>
</template>

<script>
export default {
  created() {
    this.getMenuList();
  },
  data() {
    return {
      // 左侧菜单数据
      menulist: [],
    };
  },
  methods: {
    // 获取所有的菜单
    async getMenuList() {
      const { data: res } = await this.$http.get('menus');
      if (res.meta.status !== 200) return this.$message.error(res.meta.msg);
      this.menulist = res.data;
      return '';
    },
  },
};
</script>

<style lang="less" scoped>
nav {
  background-color: #333744;
  .el-menu {
    border-right: none;
  }
}
</style>
