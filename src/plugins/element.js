import Vue from 'vue'
import { Button } from 'element-ui'
import { Form, FormItem } from 'element-ui'
import { Input } from 'element-ui'
//导入弹框提示组件
import { Message } from 'element-ui'
//导入主体后台的控件
import { Container, Header,Aside,Main } from 'element-ui'
//导入内容菜单
import { Menu, Submenu,MenuItem } from 'element-ui'
//导入面包屑控件
import { Breadcrumb,
BreadcrumbItem, 
Card, 
Row, 
Col, 
Table, 
TableColumn, 
Switch, 
tooltip, 
pagination, 
Dialog,
MessageBox } from 'element-ui'//tooltip要小写

import { tag, Tree, Select, Option, Cascader} from 'element-ui'//tag要小写

Vue.use(Button)

Vue.use(Form)//从官网下载之后需要在上面import导入之后再这里引用全局
Vue.use(FormItem)//用到哪些组件了必须要在这里按需导入
Vue.use(Input)

Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)

Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)

Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Card)
Vue.use(Row)
Vue.use(Col)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Switch)
Vue.use(tooltip)
Vue.use(pagination)
Vue.use(Dialog)

Vue.use(tag)
Vue.use(Tree)
Vue.use(Select)
Vue.use(Option)
Vue.use(Cascader)

//Message和其他不一样，需要进行全局挂载
Vue.prototype.$message = Message
//MessageBox和其他不一样，也需要在这里进行全局挂载
Vue.prototype.$confirm = MessageBox.confirm
