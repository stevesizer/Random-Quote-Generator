/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Attach a interval of 10secs to the window to printQuote automatically
var interId = window.setInterval(printQuote, 10000)

/*** 
  Create an array of funny quote objects that will be used to display
  on the screen randomly.
***/
var quotes = [
  {
    quote: "It’s just a flesh wound.",
    source: "The Black Knight",
    citation: "Monty Python and the Holy Grail",
    year: 1975,
    genre: ["Adventure", "Comedy", "Fantasy"]
  },
  {
    quote: "That is my least vulnerable spot.",
    source: "Captain Renault",
    citation: "Casablanca",
    year: 1942,
    genre: ["Drama", "Romance", "War"]
  },
  {
    quote: "This building has to be at least…. three times bigger than this!",
    source: "Derek Zoolander",
    citation: "Zoolander",
    year: 2001,
    genre: ["Comedy"]
  },
  {
    quote: "I am serious. And don’t call me Shirley.",
    source: "Dr. Rumack",
    citation: "Airplane"
  },
  {
    quote: "Yeah, but I shoot with this hand.",
    source: "Jim",
    citation: "Blazing Saddles",
    year: 1974
  },
  {
    quote: "I’m just one stomach flu away from my goal weight.",
    source: "Emily Charlton"
  },
  {
    quote: "I’m about to do to you what Limp Bizkit did to music in the late ’90s.",
    source: "Deadpool",
    year: 2016
  },
  {
    quote: "Martini. Gin, not vodka. Obviously. Stirred for 10 seconds while glancing at an unopened bottle of vermouth.",
    source: "Eggsy",
    citation: "Kingsman: The Secret Service ",
    year: 2014
  },
  {
    quote: "Greater good?’ I am your wife! I’m the greatest good you’re ever gonna get!",
    source: "Honey",
    citation: "The Incredibles",
    year: 2004
  },
  {
    quote: "I feel comfortable using legal jargon in everyday life. [Someone catcalls her.] I object!",
    source: "Elle Woods",
    citation: "Legally Blonde",
    year: 2001
  },
  {
    quote: "We get the warhead and we hold the world ransom for…. One million dollars.",
    source: "Dr. Evil",
    citation: "Austin Powers: International Man of Mystery",
    year: 1997
  },
  {
    quote: "He might be okay. [Beat. Huge explosion.] Well, no, probably not now.",
    source: "Larry the cameraman",
    citation: "Groundhog Day",
    year: 1993
  },
  {
    quote: "Leave the gun. Take the cannoli.",
    source: "Peter Clemenza",
    citation: "The Godfather",
    year: 1972,
    genre: ["Crime", "Drama"]
  },
  {
    quote: "I’m in a glass case of emotion!",
    source: "Ron Burgundy",
    citation: "Anchorman: The Legend of Ron Burgundy",
    year: 2004,
    genre: ["Comedy"]
  },
  {
    quote: "That rug really tied the room together, did it not?",
    source: "Walter Sobchak",
    citation: "The Big Lebowski ",
    year: 1998
  },
  {
    quote: "I’ll have what she’s having.",
    source: "Random patron",
    citation: "When Harry Met Sally",
    year: 1989,
    genre: ["Comedy", "Drama", "Romance"]
  },
  {
    quote: "This is my wife.",
    source: "Borat",
    citation: "Borat: Cultural Learnings of America for Make Benefit Glorious Nation of Kazakhstan",
    year: 2006
  },
  {
    quote: "It’s like I have ESPN or something.",
    source: "Karen Smith",
    citation: "Mean Girls",
    year: 2004
  },
  {
    quote: "Is that all he said?",
    source: "Bob Harris",
    citation: "Lost in Translation",
    year: 2003,
    genre: ["Drama"]
  },
  {
    quote: "No, it’s a cardigan, but thanks for noticing!",
    source: "Harry Dunne",
    citation: "Dumb and Dumber",
    year: 1994
  }
];

// returns a random quote using the randomNumber function.
function getRandomQuote() {
  var randNumber = getRandomNumber();

  return quotes[randNumber];
}

// returns a random number between 0 and the quotes array length
function getRandomNumber() {
  return randNumber = Math.floor(Math.random() * quotes.length);
}


/***
  Gets a random quote from the quotes array, then concatenates a string of
  HTML to be rendered to the inner of the #quote-box div.
***/
function printQuote() {
  var randomQuote = getRandomQuote();
  var HTML = "";
  HTML += '<p class="quote">' + randomQuote.quote + '</p>';
  HTML += '<p class="source">' + randomQuote.source;
  if (randomQuote.citation) {
    HTML += '<span class="citation">' + randomQuote.citation +  '</span>';
  }
  if (randomQuote.year) {
    HTML += '<span class="year">' + randomQuote.year + '</span>'
  }
  if (randomQuote.genre) {
    HTML += '<br><span class="genre">' + randomQuote.genre.join(", ") + '</span>';
  }
  HTML += '</p>'
  
  document.getElementById("quote-box").innerHTML = HTML;

  var colorValue = randomColor();
  document.body.style.backgroundColor = colorValue;
  document.getElementById("loadQuote").style.backgroundColor = colorValue;
}

/***
 Gets 3 random color values between 1 and 255 and creates
 and rgb color to be used on the body style attribute.
***/
function randomColor() {
  var red = Math.floor(Math.random() * 255) + 1;
  var green = Math.floor(Math.random() * 255) + 1;
  var blue = Math.floor(Math.random() * 255) + 1;
  var colorArray = [red, green, blue];

  var color = 'rgb(' + colorArray.join(",") +')';
  return color;
}



/***
  Adds an event listener to the loadQuote button click event. Once clicked it will 
  display / print a new quote to the screen.
***/
document.getElementById('loadQuote').addEventListener("click", printQuote, false);