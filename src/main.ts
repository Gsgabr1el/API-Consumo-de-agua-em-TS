import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { InitService } from './init.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });


  //Resata o Db local para evitar casos de alocação anteriores
  const initService = app.get(InitService);
  await initService.clearDatabase();

  await app.listen(3000);
}
bootstrap();