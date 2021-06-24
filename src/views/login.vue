<template>
  <div class="login">
    <el-form  status-icon :model="ruleForm" :rules="rules" label-width="100px" ref="ruleForm" style="width: 500px; height: 200px;" class="demo-ruleForm">
      <el-form-item label="用户名" prop="username">
        <el-input type="username" v-model="ruleForm.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button style="width: 300px; margin-left: -100px" type="primary" @click="updataAdd">登陆</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ruleForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
      // url: '/static/login.json'
    }
  },
  methods: {
    updataAdd () {
      this.axios.get('.', this.ruleForm).then(response => {
        console.log(response.data)
      }, response => {
        console.log('error')
      })
    }
  },
  setup: {

  }
}
</script>

<style lang="scss">
.login {
  width: 100%;
  height: 100%;
  text-align: center;
  line-height: 100px;
  .demo-ruleForm {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }
}
</style>
