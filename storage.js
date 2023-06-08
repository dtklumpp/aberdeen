//store
//user-input
//show
//output

$('#store').on('click', () => {
    // let input = $('#user-input').text();
    let input = $('#user-input').val();
    localStorage.setItem('lockbox', input);
    $('#user-input').val("");
    // console.log(input);
    // console.log(unput);
    // console.log(localStorage.getItem('lockbox'));
})

$('#show').on('click', () => {
    let output = localStorage.getItem('lockbox');
    $('#output').text(output);
})
