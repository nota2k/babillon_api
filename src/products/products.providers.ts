
import { DataSource } from 'typeorm';
import { Product } from './entities/product.entity';

export const productProvider = [
  {
    provide: 'PRODUCT_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Product),
    inject: ['DATA_SOURCE'],
  },
];
