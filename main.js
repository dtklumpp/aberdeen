let biff = "boff";
console.log({biff});

let count = 0;

$('.butt').on('click', () => {
    count++;
    console.log('boo!-'+count);
    $('.ghost').toggle();
})

$('.butt1').on('click', () => {
    count++;
    console.log('foo!-'+count);
    $('.page1').toggle();
})

$('.butt2').on('click', () => {
    count++;
    console.log('bar!-'+count);
    $('.page2').toggle();
})

