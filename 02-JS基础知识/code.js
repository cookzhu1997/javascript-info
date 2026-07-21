let admin, name;
name = "John";
admin = name;
console.log(admin)


// 好复杂的写法↓

// let age = prompt('age?', 18);

// let message = (age < 3) ? 'Hi, baby!' : (age < 18) ? 'Hello!' : (age < 100) ? 'Greetings!' : 'What an unusual age!';

// console.log( message );

// 好复杂的写法↑


let result = "" || "" || "cook" || "wow"
console.log('逻辑运算符',result)

// 写一个 if 条件句，检查 age 是否不位于 14 到 90 的闭区间。

// 创建两个表达式：第一个用非运算 !，第二个不用。
if(!(age >= 14 && age <= 90)){}
if(age<14 || age>90){}

// 空值合并运算符 ??
let user = undefined
let user1 = undefined
let user2 = 'hello'
console.log(user ?? user1 ?? user2 ?? 'default')


// switch 语句
let switchData = 0
switch (switchData){
  case 0: 
    console.log('0', a);
    break;
  case 1:
    console.log('1', a);
    break;
  default:
    console.log('default', a)
}