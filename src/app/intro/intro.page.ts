import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {
  slideOpts= {
    initialSlide: 0,
    slidesPerView: 1,
    centeredSlides: true,
    speed: 400
  };
  slides = [
    {
      imageSrc: 'assets/img/logo.jpeg',
      imageAlt: 'Protected Logo',
      title: 'La mejor manera de estar seguro',
      subTitle: 'MIRÁ COMO FUNCIONA!',
      description: `Los mejores álbumes, las mejores canciones. Escucha y comparte en
        cualquier momento, a todas horas.`,
      icon: 'warning'
    },
    {
      imageSrc: 'assets/img/logo.jpeg',
      imageAlt: 'Protected Logo',
      title: 'Disfruta de nuestro reproductor',
      subTitle: 'DE VIDEOS INCREÍBLES',
      // eslint-disable-next-line max-len
      description: `Precione este boton cuando se encuentre en peligro, tardara 5 <br>
      segundos en enviar un mensaje con tu ubicación a tus contactos de confianza.`,
      icon: 'alert'
    },
    {
      imageSrc: 'assets/img/logo.jpeg',
      imageAlt: 'Protected Logo',
      title: 'Accede al exclusivo',
      subTitle: 'MODO DEPORTE',
      description: `Crea una playlist basada en tu actividad física. <br />
        Ten reportes y acceso a lo que necesites, integrado ccon GPS!`,
      icon: 'md-radio-button-on'
    }
  ];

  constructor(private router: Router) { }
  finish(){
    this.router.navigateByUrl('/home');
  }
  ngOnInit() {
  }

}
