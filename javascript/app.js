let questions = [
   {
     id: 0,
     question: 'The average person does what thirteen times a day?',
     choices: ['Cries', 'Laughs', 'Farts', 'Sneezes', 'Scratch themselves'],
     correct: 'Laughs'
   },
  {
   id: 1,
   question: "In Texas it's illegal to swear in front of what?",
   choices: ['A child', 'The governor', 'A corpse', 'The pope', 'A judge'],
   correct: 'A corpse'
  },
  {
   id: 2,
   question: 'How many colors are there in a rainbow? ',
   choices: ['5', '10', '7', '9', '6'],
   correct: '7 '
  },
  {
   id: 3,
   question: 'How many squares are there on a chess board? ',
   choices: ['32', '48', '56', '64', '72'],
   correct: '64 '
  },
  {
    id: 4,
   question: "According to Green mythology, who stole fire for mankind's benefit?",
   choices: ['Zeus', 'Poseidon', 'Artemis', 'Apollo', 'Prometheus' ],
   correct: 'Prometheus '
  },
  {
   id: 5,
   question: 'Who were the first television couple to be shown in bed together on prime time television? ',
   choices: ['Fred and Wilma Flintstone', 'Lucy and Ricky Ricardo', 'Archie and Edith Bunker', 'Herman and Lily Munster', 'Mike and Carol Brady'],
   correct: 'Fred and Wilma Flintstone '
  },
  {
    id: 6,
    question: 'Which country was the Caesar salad invented in? ',
    choices: ['United States', 'Italy', 'Mexico', 'Spain', 'Greece'],
    correct: 'Mexico '
  },
  {
    id: 7,
    question: "What is the world's most popular first name?",
    choices: ['John', 'George', 'Jacob', 'Jesus', 'Muhammad'],
    correct: 'Muhammad '
  }
]

questions.forEach(question => {
$('.trivia').append(`
  <div class="row">
    <h5 class="question">${question.question}</h5>
         <p>
          <label>
              <input class="choice" data-choice="${question.choices[0]}" name="question-${question.id}" type="radio"  />
              <span class="answer">${question.choices[0]}</span>
            </label>
          </p>
          <p>
            <label>
               <input class="choice" data-choice="${question.choices[1]}" name="question-${question.id}" type="radio" />
               <span class="answer">${question.choices[1]}</span>
             </label>
           </p>
          <p>
            <label>
              <input class="choice" data-choice="${question.choices[2]}" name="question-${question.id}" type="radio" />
              <span class="answer">${question.choices[2]}</span>
            </label>
          </p>
          <p>
            <label>
              <input class="choice" data-choice="${question.choices[3]}" name="question-${question.id}" type="radio" />
              <span class="answer">${question.choices[3]}</span>
            </label>
          </p>
          <p>
            <label>
              <input class="choice" data-choice="${question.choices[4]}" name="question-${question.id}" type="radio" />
              <span class="answer">${question.choices[4]}</span>
            </label>
          </p>
         </div>
    <div>
         <p class="answer-${question.id}" style="visibility: hidden; font-weight: bold;  color: MidnightBlue;">The correct answer is: ${question.correct}</p>
    </div>    
      `)
    })     

var qChoice0
var qChoice1
var qChoice2
var qChoice3
var qChoice4
var qChoice5
var qChoice6
var qChoice7

//click event for radio buttons - allows us to get the attribute of the question with "name" and the choice selected with "data-choice"
$(document).on('click', '.choice', function() {
   let temp = $(this).attr('name').split('-')
   let qId = temp[1]
   window[`qChoice${qId}`] = $(this).attr('data-choice')
})


$('.finishQuiz').on('click', function () {
   finishGame ()
})

//Function to finish game
//Function to see answers and to check if they are correct and it tallies the correct answer count; 
//if all correct you are alerted a perfect score, else better luck next time and the correct answers appear
function finishGame () {
  clearInterval(gameTimer)
  count = 0
  for (let i = 0; i < questions.length; i++) {
    $(`.answer-${i}`).css('visibility', 'visible')
    if (window[`qChoice${i}`] === questions[i].correct) {
      count++
    }
  }
  if (count === 8) {
    alert('Perfect Score!')
  } else {
    alert('Better luck next time!')
  }
}

//Time conversion function to turn ms to min-sec
function timeConversion (t) {
  var minutes = Math.floor(t / 60)
  var seconds = t - (minutes * 60)
  if (seconds < 10) {
    seconds = '0' + seconds
  }

  if (minutes === 0) {
    minutes = '00'
  } else if (minutes < 10) {
    minutes = '0' + minutes
  }
  return minutes + ':' + seconds
}

let time = 120
$('.time').html('02:00')
//Function for time of game end 
let gameTimer = setInterval(function () {
  time--
  if (time > 0) {
  $('.time').html(timeConversion(time))
  }
  else {
  $('.time').html('00:00')
   finishGame()
  }
}, 1000)
