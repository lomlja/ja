 // Array of 30 relationship quotes
 const quotes = [
  { text: "Love is not about how much you say 'I love you', but how much you prove that it's true.", author: "Unknown" },
  { text: "The best thing to hold onto in life is each other.", author: "Audrey Hepburn" },
  { text: "Love is when you meet someone who tells you something new about yourself.", author: "Andre Breton" },
  { text: "Love isn't something you find. Love is something that finds you.", author: "Loretta Young" },
  { text: "To love and be loved is to feel the sun from both sides.", author: "David Viscott" },
  { text: "You come to love not by finding the perfect person, but by seeing an imperfect person perfectly.", author: "Sam Keen" },
  { text: "Love is composed of a single soul inhabiting two bodies.", author: "Aristotle" },
  { text: "In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine.", author: "Maya Angelou" },
  { text: "Love is a friendship set to music.", author: "Joseph Campbell" },
  { text: "We loved with a love that was more than love.", author: "Edgar Allan Poe" },
  { text: "True love stories never have endings.", author: "Richard Bach" },
  { text: "Love recognizes no barriers.", author: "Maya Angelou" },
  { text: "If I know what love is, it is because of you.", author: "Hermann Hesse" },
  { text: "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.", author: "Lao Tzu" },
  { text: "Love cures people—both the ones who give it and the ones who receive it.", author: "Karl Menninger" },
  { text: "The best and most beautiful things in this world cannot be seen or even heard, but must be felt with the heart.", author: "Helen Keller" },
  { text: "Where there is love there is life.", author: "Mahatma Gandhi" },
  { text: "Love is not only something you feel, it is something you do.", author: "David Wilkerson" },
  { text: "The best love is the kind that awakens the soul; that makes us reach for more.", author: "Nicholas Sparks" },
  { text: "You don't love someone for their looks, or their clothes, or for their fancy car, but because they sing a song only you can hear.", author: "Oscar Wilde" },
  { text: "Love is the whole thing. We are only pieces.", author: "Rumi" },
  { text: "Love takes off masks that we fear we cannot live without and know we cannot live within.", author: "James Baldwin" },
  { text: "In dreams and in love there are no impossibilities.", author: "Janos Arany" },
  { text: "One word frees us of all the weight and pain of life: That word is love.", author: "Sophocles" },
  { text: "You are my heart, my life, my one and only thought.", author: "Arthur Conan Doyle" },
  { text: "Love is a better teacher than duty.", author: "Albert Einstein" },
  { text: "The first duty of love is to listen.", author: "Paul Tillich" },
  { text: "True love is rare, and it’s the only thing that gives life real meaning.", author: "Nicholas Sparks" },
  { text: "Whatever our souls are made of, his and mine are the same.", author: "Emily Brontë" },
  { text: "There is no remedy for love but to love more.", author: "Henry David Thoreau" }
];

// Get the current day of the month (0-29 for each day in a 30-day cycle)
const dayOfMonth = new Date().getDate() % quotes.length;

// Display the quote for the day
document.getElementById('quote').textContent = `"${quotes[dayOfMonth].text}"`;
document.getElementById('author').textContent = `- ${quotes[dayOfMonth].author}`;