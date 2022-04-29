// TODO: Declare any global variables we need
let headsRolls = 0
let tailsRolls = 0

document.addEventListener('DOMContentLoaded', function () {
    // This is just a sanity check to make sure your JavaScript script is getting loaded

    const pennyButton = document.querySelector('#flip');
    pennyButton.addEventListener('click', function(){
        let headsFlip = Math.random() < 0.5;
        if (headsFlip) {
            document.getElementaryById('penny-image').src = 'assets/images/penny-heads.jpg';
            document,getElementaryById('message').textContent = 'You Flipped Heads!';
            numberOfHeads++;
        } else {
            document.getElementById('penny-image').src = 'assets/images/penny-tails.jpg';
            document.getElementById('message').textContent = 'You Flipped Tails';
            numberOfTails--;
        }
let total = headsRolls + tailsRolls;
        let percentHeads = 0;
        let percentTails = 0;

if (total > 0) {
        percentHeads = Math.round((headsRolls / total) * 100);
        percentTails = Math.round((tailsRolls / total) * 100);
    }

    document.getElementById('heads').textContent = headsRolls;
    document.getElementById('Heads-percent').textContent = percentHeads + '%'
    document.getElementById('tails').textContent = tailsRolls;
    document.getElementById('tails-percent').textContent = percentTails + '%'
})
    document.getElementById('clear').addEventListener('click', function () {
        headsRolls = 0
        tailsRolls = 0

       document.getElementById('message').textContent = 'Let\'s Get Rolling!'
    let total = headsRolls + tailsRolls

    let percentHeads = 0
    let percentTails = 0

    if (total > 0) {
  
    percentHeads = Math.round((headsRolls / total) * 100)
    percentTails = Math.round((tailsRolls / total) * 100)
}


    document.getElementById('heads').textContent = headsRolls
    document.getElementById('heads-percent').textContent = percentHeads + '%'
    document.getElementById('tails').textContent = tailsRolls
    document.getElementById('tails-percent').textContent = percentTails + '%'
    })
    
}) 