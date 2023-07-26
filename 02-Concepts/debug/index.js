const txtTrollName = document.getElementById("txtTrollName");
const txtTrollMsg = document.getElementById("txtTrollMsg");
const btn = document.getElementById('btnNewTrollMessage')
console.log(123)
console.log(btn)
btn.addEventListener( 'click',  () => {
    console.log(1)
})

const updateTrollBox = (trollPost) => {
    let trollData = '<p><b>' + trollPost.troll;
    trollData += `</b>said:${trollPost}`
    trollData += `- <small> ${trollPost.date} </small> </p>`

    // need to grab html list element   
    let currentTrollBox = document.getElementById('trollbox').innerHTML;
    // we grab the actual list content with innerHTML

    document.getElementById('trollbox')
    .innerHTML =  currentTrollBox + trollData


}