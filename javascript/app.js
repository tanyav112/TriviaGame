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
   choices: ['Zeus', 'Poseido', 'Artemis', 'Apollo', 'Prometheus' ],
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
          <p>
          <p class="answer">${question.correct}</p>
         <br>
          <br>
    </div>
      `)
    })
     
//click event for radio buttons
$(document).on('click', '.choice', function() {
console.log($(this).attr('name'))
console.log($(this).attr('data-choice'))



})



