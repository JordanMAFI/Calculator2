// change background colors

let colors = [
    {first: '#FE4E50', second: '#43BBDC', third: '#525252'},
    {first: '#525252', second: '#FE4E50', third: '#43BBDC'},
    {first: '#43BBDC', second: '#525252', third: '#FE4E50'},
]

i = 0;

setInterval(function() {
    let bgc = document.querySelector('.container');

    let c1 = colors[i]['first'];
    let c2 = colors[i]['second'];
    let c3 = colors[i]['third'];
    bgc.style.background = `linear-gradient(${c1}, ${c2}, ${c3})`;
    i++;

    if (i == undefined || i >= colors.length) {
        i = 0;
    }
    console.log(i, bgc);
}, 3000);
