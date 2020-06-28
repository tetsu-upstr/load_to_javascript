// 1
// function timesTwo(i) {
//     return i * 2;
// }

// 2
// const timesTwo = function(i) {
//     return i * 2;
// }

// 3 arrow function
// const timesTwo = (i) => {
//   return i * 2;
// }

// 4 引数がひとつの場合は( )を省略できる
// const timesTwo = i => {
//   return i * 2;
// }

// 5 1行しかない場合は、{ } と return を省略できる
const timesTwo = i => i * 2;


const res = timesTwo(2);
// console.log(res);

// Syntax
let arroFn;
arrowFn = () => 42; // 引数がない場合は()が必要
arrowFn = x => 42;
arrowFn = (x) => 42;
arrowFn = (x, y) => 42;
arrowFn = (x, y) => {
    console.log(x + y); // 2行以上になると{ }で囲む
    return x + y;
}


// thisの挙動の違い
// let normalFn;
// normalFn = {
//     id: 43,
//     counter: function() {
//         console.log(this.id);
        
//         // 無名関数のthis.idはwindowオブジェクトを参照する
//         window.setTimeout( function() {
//             console.log(this.id) // undefined
//         }, 1000);
//     }
// };

// normalFn.counter();

// thisのバインド
let normalFn;
normalFn = {
    id: 43,
    counter: function() {
        console.log(this.id);
        
        // アロー関数は上のthisをバインドする
        window.setTimeout( () => {
            console.log(this) // {id: 43, counter: ƒ}
        }, 1000);
    }
};

normalFn.counter();

