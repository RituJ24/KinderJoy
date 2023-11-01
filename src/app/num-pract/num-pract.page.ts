import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-num-pract',
  templateUrl: './num-pract.page.html',
  styleUrls: ['./num-pract.page.scss'],
})
export class NumPractPage implements OnInit {
  questions: { image: string, letter: string, options: string[] }[] = [
    { 
      image: 'https://thumbs.dreamstime.com/b/two-cute-funny-pineapple-characters-one-tickling-other-cartoon-vector-illustration-isolated-white-background-couple-85267952.jpg',
      letter: '2',
      options: ['1', '2', '3', '4']
    },
    { 
      image: 'https://img.freepik.com/premium-vector/funny-cute-five-sweet-colorful-candy-any-party_292879-119.jpg',
      letter: '5',
      options: ['3', '4', '5', '6']
    },
    { 
      image: 'https://thumbs.dreamstime.com/b/set-umbrellas-nine-different-colored-43579951.jpg',
      letter: '9',
      options: ['7', '8', '9', '10']
    },
    { 
      image: 'https://www.shutterstock.com/image-vector/cute-cartoon-pencil-character-set-260nw-663274732.jpg',
      letter: '7',
      options: ['7', '6', '8', '9']
    },
    { 
      image: 'https://media.istockphoto.com/id/166128600/vector/four-colorful-inflatable-balls.jpg?s=170667a&w=0&k=20&c=EHgLPV_qus7zBnunkLgdQUkwR1PsdFF0GAmLV4n2NGs=',
      letter: '4',
      options: ['3', '4', '5', '6']
    },
    { 
      image: 'https://img.freepik.com/free-vector/hand-drawn-christmas-gift-collection_23-2148790583.jpg',
      letter: '8',
      options: ['9', '6', '7', '8']
    },
    { 
      image: 'https://i.pinimg.com/564x/57/ed/a9/57eda92a1db6f2933f9d47193bf7ac98.jpg',
      letter: '10',
      options: ['10', '9', '8', '7']
    },
  ];
  currentQuestionIndex: number = 0;
  currentQuestion: { image: string, letter: string, options: string[] };
  selectedAnswer: string;
  score: number = 0;
  quizComplete: boolean = false;

  constructor() {
    this.currentQuestion = this.questions[this.currentQuestionIndex];
  }

  submit() {
    if (this.selectedAnswer === this.currentQuestion.letter) {
      this.score++;
    }

    this.currentQuestionIndex++;
    if (this.currentQuestionIndex < this.questions.length) {
      this.currentQuestion = this.questions[this.currentQuestionIndex];
      this.selectedAnswer = '';
    } 
    else {
      this.quizComplete = true;
    }
  }
  restartQuiz() {
    this.currentQuestionIndex = 0;
    this.currentQuestion = this.questions[this.currentQuestionIndex];
    this.selectedAnswer = '';
    this.score = 0;
    this.quizComplete = false;
  }
  ngOnInit() {
  }

}