(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-869a7936"],{"2df4":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"content element-doc"},[e._m(0),e._m(1),n("p",[e._v("可以设置类似的data数据格式来生成树形组织图，并可以通过style精确配置每个节点的样式或className精确配置每个节点的class名 注：由于节点拖拽功能阻止了节点文本选中，所以，在右键菜单中提供了复制节点文本功能。")]),n("demo-block",[n("template",{slot:"source"},[n("element-demo0")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <div>\n      <div style="display: flex; padding: 10px 0;">\n        <div style="margin-right: 10px"><i-switch v-model="horizontal"></i-switch> 横向</div>\n        <div style="margin-right: 10px"><i-switch v-model="collapsable"></i-switch> 可收起</div>\n        <div style="margin-right: 10px"><i-switch v-model="disaled"></i-switch> 禁止编辑</div>\n        <div style="margin-right: 10px"><i-switch v-model="onlyOneNode"></i-switch> 仅拖动当前节点</div>\n        <div style="margin-right: 10px"><i-switch v-model="cloneNodeDrag"></i-switch> 拖动节点副本</div>\n    </div>\n    <div>\n      背景色：\n      <color-picker v-model="style.background" size="small"></color-picker>&nbsp;\n      文字颜色：\n      <color-picker v-model="style.color" size="small"></color-picker>&nbsp;\n    </div>\n    <div style="height: 400px; border:1px solid #eee">\n      <zm-tree-org\n        :data="data"\n        :horizontal="horizontal"      \n        :collapsable="collapsable"\n        :label-style="style"\n        :node-draggable="true"\n        :disabled="disaled"\n        :only-one-node="onlyOneNode"\n        :clone-node-drag="cloneNodeDrag"\n        :node-draging="nodeDragMove"\n        :node-drag-end="nodeDragEnd"\n        @on-expand="onExpand"\n        @on-node-click="onNodeClick"\n        @on-node-copy="onNodeCopy"\n      ></zm-tree-org>\n    </div>\n  </div>\n</template>\n<script>\n    export default {\n      data(){\n        return {\n          data: {\n            id: 1,\n            label: "xxx科技有限公司",\n            children: [\n              {\n                id: 2,\n                pid: 1,\n                label: "产品研发部",\n                style: { color:\'#fff\', background:\'#108ffe\' },\n                children: [\n                  {\n                    id: 6,\n                    pid: 2,\n                    label: "禁止编辑节点",\n                    disabled: true,\n                  },\n                  {\n                    id: 7,\n                    pid: 2,\n                    label: "研发-后端"\n                  },\n                  {\n                    id: 8,\n                    pid: 2,\n                    label: "禁止拖拽节点",\n                    noDragging: true\n                  },\n                  {\n                    id: 9,\n                    pid: 2,\n                    label: "产品经理"\n                  },\n                  {\n                    id: 10,\n                    pid: 2,\n                    label: "测试"\n                  }\n                ]\n              },\n              {\n                id: 3,\n                pid: 1,\n                label: "客服部",\n                children: [\n                  {\n                    id: 11,\n                    pid: 3,\n                    label: "客服一部"\n                  },\n                  {\n                    id: 12,\n                    pid: 3,\n                    label: "客服二部"\n                  }\n                ]\n              },\n              {\n                id: 4,\n                pid: 1,\n                label: "业务部"\n              },\n              {\n                id: 5,\n                pid: 1,\n                label: "人力资源中心"\n              }\n            ]\n          },\n          horizontal: false,\n          collapsable: true,\n          onlyOneNode: true,\n          cloneNodeDrag: true,\n          expandAll: true,\n          disaled: false,\n          style: {\n            background:\'#fff\',\n            color:\'#5e6d82\'\n          }     \n        } \n      },\n      created(){\n          this.toggleExpand(this.data, this.expandAll);\n      }, \n      methods:{\n          onExpand(e, data) {\n            console.log(e, data)\n          },\n          nodeDragMove(data){\n            console.log(data)\n          },\n          nodeDragEnd(data, isSelf){\n            console.log(data, isSelf)\n            isSelf && this.$Message.info("移动到自身")\n          },\n          onNodeClick(e, data) {\n            this.$Message.info(data.label)\n          },\n          onNodeCopy(){\n            this.$Message.success("复制成功")\n          },\n          handleNodeAdd(node){\n            console.log(node)\n            this.$Message.info("新增节点")\n          },\n          expandChange() {\n            this.toggleExpand(this.data, this.expandAll);\n          },\n          toggleExpand(data, val) {\n            if (Array.isArray(data)) {\n              data.forEach(item => {\n                this.$set(item, "expand", val);\n                if (item.children) {\n                  this.toggleExpand(item.children, val);\n                }\n              });\n            } else {\n              this.$set(data, "expand", val);\n              if (data.children) {\n                this.toggleExpand(data.children, val);\n              }\n            }\n          }\n      }  \n    }\n<\/script>\n')])])])],2),e._m(2),e._m(3),e._m(4),e._m(5)],1)},d=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h2",{attrs:{id:"demo-yan-shi-an-li"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#demo-yan-shi-an-li"}},[e._v("$")]),e._v(" Demo 演示案例")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h3",{attrs:{id:"ji-chu-yong-fa"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ji-chu-yong-fa"}},[e._v("$")]),e._v(" 基础用法")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h3",{attrs:{id:"attributes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#attributes"}},[e._v("$")]),e._v(" Attributes")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("table",[n("thead",[n("tr",[n("th",[e._v("参数")]),n("th",[e._v("说明")]),n("th",[e._v("类型")]),n("th",[e._v("可选值")]),n("th",[e._v("默认值")])])]),n("tbody",[n("tr",[n("td",[e._v("data")]),n("td",[e._v("数据源,必须传入")]),n("td",[e._v("[]")]),n("td",[e._v("—")]),n("td",[e._v("—")])]),n("tr",[n("td",[e._v("props")]),n("td",[e._v("结构map参考")]),n("td",[e._v("Object")]),n("td",[e._v("—")]),n("td",[e._v("{label: 'label', expand: 'expand',children: 'children' }")])]),n("tr",[n("td",[e._v("toolBar")]),n("td",[e._v("工具栏")]),n("td",[e._v("[Object, Boolean]")]),n("td",[e._v("—")]),n("td",[e._v("{scale: true, restore: true, expand: true, zoom: true, fullscreen: true, }")])]),n("tr",[n("td",[e._v("horizontal")]),n("td",[e._v("是否是横向")]),n("td",[e._v("Boolean")]),n("td",[e._v("true,false")]),n("td",[e._v("false")])]),n("tr",[n("td",[e._v("collapsable")]),n("td",[e._v("是否可以展开收起节点")]),n("td",[e._v("Boolean")]),n("td",[e._v("true,false")]),n("td",[e._v("false")])]),n("tr",[n("td",[e._v("disabled")]),n("td",[e._v("禁止编辑，设为true后，所有节点不可新增下级、编辑和删除，单个节点禁止编辑，可将节点属性设置disabled为true")]),n("td",[e._v("Boolean")]),n("td",[e._v("true,false")]),n("td",[e._v("true")])]),n("tr",[n("td",[e._v("draggable")]),n("td",[e._v("架构图是否可拖拽，单个节点禁止拖拽，可将节点属性设置noDragging为true")]),n("td",[e._v("Boolean")]),n("td",[e._v("true,false")]),n("td",[e._v("true")])]),n("tr",[n("td",[e._v("draggableOnNode")]),n("td",[e._v("架构图拖拽在节点触发，nodeDraggable值为false时，设为true才有效")]),n("td",[e._v("Boolean")]),n("td",[e._v("true,false")]),n("td",[e._v("false")])]),n("tr",[n("td",[e._v("nodeDraggable")]),n("td",[e._v("节点是否可拖拽")]),n("td",[e._v("Boolean")]),n("td",[e._v("true,false")]),n("td",[e._v("true")])]),n("tr",[n("td",[e._v("cloneNodeDrag")]),n("td",[e._v("是否拷贝节点拖拽")]),n("td",[e._v("Boolean")]),n("td",[e._v("true,false")]),n("td",[e._v("true")])]),n("tr",[n("td",[e._v("onlyOneNode")]),n("td",[e._v("是否仅拖动当前节点，如果true，仅拖动当前节点，子节点自动添加到当前节点父节点，如果false，则当前节点及子节点一起拖动")]),n("td",[e._v("Boolean")]),n("td",[e._v("true,false")]),n("td",[e._v("true")])]),n("tr",[n("td",[e._v("renderContent")]),n("td",[e._v("渲染函数")]),n("td",[e._v("Function")]),n("td",[e._v("—")]),n("td",[e._v("—")])]),n("tr",[n("td",[e._v("labelStyle")]),n("td",[e._v("自定义label标签的样式")]),n("td",[e._v("Object")]),n("td",[e._v("—")]),n("td",[e._v("—")])]),n("tr",[n("td",[e._v("labelClassName")]),n("td",[e._v("自定义label节点的样式名")]),n("td",[e._v("[Function, String]")]),n("td",[e._v("—")]),n("td",[e._v("—")])]),n("tr",[n("td",[e._v("selectedClassName")]),n("td",[e._v("自定义选择节点的样式名")]),n("td",[e._v("[Function, String]")]),n("td",[e._v("—")]),n("td",[e._v("—")])]),n("tr",[n("td",[e._v("node-add")]),n("td",[e._v("自定义节点新增，覆盖默认新增行为（参数当前节点node）")]),n("td",[e._v("Function")]),n("td",[e._v("—")]),n("td",[e._v("—")])]),n("tr",[n("td",[e._v("node-delete")]),n("td",[e._v("自定义节点删除，覆盖默认新增行为（参数当前节点node）")]),n("td",[e._v("Function")]),n("td",[e._v("—")]),n("td",[e._v("—")])]),n("tr",[n("td",[e._v("node-edit")]),n("td",[e._v("自定义节点编辑，覆盖默认新增行为（参数当前节点node）")]),n("td",[e._v("Function")]),n("td",[e._v("—")]),n("td",[e._v("—")])]),n("tr",[n("td",[e._v("node-copy")]),n("td",[e._v("复制节点文本，覆盖默认复制节点文本行为（参数当前节点node）")]),n("td",[e._v("Function")]),n("td",[e._v("—")]),n("td",[e._v("—")])])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h3",{attrs:{id:"events"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[e._v("$")]),e._v(" Events")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("table",[n("thead",[n("tr",[n("th",[e._v("事件名")]),n("th",[e._v("说明")]),n("th",[e._v("返回值")])])]),n("tbody",[n("tr",[n("td",[e._v("on-expand")]),n("td",[e._v("节点展开事件，注意，展开节点时如监听了label点击事件，则需要阻止冒泡 e.stopPropagation()")]),n("td",[e._v("e, data")])]),n("tr",[n("td",[e._v("on-node-click")]),n("td",[e._v("节点点击事件")]),n("td",[e._v("e, data")])]),n("tr",[n("td",[e._v("on-node-focus")]),n("td",[e._v("节点获取焦点事件")]),n("td",[e._v("e, data")])]),n("tr",[n("td",[e._v("on-node-blur")]),n("td",[e._v("节点失去焦点事件")]),n("td",[e._v("e, data")])]),n("tr",[n("td",[e._v("on-node-copy")]),n("td",[e._v("复制节点文本事件，如果设置了node-copy属性，此事件将不会执行")]),n("td",[e._v("复制的文本")])]),n("tr",[n("td",[e._v("on-node-delete")]),n("td",[e._v("删除节点事件，如果设置了node-delete属性，此事件将不会执行")]),n("td",[e._v("删除的节点")])]),n("tr",[n("td",[e._v("on-zoom")]),n("td",[e._v("缩放事件")]),n("td",[e._v("scale缩放倍数")])]),n("tr",[n("td",[e._v("on-drag")]),n("td",[e._v("拖拽事件")]),n("td",[e._v("x, y")])]),n("tr",[n("td",[e._v("on-drag-stop")]),n("td",[e._v("拖拽结束事件")]),n("td",[e._v("x, y")])])])])}],l={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[[n("div",[n("div",{staticStyle:{display:"flex",padding:"10px 0"}},[n("div",{staticStyle:{"margin-right":"10px"}},[n("i-switch",{model:{value:e.horizontal,callback:function(t){e.horizontal=t},expression:"horizontal"}}),e._v(" 横向")],1),e._v(" "),n("div",{staticStyle:{"margin-right":"10px"}},[n("i-switch",{model:{value:e.collapsable,callback:function(t){e.collapsable=t},expression:"collapsable"}}),e._v(" 可收起")],1),e._v(" "),n("div",{staticStyle:{"margin-right":"10px"}},[n("i-switch",{model:{value:e.disaled,callback:function(t){e.disaled=t},expression:"disaled"}}),e._v(" 禁止编辑")],1),e._v(" "),n("div",{staticStyle:{"margin-right":"10px"}},[n("i-switch",{model:{value:e.onlyOneNode,callback:function(t){e.onlyOneNode=t},expression:"onlyOneNode"}}),e._v(" 仅拖动当前节点")],1),e._v(" "),n("div",{staticStyle:{"margin-right":"10px"}},[n("i-switch",{model:{value:e.cloneNodeDrag,callback:function(t){e.cloneNodeDrag=t},expression:"cloneNodeDrag"}}),e._v(" 拖动节点副本")],1)]),e._v(" "),n("div",[e._v("\n      背景色：\n      "),n("color-picker",{attrs:{size:"small"},model:{value:e.style.background,callback:function(t){e.$set(e.style,"background",t)},expression:"style.background"}}),e._v(" \n      文字颜色：\n      "),n("color-picker",{attrs:{size:"small"},model:{value:e.style.color,callback:function(t){e.$set(e.style,"color",t)},expression:"style.color"}}),e._v(" \n    ")],1),e._v(" "),n("div",{staticStyle:{height:"400px",border:"1px solid #eee"}},[n("zm-tree-org",{attrs:{data:e.data,horizontal:e.horizontal,collapsable:e.collapsable,"label-style":e.style,"node-draggable":!0,disabled:e.disaled,"only-one-node":e.onlyOneNode,"clone-node-drag":e.cloneNodeDrag,"node-draging":e.nodeDragMove,"node-drag-end":e.nodeDragEnd},on:{"on-expand":e.onExpand,"on-node-click":e.onNodeClick,"on-node-copy":e.onNodeCopy}})],1)])]],2)},t=[];const n={data(){return{data:{id:1,label:"xxx科技有限公司",children:[{id:2,pid:1,label:"产品研发部",style:{color:"#fff",background:"#108ffe"},children:[{id:6,pid:2,label:"禁止编辑节点",disabled:!0},{id:7,pid:2,label:"研发-后端"},{id:8,pid:2,label:"禁止拖拽节点",noDragging:!0},{id:9,pid:2,label:"产品经理"},{id:10,pid:2,label:"测试"}]},{id:3,pid:1,label:"客服部",children:[{id:11,pid:3,label:"客服一部"},{id:12,pid:3,label:"客服二部"}]},{id:4,pid:1,label:"业务部"},{id:5,pid:1,label:"人力资源中心"}]},horizontal:!1,collapsable:!0,onlyOneNode:!0,cloneNodeDrag:!0,expandAll:!0,disaled:!1,style:{background:"#fff",color:"#5e6d82"}}},created(){this.toggleExpand(this.data,this.expandAll)},methods:{onExpand(e,t){console.log(e,t)},nodeDragMove(e){console.log(e)},nodeDragEnd(e,t){console.log(e,t),t&&this.$Message.info("移动到自身")},onNodeClick(e,t){this.$Message.info(t.label)},onNodeCopy(){this.$Message.success("复制成功")},handleNodeAdd(e){console.log(e),this.$Message.info("新增节点")},expandChange(){this.toggleExpand(this.data,this.expandAll)},toggleExpand(e,t){Array.isArray(e)?e.forEach(e=>{this.$set(e,"expand",t),e.children&&this.toggleExpand(e.children,t)}):(this.$set(e,"expand",t),e.children&&this.toggleExpand(e.children,t))}}};return{render:e,staticRenderFns:t,...n}}()}},o=l,r=n("2877"),i=Object(r["a"])(o,a,d,!1,null,null,null);t["default"]=i.exports},"44a4":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},d=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"content element-doc"},[n("h2",{attrs:{id:"jie-shao"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#jie-shao"}},[e._v("$")]),e._v(" 介绍")]),n("p",[e._v("一个简易版组织架构图，组件依赖于"),n("a",{attrs:{href:"https://github.com/hukaibaihu/vue-org-tree"}},[e._v("vue-org-tree")]),e._v("， 在此基础上将部分源代码进行优化修改。并且依赖于"),n("a",{attrs:{href:"https://github.com/mauricius/vue-draggable-resizable"}},[e._v("vue-draggable-resizable")]),e._v("，实现鼠标拖动改变位置，并增加鼠标滚轮缩放，节点拖拽，以及节点编辑等功能。")]),n("h2",{attrs:{id:"an-zhuang"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#an-zhuang"}},[e._v("$")]),e._v(" 安装")]),n("p",[n("code",[e._v("@1.3.1")]),e._v(" 表示版本号，建议锁定版本号来保证代码的稳定性")]),n("h3",{attrs:{id:"npm-an-zhuang"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#npm-an-zhuang"}},[e._v("$")]),e._v(" npm 安装")]),n("p",[e._v("推荐使用npm安装，它能更好地和"),n("a",{attrs:{href:"https://webpack.js.org/"}},[e._v("webpack")]),e._v("打包工具配合使用。而且可以更好的和 es6配合使用。并且支持按需引入")]),n("pre",[n("code",{staticClass:"language-shell"},[e._v("npm i zm-tree-org -S\n# or \nyarn add zm-tree-org\n")])]),n("h3",{attrs:{id:"yin-ru"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#yin-ru"}},[e._v("$")]),e._v(" 引入")]),n("p",[e._v("在 main.js 中写入以下内容：")]),n("pre",[n("code",{staticClass:"language-javascript"},[e._v("import Vue from 'vue';\nimport ZmTreeOrg from 'zm-tree-org';\nimport \"zm-tree-org/lib/zm-tree-org.css\";\n\nVue.use(ZmTreeOrg);\n")])]),n("h3",{attrs:{id:"zui-xin-ban-ben"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#zui-xin-ban-ben"}},[e._v("$")]),e._v(" 最新版本")]),n("p",[n("a",{attrs:{href:"https://www.npmjs.com/package/zm-tree-org"}},[n("img",{attrs:{src:"https://img.shields.io/npm/v/zm-tree-org",alt:"NPM version"}})])])])}],l=n("2877"),o={},r=Object(l["a"])(o,a,d,!1,null,null,null);t["default"]=r.exports},ef23:function(e,t,n){var a={"./demo.md":"2df4","./guide.md":"44a4"};function d(e){var t=l(e);return n(t)}function l(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}d.keys=function(){return Object.keys(a)},d.resolve=l,e.exports=d,d.id="ef23"}}]);
//# sourceMappingURL=chunk-869a7936.acdc6152.js.map