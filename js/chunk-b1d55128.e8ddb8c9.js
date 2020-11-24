(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b1d55128"],{2033:function(t,e,a){},"432b":function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));var n=a("5530"),r=a("5880"),i={computed:Object(n["a"])(Object(n["a"])({},Object(r["mapState"])({layout:function(t){return t.app.layout},navTheme:function(t){return t.app.theme},primaryColor:function(t){return t.app.color},colorWeak:function(t){return t.app.weak},fixedHeader:function(t){return t.app.fixedHeader},fixedSidebar:function(t){return t.app.fixedSidebar},contentWidth:function(t){return t.app.contentWidth},autoHideHeader:function(t){return t.app.autoHideHeader},isMobile:function(t){return t.app.isMobile},sideCollapsed:function(t){return t.app.sideCollapsed},multiTab:function(t){return t.app.multiTab}})),{},{isTopMenu:function(){return"topmenu"===this.layout}}),methods:{isSideMenu:function(){return!this.isTopMenu}}}},"720f":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("page-header-wrapper",{attrs:{title:"Dubbo文档","tab-list":t.tabList,"tab-active-key":t.tabActiveKey},on:{tabChange:t.handleTabChange},scopedSlots:t._u([{key:"content",fn:function(){return[a("a-descriptions",{attrs:{size:"small",column:(t.isMobile,1)}},[a("a-descriptions-item",{attrs:{label:"简述"}},[t._v("dubbo是远程服务间相互调用的协议，底层是rpc原理")]),a("a-descriptions-item",{attrs:{label:"Github：服务注册"}},[a("a",{attrs:{href:"https://github.com/SArtOnline/dubbo.git",target:"_blank"}},[t._v("https://github.com/SArtOnline/dubbo.git")])]),a("a-descriptions-item",{attrs:{label:"Github：服务发现"}},[a("a",{attrs:{href:"https://github.com/SArtOnline/dubbo-consumer.git",target:"_blank"}},[t._v("https://github.com/SArtOnline/dubbo.git")])])],1)]},proxy:!0},{key:"extra",fn:function(){},proxy:!0},{key:"extraContent",fn:function(){},proxy:!0}])},[a("a-card",{staticStyle:{"margin-top":"24px"},attrs:{bordered:!1,title:"规则"}},[a("a-card",{attrs:{type:"inner",title:"发布&调用"}},[a("a-descriptions",{attrs:{title:"发布规则",size:"small"}},[a("a-descriptions-item",{attrs:{label:"1、直接发布",span:3}},[t._v("通过XML配置将服务实现类注册为"),a("strong",[t._v("Bean")]),t._v("，然后通过"),a("strong",[t._v("dubbo:service")]),t._v("将服务注册暴露")]),a("a-descriptions-item",{attrs:{label:"2、注册中心",span:3}},[t._v("通过XML配置将服务实现类注册为"),a("strong",[t._v("Bean")]),t._v("，然后通过"),a("strong",[t._v("dubbo:service")]),t._v("将服务注册暴露给注册中心"),a("strong",[t._v("dubbo:registry")])])],1),a("a-descriptions",{attrs:{title:"服务发现",size:"small"}},[a("a-descriptions-item",{attrs:{label:"1、直接调用",span:3}},[t._v("通过XML配置发现服务，目标服务没有配置注册中心，此时调用端可以通过XML配置"),a("strong",[t._v("dubbo:refference")]),t._v("的"),a("strong",[t._v("url")]),t._v("属性发现服务")]),a("a-descriptions-item",{attrs:{label:"2、注册中心",span:3}},[t._v("通过XML配置发现服务，目标服务注册在注册中心zookeeper，此时调用端不需要在XML配置"),a("strong",[t._v("dubbo:refference")]),t._v("的url属性，dubbo会自动根据"),a("strong",[t._v("dubbo:registry")]),t._v("配置的注册中心地址发现服务")])],1)],1),a("a-card",{attrs:{type:"inner",title:"多种发布方式"}},[a("a-descriptions",{attrs:{title:"XML配置方式(官方推荐)",size:"small"}},[a("a-descriptions-item",{attrs:{label:"服务注册",span:3}},[t._v("dubbo支持在XML配置"),a("strong",[t._v("dubbo:service")]),t._v("发布服务")]),a("a-descriptions-item",{attrs:{label:"服务发现",span:3}},[t._v("dubbo支持在XML配置"),a("strong",[t._v("dubbo:reference")]),t._v("发现服务")])],1),a("a-descriptions",{attrs:{title:"API调用方式",size:"small"}},[a("a-descriptions-item",{attrs:{label:"服务注册",span:3}},[t._v("dubbo支持API注册服务，需要配置"),a("strong",[t._v("ServiceConfig类")]),t._v("，最后调用"),a("strong",[t._v("export()")]),t._v("方法发布服务")]),a("a-descriptions-item",{attrs:{label:"服务发现",span:3}},[t._v("dubbo支持API发现服务，需要配置"),a("strong",[t._v("ReferenceConfig类")]),t._v("，最后调用"),a("strong",[t._v("get()")]),t._v("方法远程调用服务")])],1),a("a-descriptions",{attrs:{title:"注解调用方式",size:"small"}},[a("a-descriptions-item",{attrs:{label:"服务注册",span:3}},[t._v("dubbo支持annotation注册服务，通过注解"),a("strong",[t._v("@Service")]),t._v("发布服务，"),a("strong",[t._v("AnnotationConfigApplicationContext")]),t._v("类将服务发送到"),a("strong",[t._v("@Configuration")]),t._v("配置的服务中心")]),a("a-descriptions-item",{attrs:{label:"服务发现",span:3}},[t._v("dubbo支持annotation发现服务，通过注解"),a("strong",[t._v("@Reference")]),t._v("发现服务，"),a("strong",[t._v("AnnotationConfigApplicationContext")]),t._v("类通过"),a("strong",[t._v("@Configuration")]),t._v("配置的服务中心，发现并引用服务")])],1)],1)],1)],1)},r=[],i=a("432b"),s={name:"Advanced",mixins:[i["a"]],data:function(){return{tabList:[{key:"detail",tab:"详情"},{key:"rule",tab:"规则"}],tabActiveKey:"detail",operationTabList:[{key:"1",tab:"操作日志一"},{key:"2",tab:"操作日志二"},{key:"3",tab:"操作日志三"}],operationActiveTabKey:"1",operationColumns:[{title:"操作类型",dataIndex:"type",key:"type"},{title:"操作人",dataIndex:"name",key:"name"},{title:"执行结果",dataIndex:"status",key:"status",scopedSlots:{customRender:"status"}},{title:"操作时间",dataIndex:"updatedAt",key:"updatedAt"},{title:"备注",dataIndex:"remark",key:"remark"}],operation1:[{key:"op1",type:"订购关系生效",name:"曲丽丽",status:"agree",updatedAt:"2017-10-03  19:23:12",remark:"-"},{key:"op2",type:"财务复审",name:"付小小",status:"reject",updatedAt:"2017-10-03  19:23:12",remark:"不通过原因"},{key:"op3",type:"部门初审",name:"周毛毛",status:"agree",updatedAt:"2017-10-03  19:23:12",remark:"-"},{key:"op4",type:"提交订单",name:"林东东",status:"agree",updatedAt:"2017-10-03  19:23:12",remark:"很棒"},{key:"op5",type:"创建订单",name:"汗牙牙",status:"agree",updatedAt:"2017-10-03  19:23:12",remark:"-"}],operation2:[{key:"op2",type:"财务复审",name:"付小小",status:"reject",updatedAt:"2017-10-03  19:23:12",remark:"不通过原因"},{key:"op3",type:"部门初审",name:"周毛毛",status:"agree",updatedAt:"2017-10-03  19:23:12",remark:"-"},{key:"op4",type:"提交订单",name:"林东东",status:"agree",updatedAt:"2017-10-03  19:23:12",remark:"很棒"}],operation3:[{key:"op2",type:"财务复审",name:"付小小",status:"reject",updatedAt:"2017-10-03  19:23:12",remark:"不通过原因"},{key:"op3",type:"部门初审",name:"周毛毛",status:"agree",updatedAt:"2017-10-03  19:23:12",remark:"-"}]}},filters:{statusFilter:function(t){var e={agree:"成功",reject:"驳回"};return e[t]},statusTypeFilter:function(t){var e={agree:"success",reject:"error"};return e[t]}},methods:{handleTabChange:function(t){this.tabActiveKey=t}}},o=s,u=(a("f352"),a("2877")),p=Object(u["a"])(o,n,r,!1,null,"62f405ef",null);e["default"]=p.exports},f352:function(t,e,a){"use strict";var n=a("2033"),r=a.n(n);r.a}}]);