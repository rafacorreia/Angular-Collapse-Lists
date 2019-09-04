import { Component, AfterViewInit } from '@angular/core';
import { smoothHeight } from './animations';
import { SortablejsOptions } from 'ngx-sortablejs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [smoothHeight]
})
export class AppComponent implements AfterViewInit{
  name = 'Angular';
  sortableInstance;
  content = false;
  lista = [
    {
      paiNome: 'Pai 1',
      collapsado: true,
      filhos: [
        {
          filhoNome: 'Filho 1'
        },
        {
          filhoNome: 'Filho 2'
        },
        {
          filhoNome: 'Filho 3'
        }
      ]
    },
    {
      paiNome: 'Pai 2',
      collapsado: true,
      filhos: [
        {
          filhoNome: 'Filho 1'
        }
      ]
    },
    {
      paiNome: 'Pai 3',
      collapsado: true,
      filhos: [
        {
          filhoNome: 'Filho 1'
        },
        {
          filhoNome: 'Filho 2'
        }
      ]
    }
  ];
  options = {
    component: this,
    sort: true,
    scroll: true,
    // Element dragging started
	onStart: function (/**Event*/evt) {
		this.options.component.collapsarAll();  // element index within parent
	},
  };

  ngAfterViewInit() {
    console.log(this.sortableInstance);
  }

  expandir(pai) {
    pai.collapsado = !pai.collapsado;
  }

  expandirAll() {
    this.lista.forEach(el => {
      el.collapsado = false;
    })
  }

  collapsarAll() {
    this.lista.forEach(el => {
      el.collapsado = true;
    })
  }
}
