const txtTrollName = document.getElementById("txtTrollName");
const txtTrollMsg = document.getElementById("txtTrollMsg");
const btn = document.getElementById('btnNewTrollMessage')
console.log(123)
console.log(btn)
btn.addEventListener( 'click',  () => {
    console.log(1)
})

function updateTrollBox(trollPost){
    let trollData = '<p><b>' + trollPost.troll;
    trollData += `</b> said: ${trollPost.message}`
    trollData += ` - <small> ${trollPost.date} </small> </p>`

    // need to grab html list element   
    let currentTrollBox = document.getElementById('trollbox').innerHTML;
    // we grab the actual list content with innerHTML

    document.getElementById('trollbox')
    .innerHTML =  currentTrollBox + trollData


}

// New trollbox entry:

btn.addEventListener('click', event => {
    const troll = txtTrollName.value;
    const msg = txtTrollMsg.value; 
    const now = new Date();
    const trollPost = {
        troll: troll,
        message: msg,
        date: now.toUTCString()
    };
    // updatePosts:
updateTrollBox(trollPost)
// clear textbox 
document.getElementById('txtTrollName').value = '';

document.getElementById('txtTrollMsg').value = '';
})

