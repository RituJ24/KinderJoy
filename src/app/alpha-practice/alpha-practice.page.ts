import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alpha-practice',
  templateUrl: './alpha-practice.page.html',
  styleUrls: ['./alpha-practice.page.scss'],
})
export class AlphaPracticePage implements OnInit {

  questions: { image: string, letter: string, options: string[] }[] = [
    { 
      image: '../assets/icon/apple.png',
      letter: 'A',
      options: ['A', 'B', 'C', 'D']
    },
    { 
      image: 'https://t3.ftcdn.net/jpg/04/91/73/76/240_F_491737643_wpHW6R7ixx9lfcvlp7BEHb7mKlp0Up65.jpg',
      letter: 'B',
      options: ['A', 'B', 'C', 'D']
    },
    { 
      image: 'https://i.pinimg.com/originals/f2/fa/7e/f2fa7ed2651b96b3480aa2bce7eb103f.jpg',
      letter: 'E',
      options: ['A', 'E', 'C', 'D']
    },
    { 
      image: 'https://i.pinimg.com/736x/4e/db/b2/4edbb2eb70176052c6693e6a148e6f8d.jpg',
      letter: 'M',
      options: ['L', 'B', 'M', 'K']
    },
    { 
      image: 'https://i.pinimg.com/564x/73/ba/f5/73baf5c0481b89a9862def470ef4b5c4.jpg',
      letter: 'I',
      options: ['J', 'K', 'I', 'G']
    },
    { 
      image: 'https://i.pinimg.com/originals/f8/f2/72/f8f272345b2ef301e8c0b2188f6a6eed.png',
      letter: 'D',
      options: ['E', 'F', 'C', 'D']
    },
    { 
      image: 'https://i.pinimg.com/736x/25/38/70/253870e6b4567d7ce414347935f2cb85.jpg',
      letter: 'L',
      options: ['K', 'L', 'M', 'N']
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
