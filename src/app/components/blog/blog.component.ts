import { Component, ViewEncapsulation } from '@angular/core';
import { Noticia } from 'src/app/interfaces/noticia.interface';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  encapsulation: ViewEncapsulation.None /* necesario para poder utilizar los estilos en la función displayData() */
})
export class BlogComponent {
  arrayNews:Noticia[] = [];

  constructor(){
    this.arrayNews = [
      {
        title: 'Un hombre pregunta si, con lo del cambio climático, se puede comer turrón en julio',
        image: [{
          url: 'https://emtstatic.com/2023/07/iStock-450136885-696x464.jpg',
          title: 'Foto noticia'
        }],
        text: 'Si en invierno hace calor, digo yo que me puedo apretar ahora una barra de jijona, ¿no?. Hay cambio o no hay cambio? García Blanco quiere un compromiso por escrito de los grandes supermercados asegurando que venderán turrón todo el año.',
        date: new Date("2023-01-16")
      },
      {
        title: 'Adios',
        image: [{
          url: 'https://emtstatic.com/2023/07/iStock-450136885-696x464.jpg',
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
      retornable += `<div class="main__noticia"><h2 class="noticia_title">${element.title}</h2><figure class=""><img class="noticia__img" src="${element.image[0].url}" alt="${element.image[0].title}"></figure><p class="noticia__text">${element.text}</p><span class="noticia__date">La noticia fue creada el día: ${element.date.getDate()}/${element.date.getMonth()}/${element.date.getFullYear()} a las ${element.date.getHours()}:${element.date.getMinutes()}:${element.date.getSeconds()} horas</span></div>`;      
    });
    return retornable;

  }

}
