import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  leaderboardData = [
    { name: 'Alice', score: 100, image: 'https://i.pinimg.com/564x/26/29/fe/2629feb8ec7cc079447b1201537894a2.jpg' },
    { name: 'John', score: 98, image: 'https://i.pinimg.com/564x/a8/ad/39/a8ad398b5bbd66a0ed758c9d8a604907.jpg' },
    { name: 'Merry', score: 95, image: 'https://i.pinimg.com/564x/a8/80/a6/a880a6e40b06a97a86eed50c02f6ac17.jpg' },
    { name: 'Ana', score: 90, image: 'https://i.pinimg.com/564x/21/16/9b/21169b19bddd6e6c9c81c61bf7d25b22.jpg' },
    { name: 'Jerry', score: 88, image: 'https://i.pinimg.com/564x/2f/6b/a6/2f6ba6171b13acc192719c381ae96724.jpg' },
    { name: 'Tom', score: 84, image: 'https://i.pinimg.com/564x/3c/1f/88/3c1f88ad660491ae4c26939652774421.jpg' },
    { name: 'Bob', score: 80, image: 'https://i.pinimg.com/564x/5f/8d/8d/5f8d8ddedd2057b1c4b52a32e46421e7.jpg' },
    { name: 'Rosy', score: 76, image: 'https://i.pinimg.com/564x/f5/5e/40/f55e407a714fbd8cd12387af0adc7a60.jpg' },
    { name: 'Lily', score: 72, image: 'https://i.pinimg.com/564x/73/88/f6/7388f6a065a5096e87470b965a14cff2.jpg' },
    { name: 'Geni', score: 70, image: 'https://i.pinimg.com/564x/2d/29/4b/2d294b1eddcfce891091c8b19ba0cecb.jpg' },
  ];
  
  constructor() {}

}
