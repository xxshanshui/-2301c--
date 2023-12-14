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

## vue2与vue3生命周期的变化

- Vue3.0也提供了 Composition API 形式的生命周期钩子，与Vue2.x中钩子对应关系如下：
 - `beforeCreate`===>`setup()`
 - `created`=======>`setup()`
 - `beforeMount` ===>`onBeforeMount`
 - `mounted`=======>`onMounted`
 - `beforeUpdate`===>`onBeforeUpdate`
 - `updated` =======>`onUpdated`
 - beforedestroy==>`onBeforeUnmount`
 - destroyed=====>`onUnmounted`

- 总结:

 - 组合式生命周期要比配置项快一点

## 动态组件

  component是vue内置组件，主要作用为动态渲染组件，基本用法如下： 

 其中，根据绑定的`is`的值决定拿个组件被渲染。 

## typescript介绍

TypeScript 是 JavaScript 的一个超集，支持 ECMAScript 6 标准（ES6 教程）。
TypeScript 由微软开发的自由和开源的编程语言。
TypeScript 设计目标是开发大型应用，它可以编译成纯 JavaScript，编译出来的 JavaScript 可以运行在任何浏览器上。

安装TypeScript 可以使用npm包管理工具：

npm install -g typescript
tsc -v  //Version 4.4.3

## typescript的类型

TypeScript 支持与 JavaScript 几乎相同的数据类型，此外还提供了实用的枚举类型方便我们使用。


布尔值
ini复制代码let isDone: boolean = false

数字
javascript复制代码let count: number = 10

字符串
javascript复制代码let name: string = "nick"

数组
javascript复制代码let list: number[] = [1, 2, 3];

let list: Array<number> = [1, 2, 3]; // Array<number>泛型语法

## 元组

元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。 比如，你可以定义一对值分别为 string 和 number 类型的元组。
javascript复制代码let x: [string, number]
x = ['hello', 10] // OK
x = [10, 'hello'] // Error

## 枚举

使用枚举我们可以定义一些带名字的常量。 使用枚举可以清晰地表达意图或创建一组有区别的用例。 TypeScript 支持数字的和基于字符串的枚举。
javascript复制代码enum Color {Red, Green, Blue}
let c: Color = Color.Green

枚举类型提供的一个便利是你可以由枚举的值得到它的名字。 例如，我们知道数值为 2，但是不确定它映射到 Color 里的哪个名字，我们可以查找相应的名字：
javascript复制代码enum Color {Red = 1, Green, Blue}
let colorName: string = Color[2]

console.log(colorName) // 显示'Green'因为上面代码里它的值是2

## any

有时候，我们会想要为那些在编程阶段还不清楚类型的变量指定一个类型。 这些值可能来自于动态的内容，比如来自用户输入或第三方代码库。 这种情况下，我们不希望类型检查器对这些值进行检查而是直接让它们通过编译阶段的检查。
在 TypeScript 中，任何类型都可以被归为 any 类型。这让 any 类型成为了类型系统的顶级类型（也被称作全局超级类型）。
javascript复制代码let notSure: any = 4
notSure = 'maybe a string instead'
notSure = false // 也可以是个 boolean

## void

某种程度上来说，void 类型像是与 any 类型相反，它表示没有任何类型。 当一个函数没有返回值时，你通常会见到其返回值类型是 void：
javascript复制代码function warnUser(): void {
 console.log('This is my warning message')
}

## null和undefined

TypeScript 里，undefined 和 null 两者各自有自己的类型分别叫做 undefined 和 null。 和 void 相似，它们的本身的类型用处不是很大：
javascript复制代码let u: undefined = undefined
let n: null = null

## never

never 类型表示的是那些永不存在的值的类型。 例如， never 类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型； 变量也可能是 never 类型，当它们被永不为真的类型保护所约束时。
javascript复制代码// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
 throw new Error(message)
}

// 推断的返回值类型为never
function fail() {
 return error("Something failed")
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
 while (true) {
 }



## Typescript断言

有时候你会遇到这样的情况，你会比 TypeScript 更了解某个值的详细信息。 通常这会发生在你清楚地知道一个实体具有比它现有类型更确切的类型。
通过类型断言这种方式可以告诉编译器，“相信我，我知道自己在干什么”。 类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。 它没有运行时的影响，只是在编译阶段起作用。 TypeScript 会假设你，程序员，已经进行了必须的检查。
javascript复制代码//尖括号语法
let someValue: any = 'this is a string'

let strLength: number = (<string>someValue).length

//as语法
let someValue: any = 'this is a string'

let strLength: number = (someValue as string).length

 