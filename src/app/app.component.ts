import { Component, AfterViewInit } from '@angular/core';
import { smoothHeight } from './animations';
import { SortablejsOptions } from 'ngx-sortablejs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [smoothHeight]
})
export class AppComponent implements AfterViewInit {
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
    handle: '.handler-pai',
    forceFallback: true,  // ignore the HTML5 DnD behaviour and force the fallback to kick in
    fallbackOnBody: true,
    fallbackClass: "dragged-item",
    // Element dragging started
    onChoose: function () {
      this.options.component.collapsarAll();  // element index within parent
    },
  };
  options2 = {
    component: this,
    sort: true,
    scroll: true,
    handle: '.handler-fio'
  };
  itensCollapsados = [];

  ngAfterViewInit() {
    console.log(this.sortableInstance);
  }

  expandir(pai) {
    const itemExistente = this.itensCollapsados.indexOf(pai);
    if (itemExistente >= 0) {
      this.itensCollapsados.splice(itemExistente, 1);
    } else {
      this.itensCollapsados.push(pai);
    }
  }

  expandirAll() {
      this.itensCollapsados = [];
      for (let i = 0; i <= this.lista.length; i++) {
        this.itensCollapsados.push(i);
      }
  }

  collapsarAll() {
    this.itensCollapsados = [];
  }
}
