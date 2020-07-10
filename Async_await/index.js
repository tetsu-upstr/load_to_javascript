// Async await
// async function sample() {
//     const num = await asyncFn();
//     num++;
//     return num;
// }

// asyncFn(0).then(num => {
//     num++;
//     return num;
// })

function wait(num){
  return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(num);
        if(num === 2) {
          reject(num);
        } else {
          resolve(num);
        }

      }, 300);
  });
}

// try catchでエラーハンドリングする
async function init(){
    let num = 0;
    try {
        num = await wait(num);
        num++;
        mum = await wait(num);
        num++;
        mum = await wait(num);
        num++; 

    } catch (e) {
        throw new Error('Error is occured', e);
    }
    return num;
}
init();
// console.log(init());
// console.でpromiseでラップされたものが返っていくるのが確認できる
