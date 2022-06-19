import { Module } from '@nestjs/common';
import { AppController } from './main/app.controller';
import { CharactersController } from "./characters/characters.controller"
import { AppService } from './main/app.service';
import { CharactersService } from "./characters/app.service"

@Module({
  imports: [],
  controllers: [AppController, CharactersController],
  providers: [AppService, CharactersService ],
})
export class AppModule {}
