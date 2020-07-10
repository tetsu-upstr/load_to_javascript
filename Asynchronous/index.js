
// callback関数：指定された秒数待ってから、numの数字が渡ってからcallback関数を呼ぶ
// function wait(callback, num){
//     setTimeout(() => {
//       console.log(num);
//       callback();
//     }, 3000);
// }

// 第二引数numの数字がconsole.log(num)で表示されてから、第一引数callbackが実行される
// wait(() => {
//     console.log('callback function is called');
// }, 0)

// Promise関数:非同期操作
function wait(num){
  return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(num);
        if(num === 2) {
          reject(num);
        } else {
          resolve(num);
        }

      }, num);
  });
}

// // 直列処理で記述 resolveで渡った引数がthenメソッドの引数になる
// wait(0).then(num => {
//     num++;
//     return wait(num); // thenメソッドでpromiseを繋ぎたい場合はreturnでpromiseを返すようにする
// }).then(num => {
//   num++;
//   return wait(num);
// }).catch(num => { // rejectで指定した引数はcatchの引数に渡る
//   num++;
//   console.error(num,'error');
// });

// 並列処理で記述 配列で格納して記述 thenメソッドの戻り値 それぞれのpromiseのresolveの値が格納された配列が返ってくる
Promise.all([wait(1000), wait(1500), wait(2000)]).then(nums => {
  console.log(nums);
})