(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{670:function(a,t,r){"use strict";r.r(t);var n=r(5),s=Object(n.a)({},(function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("Boxx",{attrs:{blockStyle:a.blockStyle}}),a._v(" "),r("h2",{attrs:{id:"前言"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[a._v("#")]),a._v(" 前言")]),a._v(" "),r("p",[a._v("很久之前我们组都开始使用 yarn 而不是 npm，但是好像还是有很多朋友还在使用 npm")]),a._v(" "),r("h2",{attrs:{id:"从-npm-到-yarn"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#从-npm-到-yarn"}},[a._v("#")]),a._v(" 从 npm 到 yarn")]),a._v(" "),r("p",[a._v("之前公司的网速奇慢，cnpm 也有一些坑，后面我们干脆全部换成了 yarn")]),a._v(" "),r("h2",{attrs:{id:"npm-有哪些坑"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#npm-有哪些坑"}},[a._v("#")]),a._v(" npm 有哪些坑")]),a._v(" "),r("p",[a._v("npm install 的时候巨慢。特别是新的项目拉下来要等半天，删除 node_modules，重新 install 的时候依旧如此。")]),a._v(" "),r("h2",{attrs:{id:"yarn-是什么"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#yarn-是什么"}},[a._v("#")]),a._v(" yarn 是什么")]),a._v(" "),r("p",[a._v("“Yarn 是由 Facebook、Google、Exponent 和 Tilde 联合推出了一个新的 JS 包管理工具 ，正如官方文档中写的，Yarn 是为了弥补 npm 的一些缺陷而出现的。”")]),a._v(" "),r("h2",{attrs:{id:"yarn-的优点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#yarn-的优点"}},[a._v("#")]),a._v(" yarn 的优点")]),a._v(" "),r("h3",{attrs:{id:"速度快-。速度快主要来自以下两个方面"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#速度快-。速度快主要来自以下两个方面"}},[a._v("#")]),a._v(" 速度快 。速度快主要来自以下两个方面：")]),a._v(" "),r("ol",[r("li",[a._v("并行安装：无论 npm 还是 Yarn 在执行包的安装时，都会执行一系列任务。npm 是按照队列执行每个 package，也就是说必须要等到当前 package 安装完成之后，才能继续后面的安装。而 Yarn 是同步执行所有任务，提高了性能。")]),a._v(" "),r("li",[a._v("离线模式：如果之前已经安装过一个软件包，用 Yarn 再次安装时之间从缓存中获取，就不用像 npm 那样再从网络下载了。")])]),a._v(" "),r("h3",{attrs:{id:"安装版本统一"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#安装版本统一"}},[a._v("#")]),a._v(" 安装版本统一:")]),a._v(" "),r("p",[a._v("为了防止拉取到不同的版本，Yarn 有一个锁定文件 (lock file) 记录了被确切安装上的模块的版本号。每次只要新增了一个模块，Yarn 就会创建（或更新）yarn.lock 这个文件。这么做就保证了，每一次拉取同一个项目依赖时，使用的都是一样的模块版本。npm 其实也有办法实现处处使用相同版本的 packages，但需要开发者执行 npm shrinkwrap 命令。这个命令将会生成一个锁定文件，在执行 npm install 的时候，该锁定文件会先被读取，和 Yarn 读取 yarn.lock 文件一个道理。npm 和 Yarn 两者的不同之处在于，Yarn 默认会生成这样的锁定文件，而 npm 要通过 shrinkwrap 命令生成 npm-shrinkwrap.json 文件，只有当这个文件存在的时候，packages 版本信息才会被记录和更新。")]),a._v(" "),r("h3",{attrs:{id:"更简洁的输出"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#更简洁的输出"}},[a._v("#")]),a._v(" 更简洁的输出:")]),a._v(" "),r("p",[a._v("npm 的输出信息比较冗长。在执行 npm install "),r("code",[a._v("<package>")]),a._v(" 的时候，命令行里会不断地打印出所有被安装上的依赖。相比之下，Yarn 简洁太多：默认情况下，结合了 emoji 直观且直接地打印出必要的信息，也提供了一些命令供开发者查询额外的安装信息。\n多注册来源处理：所有的依赖包，不管他被不同的库间接关联引用多少次，安装这个包时，只会从一个注册来源去装，要么是 npm 要么是 bower, 防止出现混乱不一致。")]),a._v(" "),r("h3",{attrs:{id:"更好的语义化"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#更好的语义化"}},[a._v("#")]),a._v(" 更好的语义化:")]),a._v(" "),r("p",[a._v("yarn 改变了一些 npm 命令的名称，比如 yarn add/remove，感觉上比 npm 原本的 install/uninstall 要更清晰。")]),a._v(" "),r("h2",{attrs:{id:"yarn-和-npm-命令对比"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#yarn-和-npm-命令对比"}},[a._v("#")]),a._v(" Yarn 和 npm 命令对比")]),a._v(" "),r("table",[r("thead",[r("tr",[r("th",[a._v("npm")]),a._v(" "),r("th",[a._v("yarn")])])]),a._v(" "),r("tbody",[r("tr",[r("td",[a._v("npm install")]),a._v(" "),r("td",[a._v("yarn")])]),a._v(" "),r("tr",[r("td",[a._v("npm install react --save")]),a._v(" "),r("td",[a._v("yarn add react")])]),a._v(" "),r("tr",[r("td",[a._v("npm uninstall react --save")]),a._v(" "),r("td",[a._v("yarn remove react")])]),a._v(" "),r("tr",[r("td",[a._v("npm install react --save-dev")]),a._v(" "),r("td",[a._v("yarn add react --dev")])]),a._v(" "),r("tr",[r("td",[a._v("npm update --save")]),a._v(" "),r("td",[a._v("yarn upgrade")])])])])],1)}),[],!1,null,null,null);t.default=s.exports}}]);