import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'line_connect';
  ngOnInit(){
    
console.log('deuk')
  }
  open(){
    alert('Please OPEN in APPLICATION :)');
  }
  download(){
    let appURL ='';
    const userAgent = window.navigator.userAgent;
    if(userAgent.match(/android/)){
      appURL = 'https://play.google.com/store/apps/details?id=jp.naver.line.android';
    }
    else if(userAgent.match(/iPhone|ipad|MAC/)){
      appURL='https://apps.apple.com/app/line/id443904275'

    }
    else{
      alert('Please download app on your smartphone');
    }
    window.location.href = appURL;
  }
}
