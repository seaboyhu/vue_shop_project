import Vue from 'vue'
import { Button } from 'element-ui'
import { Form, FormItem } from 'element-ui'
import { Input } from 'element-ui'
//导入弹框提示组件
import { Message } from 'element-ui'

Vue.use(Button)
Vue.use(Form)//从官网下载之后需要在上面import导入之后再这里引用全局
Vue.use(FormItem)//用到哪些组件了必须要在这里按需导入
Vue.use(Input)
//Message和其他不一样，需要进行全局挂载
Vue.prototype.$message = Message
