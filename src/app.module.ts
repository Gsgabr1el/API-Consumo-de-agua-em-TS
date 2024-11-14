import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConsumoAguaModule } from './consumo_agua/consumo_agua.module';
import { InitService } from './init.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/proj_consumo'),
    ConsumoAguaModule,
  ],
  providers: [InitService],
})
export class AppModule { }
