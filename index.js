const btnLike1 = document.getElementById("btnLike1")
const count1 = document.getElementById("count1")

function countLike1() {
  let likeCounts = parseInt(count1.value) + 1
  count1.textContent = likeCounts.toString()
}
btnLike1.addEventListener("click", countLike1)


const btnLike2 = document.getElementById("btnLike2")
const count2 = document.getElementById("count2")

function countLike2() {
  let likeCounts = parseInt(count2.value) + 1
  count2.textContent = likeCounts.toString()
}
btnLike2.addEventListener("click", countLike2)


const btnDislike1 = document.getElementById("btnDislike1")
const count3 = document.getElementById("count3")

function countDislike1() {
  let DislikeCounts = parseInt(count3.value) + 1
  count3.textContent = DislikeCounts.toString()
}
btnDislike1.addEventListener("click", countDislike1)




const btnDislike2 = document.getElementById("btnDislike2")
const count4 = document.getElementById("count4")

function countDislike2() {
  let DislikeCounts = parseInt(count4.value) + 1
  count4.textContent = DislikeCounts.toString()
}
btnDislike2.addEventListener("click", countDislike2)


const submit = document.getElementById("submit")
const comment = document.getElementById("comment")
const commentbox = document.getElementById("commentbox")
function submitComment(){
  commentbox.textContent += comment.value.toString() + "\n"
}
submit.addEventListener("click",submitComment)
