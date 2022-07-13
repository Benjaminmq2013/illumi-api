import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { configureCors } from "./cors/configureCors"

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  configureCors(app)
  await app.listen(process.env.PORT || 5000);
}
bootstrap();
