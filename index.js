
window.addEventListener("DOMContentLoaded",function(){
    const review = [
        {
            img :'./images/simon.png',
            name : 'simon sinek',
            job : 'Simon Oliver Sinek is an American author and inspirational speaker. He is the author of five books, including Start With Why and The Infinite Game.',
            info : 'Great companies dont hire skilled people and motivate them, they hire already motivated people and inspire them.',
        },
    
        {
            img :'./images/martin.png',
            name : 'Martin Luther King Jr.',
            job : 'Martin Luther King Jr. was an American Baptist minister and activist, one of the most prominent leaders in the civil rights movement from 1955 until his assassination in 1968.',
            info:'I believe that unarmed truth and unconditional love will have the final word in reality.',
    
    
        },
    
        {
            img :'./images/james.png',
            name : 'James Clear',
            job:'James Clear is an author, entrepreneur, and photographer in 25+ countries. JamesClear.com is the home of his writing and work.',
            info : 'You should be far more concerned with your current trajectory than with your current results.',
    
        },
    
        {
            img :'./images/hitler.png',
            name : 'Adolf Hitler',
            job : 'Adolf Hitler was an Austrian-born German politician who was dictator of Germany from 1933 until his death in 1945',
            info:'And I can fight only for something that I love, love only what I respect, and respect only what I at least know.',
        }
    ]
    const image = document.getElementById("author-img")
    const name = document.getElementById("author-name")
    const job = document.getElementById("author-job")
    const info = document.getElementById("author-info")
    
    const right_arrow = document.querySelector(".right")
    const left_arrow = document.querySelector(".left")
    let current = 0;
    function display_author(author) {
        const item = review[author]
        image.src = item.img
        name.innerHTML = item.name
        job.innerHTML = item.job
        info.innerHTML = item.info
    }
    
    right_arrow.addEventListener('click', right_click)
    function right_click(e){
        e.preventDefault()
        current++;
        if(current > review.length-1){
            current = 0;
        }
        display_author(current)
    }
    
    left_arrow.addEventListener('click', left_click)
    function left_click(e){
        console.log('enter current '+current)
       e.preventDefault()
       current--
       if (current < 0){
           current = review.length - 1
       }
       display_author(current)
        
    }
    
 })