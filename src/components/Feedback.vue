<template>
  <div>
    <div class="feedback-container">
      <div class="feedback-img-box">
        <img   src="static/img/feedback.jpg">
      </div>
      <div class="feedback-box-border">
        <div class="feedback-box">
          <div class="feedback-title">
            <h1>意见反馈</h1>
            <h2>感谢你的反馈，我们会积极改善，做出更好的服务的</h2>
          </div>
          <div class="feedback-content">
            <div class="feedback-form">
              <Form :model="formItem" :label-width="80" :rules="ruleInline">
                <FormItem  prop="title" label="标题">
                  <i-input v-model="formItem.title" clearable  placeholder="请输入标题"></i-input>
                </FormItem>
                <FormItem prop="content" label="反馈信息">
                  <i-input v-model="formItem.content" clearable  type="textarea" :autosize="{minRows: 8,maxRows: 10}" placeholder="请输入反馈信息"></i-input>
                </FormItem>
                <FormItem>
                  <Button @click="info"  type="primary">提交</Button>
                  <Button @click="clear"  type="ghost">清空信息</Button>
                </FormItem>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Feedback',
  data () {
    return {
      formItem: {
        title: '',
        content: ''
      },
      ruleInline: {
        title: [
          { required: true, message: '标题不能为空哦~', trigger: 'blur' }
        ],
        content: [
          { required: true, message: '反馈信息不能为空哦~', trigger: 'blur' },
         
        ]
      }
    };
  },
  methods:{
    info(){
      if(this.formItem.title!=''&&this.formItem.content!='')
       this.$Message.info('感谢您的反馈');
      this.formItem.title=''
      this.formItem.content=''
    },
    clear(){
      this.formItem.title=''
      this.formItem.content=''
    }
  }
};
</script>

<style scoped>
.feedback-container {
  margin: 15px auto;
  width: 80%;
  height: 600px;
  display: flex;
  align-items: center;
  /* background-color: #ccc; */
}
.feedback-img-box {
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.feedback-img-box img {
  width: 70%;
}
.feedback-box-border {
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.feedback-box {
  width: 480px;
}
.feedback-content {
  margin: 15px auto;
  border: 1px #ccc dotted;
}
.feedback-form {
  margin: 30px auto;
  width: 90%;
}
</style>
