import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    // The platform passes the port in the PORT variable; 3000 by default
    await app.listen(process.env.PORT ?? 3000, '0.0.0.0');
    console.log(`Server running on ${await app.getUrl()}`);
}

bootstrap();
