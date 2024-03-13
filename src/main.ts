import { NestFactory } from '@nestjs/core';
import { FiloStackModule } from './filo-stack/filo-stack.module';

async function bootstrap() {
  const app = await NestFactory.create(FiloStackModule);
  await app.listen(3000);
}
bootstrap();
