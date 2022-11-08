import { Component, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  currentIndex!: number;
  playList = [
    {'src':'https://download.samplelib.com/mp4/sample-5s.mp4',
    'poster':'https://samplelib.com/lib/preview/mp4/sample-5s.jpg'},

    {'src':'https://download.samplelib.com/mp4/sample-15s.mp4',
    'poster':'https://samplelib.com/lib/preview/mp4/sample-15s.jpg'},

    {'src':'https://download.samplelib.com/mp4/sample-30s.mp4',
    'poster':'https://samplelib.com/lib/preview/mp4/sample-30s.jpg'},

    {'src':'https://download.samplelib.com/mp4/sample-15s.mp4',
    'poster':'https://samplelib.com/lib/preview/mp4/sample-15s.jpg'},

    {'src':'https://download.samplelib.com/mp4/sample-30s.mp4',
    'poster':'https://samplelib.com/lib/preview/mp4/sample-30s.jpg'},
    {'src':'https://download.samplelib.com/mp4/sample-5s.mp4',
    'poster':'https://samplelib.com/lib/preview/mp4/sample-5s.jpg'},

    {'src':'https://download.samplelib.com/mp4/sample-15s.mp4',
    'poster':'https://samplelib.com/lib/preview/mp4/sample-15s.jpg'},

    {'src':'https://download.samplelib.com/mp4/sample-30s.mp4',
    'poster':'https://samplelib.com/lib/preview/mp4/sample-30s.jpg'},
  ];


  isPlay: boolean = false;

  playPause() {
    var myVideo: any = document.getElementById("video");
    if (myVideo.paused) myVideo.play();
    else myVideo.pause();
  }


  playVideo(i: any, flag:boolean){
    this.currentIndex = i;
    var video : any = document.getElementById("video");
    if(!video.paused) video.pause();

    video.poster = this.playList[i]['poster'];
    video.src = this.playList[i]['src']
    if(flag) video.play();


  }

  vidEnded(){
    this.currentIndex+=1
    if(this.currentIndex <= this.playList.length) this.playVideo(this.currentIndex, true)
    else this.playVideo(0, true)

  }

  skip(value: any) {
    let video: any = document.getElementById("video");
    video.currentTime += value;
  }

  restart() {
    let video: any = document.getElementById("video");
    video.currentTime = 0;
  }
}
