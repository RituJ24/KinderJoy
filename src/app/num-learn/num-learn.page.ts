import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-num-learn',
  templateUrl: './num-learn.page.html',
  styleUrls: ['./num-learn.page.scss'],
})
export class NumLearnPage implements OnInit {

  images: string[] = [
    'https://i.pinimg.com/564x/77/59/87/775987d5a44837bc29e2af89eb0cb893.jpg',
    'https://i.pinimg.com/564x/83/e2/6e/83e26e5dd848a409b9b0b0dc35a6c442.jpg',
    'https://i.pinimg.com/564x/19/b9/ad/19b9ad3a7f742aa3ebdc413beeb12768.jpg',
    'https://i.pinimg.com/564x/aa/2c/83/aa2c830fbd6b68088d55faefdf9ed466.jpg',
    'https://i.pinimg.com/564x/cc/c1/a5/ccc1a5c2cef8ef848dfdd46d451486ec.jpg',
    'https://i.pinimg.com/564x/c4/f5/80/c4f5800e0de22eb1eb8ce69a00a1ef2e.jpg',
    'https://i.pinimg.com/564x/1c/27/2b/1c272b37d30d4be6c55cbc71f65a1267.jpg',
    'https://i.pinimg.com/564x/cb/dc/e8/cbdce8193d1a17b5c3fc65160a080b58.jpg',
    'https://i.pinimg.com/564x/69/3c/de/693cded4019796e63558c80100689123.jpg',
    'https://i.pinimg.com/564x/67/ce/4a/67ce4adbe39681ec98bcb0a843c8a944.jpg'
  ];
  constructor() { }

  ngOnInit() {
  }

}
