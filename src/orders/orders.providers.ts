
import { DataSource } from 'typeorm';
import { Order } from './entities/order.entity';

export const productProvider = [
  {
    provide: 'ORDER_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Order),
    inject: ['DATA_SOURCE'],
  },
];
