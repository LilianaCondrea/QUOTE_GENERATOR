const quoteContainer=document.getElementById('quote-container');
const quoteText=document.getElementById('quote');
const authorText=document.getElementById('author');
const newQuoteBtn=document.getElementById('new-quote');
const loader=document.getElementById('loader');

// Show Loading
function loading(){
    loader.hidden=false;
    quoteContainer.hidden=true;
}

// Hide loading
function complete(){
    loader.hidden=true;
    quoteContainer.hidden=false;
}

function newQuote(){
    loading();
    // pick a random quote from apiQuotes array
    const quote=localQuotes[Math.floor(Math.random() * localQuotes.length)];
    // check if author field is blank and replace with 'Unknown'
    if(quote.authorText == null){
        authorText.textContent='Unknown';
    }
    else{
        authorText.textContent=quote.author;
    }
    // set quote,hide loader
    quoteText.textContent=quote.text;
    complete();
}

// Event Listeners
newQuoteBtn.addEventListener('click',newQuote);

newQuote();
