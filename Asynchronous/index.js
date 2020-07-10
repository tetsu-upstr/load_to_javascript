
// 指定された秒数待ってから、numの数字が渡ってからcallback関数を呼ぶ
function wait(callback, num){
    setTimeout(() => {
      console.log(num);
      callback();
    }, 3000);
}

// 第二引数numの数字がconsole.log(num)で表示されてから、第一引数callbackが実行される
wait(() => {
    console.log('callback function is called');
}, 0)

// Promise関数の非同期操作
