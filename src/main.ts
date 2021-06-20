import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { EntityNotFoundInterceptor } from './interceptors/entity-not-found.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Pipes
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  // Interceptor
  app.useGlobalInterceptors(new EntityNotFoundInterceptor());

  await app.listen(3000);
}
bootstrap();
