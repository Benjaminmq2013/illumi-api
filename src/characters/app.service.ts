import { Injectable } from '@nestjs/common';
import { Character } from '../interfaces/characters.interface';

@Injectable()
export class CharactersService {
  private readonly characters: Character[] = [] 

  create(character: Character) {
    this.characters.push(character);
  }

  findAll():Character[]{
    return this.characters
  }

  getCharacters(): string {
    return "gon, killua, illumi, hisoka"
  }

  secondaryCharacters():string{
    return '[ "Silva Zoldyck", "Gin Freecs", "Cheetu" ]'
  }
}
