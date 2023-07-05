import { Component } from '@angular/core';
import { Noticia } from 'src/app/interfaces/noticia.interface';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  arrayNews:Noticia[] = [];

  constructor(){
    this.arrayNews = [
      {
        title: 'Hola',
        image: 'der',
        text: 'ers',
        date: new Date("2023-01-16")
      },
      {
        title: 'Adios',
        image: 'qwe',
        text: 'qwe',
        date: new Date("2023-01-16")
      }
    ];

  }

  displayData():string{
    let retornable:string = ""; 
    this.arrayNews.forEach(element => {
      retornable += `<li>${element.title} - ${element.image} - ${element.text} - ${element.date}</li>`;      
    });
     return retornable;
  }

}
