import { NgClass } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [NgClass],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent {
  @Output() changeImageEmitter: EventEmitter<number> = new EventEmitter<number>()
  imgUrlList:ILandingImg[] = [
    {
      image: 'assets/tigre1.png',
      color: 'gray',
      title: 'Tiger Theme'
    },
    {
      image: 'assets/leopard1.png',
      color: 'yellow',
      title: 'Leopard Theme'
    },
    {
      image: 'assets/lion1.png',
      color: 'normal',
      title: 'Lion Theme'
    },
    {
      image: 'assets/puma1.png',
      color: 'normal',
      title: 'Puma Theme'
    },
  ];
  currentImage: ILandingImg = this.imgUrlList[1]
  changeImage = (index:number) => {this.currentImage = this.imgUrlList[index]
    this.changeImageEmitter.emit(index)
  }
  checkImageActive = (element:ILandingImg):boolean => {
    return element == this.currentImage
  } 
}
interface ILandingImg {
  image: string;
  color: string;
  title: string;
}
