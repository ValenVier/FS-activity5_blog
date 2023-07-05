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
        title: 'Un hombre pregunta si, con lo del cambio climático, se puede comer turrón en julio',
        image: [{
          url: 'https://www.elmundotoday.com/2023/07/un-hombre-pregunta-si-con-lo-del-cambio-climatico-se-puede-comer-turron-en-julio/',
          title: 'Foto noticia'
        }],
        text: 'Si en invierno hace calor, digo yo que me puedo apretar ahora una barra de jijona, ¿no?. Hay cambio o no hay cambio? García Blanco quiere un compromiso por escrito de los grandes supermercados asegurando que venderán turrón todo el año.',
        date: new Date("2023-01-16")
      },
      {
        title: 'Adios',
        image: [{
          url: 'https://www.elmundotoday.com/2023/07/un-hombre-pregunta-si-con-lo-del-cambio-climatico-se-puede-comer-turron-en-julio/',
          title: 'sdf'
        }],
        text: 'qwe',
        date: new Date("2023-01-16")
      }
    ];
  }

  displayData():string{
    
    let retornable:string = ""; 
    this.arrayNews.forEach(element => {
      console.log(element.image)
      retornable += `<div class="main__noticia"><h2 class="noticia_title">${element.title}</h2><figure class="">
      <img class="noticia__img" src='${element.image[0].url}' alt="${element.image[0].title}"></figure><p class="noticia__text">${element.text}</p>
      <span class="noticia__date">${element.date}</span></div>`;      
    });
    return retornable;
  }

}
