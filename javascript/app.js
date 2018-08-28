let questions = [
   {  
     question: 'The average person does what thirteen times a day?',
     choices: ['Cries', 'Laughs', 'Farts', "Pee's", 'Scratch themselves'],
     correct: 'Laughs'
   },
  {
    question: "In Texas it's illegal to swear in front of what?",
    choices: ['A child', 'The governor', 'A corpse', 'The pope', 'A judge'],
    correct: 'A corpse'
  },
  {
    question: 'How many colors are there in a rainbow? ',
    choices: ['5', '10', '7', '9', '6'],
    correct: '7 '
  },
  {
    question: 'How many squares are there on a chess board? ',
    choices: ['32', '48', '56', '64', '72'],
    correct: '64 '
  },
  {
    question: "According to Green mythology, who stole fire for mankind's benefit?",
    choices: ['Zeus', 'Poseido', 'Artemis', 'Apollo', 'Prometheus' ],
    correct: 'Prometheus '
  },
  {
  question: 'Who were the first television couple to be shown in bed together on prime time television? ',
    choices: ['Fred and Wilma Flintstone', 'Lucy and Ricky Ricardo', 'Archie and Edith Bunker', 'Herman and Lily Munster', 'Mike and Carol Brady'],
    correct: 'Fred and Wilma Flintstone '
  },
  {
    question: 'Which country was the Caesar salad invented in? ',
    choices: ['United States', 'Italy', 'Mexico', 'Spain', 'Greece'],
    correct: 'Mexico '
  },
  {
    question: "What is the world's most popular first name?",
    choices: ['John', 'George', 'Jacob', 'Jesus', 'Muhammad'],
    correct: 'Muhammad '
  }
]

questions.forEach(question => {
$('.container').append(`
  <div class="row">
    <h5 class="question">${question.question}</h5>
         <p>
          <label>
              <input name="group1" type="radio"  />
              <span>${question.choices[0]}</span>
            </label>
          </p>
          <p>
            <label>
               <input name="group1" type="radio" />
               <span>${question.choices[1]}</span>
             </label>
           </p>
          <p>
            <label>
              <input name="group1" type="radio" />
              <span>${question.choices[2]}</span>
            </label>
          </p>
          <p>
            <label>
              <input name="group1" type="radio" />
              <span>${question.choices[3]}</span>
            </label>
          </p>
          <p>
            <label>
              <input name="group1" type="radio" />
              <span>${question.choices[4]}</span>
            </label>
          </p>
          <p>
            <label>
              <input name="group1" type="radio" />
              <span>${question.choices[5]}</span>
            </label>
          </p>
         <p>
           <label>
              <input name="group1" type="radio" />
              <span>${question.choices[6]}</span>
            </label>
          </p>
         <p class="answer">${question.correct}</p>
    </div>
      `)
    })
     




