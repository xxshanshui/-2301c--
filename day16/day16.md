## watch

vue3中用watch监听reactive定义的对象会默认开启深度监听但是监听对象里面的对象不会开启

要监听多个属性可以用数组包裹数组中的任意一个属性发生改变都会触发监听

watch在监听reactive定义的属性时是监听不到旧值的变化的



## watchEffect

watchEffect会默认开启immediate:第一次监听和deep:深度监听

watch是监听一个或多个watchEffect是监听所有的属性



## setup

执行时机 在beforeCreate前执行一次this是undefined

代替了两个声明周期函数beforeCreate和created

高阶函数调用的时候执行两次

setup两个参数

props，context

props：职为对象包含组组件外传递过来和组件内部接收的属性

context：他是一个上下文对象包含

- attrs: 值为对象，包含：组件外部传递过来，但没有在props配置中声明的属性, 相当于 ```this.$attrs```。
- slots: 收到的插槽内容, 相当于 ```this.$slots```。
- emit: 分发自定义事件的函数, 相当于 ```this.$emit```



## computed

1. 计算属性可以直接读取或者修改
2. 如果要实现计算属性的修改操作
3. 读取数据触发get方法
4. 修改数据触发set方法，set函数的形参就是你赋给他的值