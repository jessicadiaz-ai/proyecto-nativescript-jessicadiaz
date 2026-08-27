import { Injectable } from '@angular/core';

export interface Item {
  id: number;
  title: string;
  description: string;
}
@Injectable({ provideIn: 'root' })
export class ItemService {
  private items: Item[] = [
    { id: 1, title: 'Elemento 1', category: 'General', description: 'Detalle 1' },
    { id: 2, title: 'Elemento 2', category: 'General', description: 'Detalle 2' }
  ];

getItems(): Item[] {
  return this.items;
}

getItemById(id: number): Item | undefined {
  return this.items.find(item => item.id === id);
}

addRandomItem() {
  const id = this.items.length + 1;
  this.items.unshift({
    id,
    title: 'Elemento ${id}',
    category: 'Nuevo',
    description: 'Descripción nueva ${id}'
  });
 }
}
