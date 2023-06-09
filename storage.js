//store
//user-input
//show
//output

$('#store').on('click', () => {
    // let input = $('#user-input').text();
    let input = $('#user-input').val();
    localStorage.setItem('lockbox', input);
    sessionStorage.setItem('sessionbox', input);
    $('#user-input').val("");
    // console.log(input);
    // console.log(unput);
    // console.log(localStorage.getItem('lockbox'));
})

$('#show').on('click', () => {
    let output = localStorage.getItem('lockbox');
    $('#output').text("local: "+output);
    let output2 = sessionStorage.getItem('sessionbox');
    $('#output2').text("session: "+output2);
})

$('#clear').on('click',() => {
    localStorage.clear();
    sessionStorage.clear();
    $('#user-input').val("");
    $('#output').text("");
    $('#output2').text("");
})
