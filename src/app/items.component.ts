import { Component } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import { action, alert } from '@nativescript/core/ui/dialog';
import { ItemService, Item } from './item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html'
})
export class ItemsComponent {
  searchText: string = '';
  items: Item[] = [];
  constructor(
    private itemService: ItemService,
    private routerExtensions: RouterExtensions
  ) {
    this.items = this.itemService.getItems();
  }
  goToDetail(id: number) {
    this.routerExtensions.navigate(['/item', id]);
  }

onRefresh(args: any) {
  const pullRefresh = args.object;
  setTimeout(() => {
    this.itemService.addRandomItem();
    this.items = [...this.itemService.getItems()];
    pullRefresh.refreshing = false;
    alert('¡Lista actualizada!');
  }, 1000);
}

openActionDialog(item: Item) {
  action({
    message: 'Selecciona una categoría:',
    cancelButtonText: 'Cancelar',
    actions: ['Tecnología', 'Hogar', 'Deportes']
  }).then((result) => {
    if (result && result !== 'Cancelar') {
      item.category = result;
      alert('Categoría cambiada a ${result}');
    }
  });
}

onDoubleTap(item: Item) {
  alert('Doble tap sobre: ${item.title}');
}

animateButton(args: any) {
  const view = args.object;
  view.animate({
    rotate: 360,
    duration: 500
  }).then(() => {
    view.rotate = 0;
  });
 }
}
