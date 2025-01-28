// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   await app.listen(process.env.PORT ?? 3001);
// }
// bootstrap();


import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  const config = new DocumentBuilder()
    .setTitle('API Dokumentacja')
    .setDescription('Dokumentacja API dla aplikacji')
    .setVersion('1.0')
    .addTag('Guests')
    .build();

    app.enableCors({
      origin: 'http://localhost:3001',  // Adres, pod którym działa React Admin
      exposedHeaders: ['Content-Range'], // Umożliwienie dostępu do Content-Range
    });

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3001);
}
bootstrap();
