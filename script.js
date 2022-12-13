let arr = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4EczCM9YCdrZwxsNNqpu7fMms-gXHkh0kCA&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmJ-LKvw7u2t9I7jcuOirKmr8Re9HQL00HMQ&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMfbZKzSI6M84hF8ybPFJ8U35AFt8AbK5g-w&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPrwrcaKVIx3kXG-F2c6u-1DuZF6vCKILUjA&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5PpXeXPrDzx9pPzfsMr5YmX7zJnPFrkDgVw&usqp=CAU"]
let array = []
let addImg = Math.floor(Math.random() * 5)
arr.push(arr[addImg])
for (let i = 0; i < 6; i++) {
    let randomValue = Math.floor(Math.random() * arr.length)
    array.push(arr[randomValue])
    arr.splice(randomValue, 1)
}
let img1 = document.getElementById('img-1')
let img2 = document.getElementById('img-2')
let img3 = document.getElementById('img-3')
let img4 = document.getElementById('img-4')
let img5 = document.getElementById('img-5')
let img6 = document.getElementById('img-6')
let value1 = document.createElement('img')
let value2 = document.createElement('img')
let value3 = document.createElement('img')
let value4 = document.createElement('img')
let value5 = document.createElement('img')
let value6 = document.createElement('img')

//https://github.com/Arockiajeyson/ajs-robot.git
value1.src = array[0]
value2.src = array[1]
value3.src = array[2]
value4.src = array[3]
value5.src = array[4]
value6.src = array[5]
img1.appendChild(value1)
img2.appendChild(value2)
img3.appendChild(value3)
img4.appendChild(value4)
img5.appendChild(value5)
img6.appendChild(value6)
let btn = document.getElementById('button')
let style = "display:none"
btn.style = style
let resets = document.getElementById('reset')
let styles = "display:none"
resets.style = styles
let cnt = 0
let arr3 = []
function imgages(event) {
    if (arr3[0] != event) {
        arr3.push(event)
        cnt++
        if (cnt <= 2) {
            if (cnt === 1) {
                resets.removeAttribute('style')
            }
            if (cnt === 2) {
                btn.removeAttribute('style')
                resets.style = styles
            }
            let tickMark = document.getElementsByTagName('img')
            tickMark[event].src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ53mI5biPhcvplecT3fpBGmbxTKHF48hfkMg&usqp=CAU"
        }
        // if(cnt===1){
        //     resets.removeAttribute('style')
        // }  
        // if(cnt===2){
        //     btn.removeAttribute('style')
        //     resets.style=styles
        // }
        // let tickMark=document.getElementsByTagName('img')
        // tickMark[event].src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ53mI5biPhcvplecT3fpBGmbxTKHF48hfkMg&usqp=CAU"

    }
}
function reset() {
    location.reload()
}
function button() {
    if (array[arr3[0]] == array[arr3[1]]) {
        document.getElementById('para').innerText = "You are a human. Congratulations!"
    } else {
        document.getElementById('para').innerText = "We can't verify you as a human.You selected the non-identical tiles."
    }
}
