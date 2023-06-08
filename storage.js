//store
//user-input
//show
//output

$('#store').on('click', () => {
    let input = $('#user-input').text();
    localStorage.setItem('lockbox', input);
    console.log(input);
    console.log(localStorage.getItem('lockbox'));
})

$('#show').on('click', () => {
    let output = localStorage.getItem('lockbox');
    $('#output').text(output);
})
