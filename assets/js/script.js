// TODO: Declare any global variables we need
let headsRolls = 0
let tailsRolls = 0

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('flip').addEventListener('click', () => {
        // Determine result using Math.random() which returns a value between 0 and 1
        // Therefore, it has a 50% chance to be below 0.5
        let flippedHeads = Math.random() < 0.5

        // Take different actions for heads vs tails flipped
        if (flippedHeads) {
            // Display image and message as heads
            document.getElementById('penny-image').src = 'assets/images/penny-heads.jpg'
            document.getElementById('message').textContent = 'You Flipped Heads!'

            // Add one to the count of number of heads flipped
            headsRolls += 1
        }
        else {
            // Display image and message as tails
            document.getElementById('penny-image').src = 'assets/images/penny-tails.jpg'
            document.getElementById('message').textContent = 'You Flipped Tails!'

            // Add one to the count of number of tails flipped
            tailsRolls += 1
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