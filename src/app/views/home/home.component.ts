import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { LandingComponent } from '../../components/landing/landing.component';
import { CardComponent } from '../../components/card/card.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,CardComponent, LandingComponent, FooterComponent, NgClass],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  imgUrlList:ILandingImg[] = [
    {
      image: ['assets/tigre1.png','assets/tigre2.png'],
      color: 'gray',
      title: 'Tiger Theme'
    },
    {
      image: ['assets/leopard1.png','assets/leopard2.png'],
      color: 'yellow',
      title: 'Leopard Theme'
    },
    {
      image: ['assets/lion1.png','assets/lion2.png'],
      color: 'normal',
      title: 'Lion Theme'
    },
    {
      image: ['assets/puma1.png','assets/puma2.png'],
      color: 'normal',
      title: 'Puma Theme'
    },
  ];
  allPartenaire: string [] = [
    'assets/1.png',
    'assets/2.png',
    'assets/3.png',
    'assets/4.png',
  ]
  current: ILandingImg = this.imgUrlList[1]
  allServices: {title:string; desc:string} [] = [
    {
      title: "Migration de Données",
      desc: "Transfert sans effort de vos données d'un ancien appareil vers votre nouveau MacBook, sans aucune perte."
    },
    {
      title: "Formation et Conseils",
      desc: "Sessions de formation pour vous aider à tirer le meilleur parti de votre MacBook, incluant des astuces et des fonctionnalités avancées."
    },
    {
      title: "Support Technique Premium",
      desc: "Assistance dédiée pour résoudre rapidement tout problème, afin que votre MacBook fonctionne toujours au maximum de son potentiel."
    }
  ]
  temoignage: any[] = [
    {
      username: "MarieD",
      message: "Service rapide et efficace, mon MacBook fonctionne parfaitement. Merci Apple Boss!",
      dateTime: "12 oct 2024"
    },
    {
      username: "ThomasL",
      message: "Migration de données sans souci. Très professionnel!",
      dateTime: "14 oct 2024"
    },
    {
      username: "SophieR",
      message: "Excellente formation, j'ai appris plein d'astuces pour optimiser mon MacBook.",
      dateTime: "10 oct 2024"
    }
  ]
  currentChat: any = this.temoignage[0]
  changeColor = (index: number) => {this.current = this.imgUrlList[index]}
  getNext = (element:ILandingImg) => {
    let index = 0
    this.temoignage.forEach((item, i) => {
      if(element == item) {
        index = i}
    });
    this.currentChat = (index + 1 > this.temoignage.length - 1) ? this.temoignage[0] : this.temoignage[index+1]
  }
  getPrev = (element:ILandingImg) => {
    let index = 0
    this.temoignage.forEach((item, i) => {
      if(element == item) {
        index = i}
    });
    this.currentChat = (index - 1 < 0) ? this.temoignage[this.temoignage.length - 1 ] : this.temoignage[0]
  }
}
interface ILandingImg {
  image: string[];
  color: string;
  title: string;
}