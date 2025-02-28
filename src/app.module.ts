import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { CategoriesModule } from './categories/categories.module';
import { OrderItemsModule } from './order-items/order-items.module';

@Module({
  imports: [DatabaseModule, ProductsModule, OrdersModule, CategoriesModule, OrderItemsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
