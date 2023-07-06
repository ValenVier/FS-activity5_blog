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
  newNews:Noticia; 

  constructor(){
    this.newNews = {title:'', image: [{url:'',title:''}], text:'', date: ''};
    this.arrayNews! = [
      {
        title: 'Un hombre pregunta si, con lo del cambio climático, se puede comer turrón en julio',
        image: [{
          url: 'https://emtstatic.com/2023/07/iStock-450136885-696x464.jpg',
          title: 'Foto noticia'
        }],
        text: 'Si en invierno hace calor, digo yo que me puedo apretar ahora una barra de jijona, ¿no?. Hay cambio o no hay cambio? García Blanco quiere un compromiso por escrito de los grandes supermercados asegurando que venderán turrón todo el año.',
        date: '06-07-2023'
      },
      {
        title: 'El CNI ficha como máxima responsable de ciberseguridad a una señora que logró activar su firma digital en la web de Hacienda',
        image: [{
          url: 'https://emtstatic.com/2023/07/iStock-1142857420-696x464.jpg',
          title: 'Foto Noticia'
        }],
        text: 'Después del escándalo del espionaje a miembros del Gobierno de España a través del programa Pegasus, el Centro Nacional de Inteligencia (CNI) ha decidido redoblar sus esfuerzos para blindar los sistemas informáticos que protegen información crítica. Para ello, ha anunciado esta mañana la incorporación de Matilde Zambrana, segoviana de 62 años, como máxima responsable de ciberseguridad. Zambrana acreditó su solvencia logrando obtener la firma digital y el DNI electrónico través de la web de la Agencia Tributaria.',
        date: '06-07-2023'
      }
    ];
  }

  displayData():string{
    let retornable:string = ""; 
    this.arrayNews.forEach(element => {
      retornable += `<div class="main__noticia">
                        <h2 class="noticia_title">${element.title}</h2>
                        <figure class=""><img class="noticia__img" src="${element.image[0].url}" alt="${element.image[0].title}"></figure>
                        <p class="noticia__text">${element.text}</p>
                        <span class="noticia__date">La noticia fue creada el: ${element.date}</span>
                      </div>`;      
    });
    return retornable;
  }

  guardarNoticia():void{
    let fallos:string[] = []; //Array que lleva todos los elementos vacíos del formulario si los hay
    if(this.newNews.title === '' || this.newNews.image[0].url === '' || this.newNews.text ==='' || this.newNews.date ===''){
      if(this.newNews.title === ''){
        fallos.push('Título');
      }
      if(this.newNews.image[0].url === ''){
        fallos.push('URL (Imagen)');
      }
      if(this.newNews.date === ''){
        fallos.push('Fecha');
      }
      if(this.newNews.text === ''){
        fallos.push('Texto de la noticia')
      };
      alert(`Falta de completar: ${fallos.toString()}`);
    }else{
      //damos la vuelta a la fecha para que aparezca dd-mm-aaaa
      let arrayDate:string[] = this.newNews.date.split('-');
      this.newNews.date = `${arrayDate[2]}-${arrayDate[1]}-${arrayDate[0]}`
      
      //Fijamos el alt de la foto
      this.newNews.image[0].title = `Foto Noticia: ${this.newNews.title}`;
      //this.newNews.date = new Date(); //en el caso de que la fecha de publicación fuera automática y no la introdujera el usuario
      
      //pongo la noticia la primera del array para que se vea la primera
      this.arrayNews.unshift(this.newNews);
      this.newNews = {title:'', image: [{url:'',title:''}], text:'', date: ''};
    }
  }
}
