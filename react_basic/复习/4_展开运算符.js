let arr1 = [1, 3, 5, 7, 9];
let arr2 = [2, 4, 5, 7, 8];

console.log(...arr1); // 展开一个数组
console.log([...arr1, ...arr2]); // 拼接数组

// 在函数中使用接收形参
function sum(...args) {
  console.log(args, 'args')
  return args.reduce((preValue, currentValue) => {
    return preValue + currentValue
  }, 0)
}

console.log(sum(1, 2))

let p = {a: 1, b: 2}
// 展开运算符无法展开对象
// console.log(...p, 'p')

// 构造字面量时使用展开运算符
let p1 = {...p}
p1.a = 2;
console.log(p, 'p')
console.log(...[1, 2, 3], 12321)

// 合并对象
let p2 = {...p, b: 3};
console.log(p2, 'p2')
