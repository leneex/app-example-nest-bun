import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    // Порт передаёт платформа в переменной PORT; без неё — 3000
    await app.listen(process.env.PORT ?? 3000, '0.0.0.0');
    console.log(`Server running on ${await app.getUrl()}`);
}

bootstrap();
