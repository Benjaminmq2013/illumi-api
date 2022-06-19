/* Characters Controller: "Images", "Name" and "Data" */

import { Controller, Get, Header, HttpCode } from '@nestjs/common';
import { CharactersService } from './app.service';
import { Character } from '../interfaces/characters.interface';

@Controller("/characters")
export class CharactersController {
  constructor(private readonly CharactersService: CharactersService) {}

  @Get("/test")
  async findAll(): Promise<Character[]>{
    return this.CharactersService.findAll()
  }

  @Get("/main")
  getCharacters(): string {
    return this.CharactersService.getCharacters();
  }

  @Get("/secondary")
  @HttpCode(202)
  secondaryCharacters(): string {
    return this.CharactersService.secondaryCharacters();
  }


  @Get("/public")
  @Header("Access-Control-Allow-Origin", "*")
  public(): string {
    return "API Publico, esta sub-ruta tiene deshabilitado el CORS";
  }
}