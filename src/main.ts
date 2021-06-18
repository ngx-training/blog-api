import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.enableShutdownHooks();
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);

  // Wir brauchen das, um an Lifecycle Events OnModuleDestroy, OnApplicationShutdown, BeforeApplicationShutdown
  // app.close();
}
bootstrap();
