window.addEventListener("load",() => {
    setTimeout(() => {
        document.querySelector(".load").style.display = "none"
        document.querySelector(".whole").style.display = "block"
    }, 4000)
})




var mobile = document.getElementsByClassName("mobile-phone")[0]

function show(){
    mobile.style.left = "0%"
}

function hide(){
    mobile.style.left = "-60%"
}

var good = document.getElementById("good")
let hours = new Date().getHours()
if(hours > 6 && hours < 12 ){
    good.innerHTML = "GOOD MORNING"
}

 else if(hours > 12 && hours < 17){
    good.innerHTML = "GOOD AFTERNOON"
 }

 else if(hours > 17 ){
    good.innerHTML = "GOOD EVENING"
 }


const quotes = [
   {text: "The only way to do great work is to love what you do." , author: "Steve Jobs"},
   {text: "Don’t watch the clock; do what it does. Keep going" , author: "Sam Levenson"},
   {text: "Make it simple, but significant." , author: "Don Draper (fictional character, Mad Men)"},
   {text: "The secret of getting ahead is getting started." , author: "Mark Twain"},
   {text: "Creativity is intelligence having fun." , author: "Albert Einstein"}
]

const quoteText = document.querySelector(".quote-text")

const quoteAuthor = document.querySelector(".quote-author")

const prevbtn = document.getElementById("prev-btn")

const nextbtn = document.getElementById("next-btn")

let currentIndex = 0
prevbtn.addEventListener("click", 
    () => {
        currentIndex = (currentIndex - 1 + quotes.length) % quotes.length
        updateQuotes()
    })

nextbtn.addEventListener("click", 
    () => {
        currentIndex = (currentIndex + 1 + quotes.length) % quotes.length
        updateQuotes()
    })

const updateQuotes = () => {
    quoteText.classList.add("hidden")
    quoteAuthor.classList.add("hidden")

    setTimeout(() => {
        quoteText.innerHTML = `${quotes[currentIndex].text}`
        quoteAuthor.innerHTML = `${quotes[currentIndex].author}`

        quoteText.classList.remove("hidden")
        quoteAuthor.classList.remove("hidden")
    }, 300)
}


