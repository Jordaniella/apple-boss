import { NgClass } from '@angular/common';
import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() color:string = ""
  isActive: boolean = false
  @HostListener('window:scroll', ['$event']) // for window scroll events
  getScroll(event: any) {
    //Animation onScroll de début
    this.isActive = window.scrollY > 100 
    //Présentation du diaporama des compétences
    // console.log(window.scrollY);
  }
}
