<template>
  <div class="PageContainer">
    <el-button class="addBtn" type="primary" @click="handleAdd">新增页面</el-button>
    <el-table
      border
      :data="pages"
      stripe
      style="width: 100%">
      <el-table-column
        prop="pageId"
        label="页面id">
      </el-table-column>
      <el-table-column
        prop="name"
        label="页面名称">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="200">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="handleEdit(scope.row)">编辑</el-button>
          <el-button type="text" size="small" @click="handleDel(scope.row)">删除版本</el-button>
          <el-button type="text" size="small" v-if="!scope.row.status" @click="handleRelease(scope.row)">发布</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from 'axios'
import { baseUrl } from '@/config'
export default {
  name: 'pageList',
  data() {
    return {
      pages: []
    }
  },
  methods: {
    async getPageList() {
      const pages = (await axios.get(`${baseUrl}/pageConfig/getPages`)).data.data
      this.pages = pages
    },
    handleRelease(record) {
      this.$confirm('确定发布?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      }).then(async () => {
        // 发布以后会生成状态
        const res = await axios.post(`${baseUrl}/pageConfig/release`, record)
        this.$message({
          type: 'success',
          message: res.data.errmsg
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消输入'
        });       
      });
    },
    handleDel(record) {
      this.$confirm('确定要删除?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      }).then(async () => {
        await axios.delete(`${baseUrl}/pageConfig/deletePages?pageId=${record.pageId}`)
        this.$message({
          type: 'success',
          message: '删除成功'
        });
        this.getPageList()
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消输入'
        });       
      });
    },
    handleAdd() {
      this.$prompt('请输入页面名称', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      }).then(async ({ value }) => {
        try {
          if(!value) {
            this.$message({
              type: 'error',
              message: '请输入页面名称'
            });
            return
          }
          const pageId = (await axios.get(`${baseUrl}/pageConfig/getPageId`)).data.data
          await axios.post(`${baseUrl}/pageConfig/savePages`, {
            pageId,
            name: value
          })
          this.getPageList()
          this.$router.push({
            path: `/edit`,
            query: {
              pageId
            }
          })
        } catch (err) {
          this.$message({
            type: 'error',
            message: err
          });
        }
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消输入'
        });       
      });
    },
    handleEdit(record) {
      this.$router.push({
        path: `/edit`,
        query: {
          pageId: record.pageId
        }
      })
    }
  },
  components: {
  },
  mounted() {
    this.getPageList()
  }
}
</script>

<style scoped>
.PageContainer {
  padding: 30px
}
.addBtn {
  margin-bottom: 20px
}
</style>
