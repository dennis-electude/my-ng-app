import { Injectable } from '@angular/core';
import { createClient, Entry, Space, ContentfulClientApi } from 'contentful';

// change these to include your own settings
const CONFIG = {
  space: '1n0yakm0d7xc',
  accessToken: '-v6SqowiS-AIK1HcnkGOyfhGjnTvGR9vsPeAOBHq-dY',

  contentTypeIds: {
    product: 'product'
  }
};

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {
  private cdaClient = createClient({
    space: CONFIG.space,
    accessToken: CONFIG.accessToken
  });

  constructor() { }

  getProducts(query?: object): Promise<Entry<any>[]> {
    return this.cdaClient.getEntries(Object.assign({
      content_type: CONFIG.contentTypeIds.product
    }, query))
      .then(res => res.items);
  }

  getProduct(slug: string): Promise<Entry<any>> {
    return this.getProducts({ 'fields.slug': slug })
      .then(items => items[0]);
  }

}
