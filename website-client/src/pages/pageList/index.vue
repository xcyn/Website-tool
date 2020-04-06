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
          <el-button 
            v-if="scope.row.status"
            type="text" size="small" @click="handleSee(scope.row)">查看</el-button>
          <el-button type="text" size="small" @click="handleEdit(scope.row)">编辑</el-button>
          <el-button type="text" size="small" @click="handleDel(scope.row)">删除版本</el-button>
          <el-button type="text" size="small" v-if="!scope.row.status" @click="handleRelease(scope.row)">发布</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
      :visible.sync="visible"
      width="30%"
      center>
      <div style="text-align: center">
        <div>
          用手机扫描可以查看效果, 二维码只保存3分钟哦
        </div>
        <img :src="qrImg" alt="">
      </div>
    </el-dialog>
  </div>
</template>

<script>
import axios from 'axios'
import { baseUrl } from '@/config'
export default {
  name: 'pageList',
  data() {
    return {
      visible: false,
      qrImg: '',
      pages: []
    }
  },
  methods: {
    async getPageList() {
      const pages = (await axios.get(`${baseUrl}/pageConfig/getPages`)).data.data
      this.pages = pages
    },
    async handleSee(record) {
      const baseHost = window.location.host.indexOf('lovebhs.xyz') != -1 ? 'http://lovebhs.xyz:3999': 'http://localhost:3000'
      const pageSrc = `${baseHost}/templete?pageId=${record.pageId}`
      const qrCode = (await axios.get(`${baseUrl}/pageConfig/qrCode?url=${pageSrc}`)).data.data
      // 开发环境下baseUrl需要改成自己本机ip才能看到扫码效果
      this.qrImg = `${baseUrl}/public/qrCode/${qrCode}`
      this.visible = true
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
