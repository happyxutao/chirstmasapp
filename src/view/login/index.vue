<template>
<div class="app">
    <div class="loginContainer">
        <div class="left">
        </div>
        <div class="right">
          <div class="loginfrom">
            <div class="title">
            <h1>login</h1>
          </div>
          <el-form :model="ruleForm" label-width="80px" size="mini">
            <el-form-item label="账号" prop="account">
                <el-input v-model="ruleForm.account"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="ruleForm.password"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" >登录</el-button>
            </el-form-item>
          </el-form>
          <span>没有账号请注册</span>
          <span>其他方式登录 </span>
          </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'loginIndex',
    data(){
      return{
        ruleForm: {
        account: '',
        password: '',
      }
      }
    }
}
</script>

<style scoped>
.app {
    height: 100vh;
    width: 100%;
    background-image: url('@/assets/background.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
}

.loginContainer {
    height: 400px;
    width: 800px;
    background-color: white;
    display: flex;
}

.left {
    background-image: url('@/assets/leftimage.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    flex: 1;
}

.right {
    flex: 2;
    background-color:rgb(97, 142, 126);
    display: flex;
    justify-content: center;
    align-items: center;
}

.loginfrom{
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
