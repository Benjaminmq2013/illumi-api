import { Injectable } from '@nestjs/common';
import { Character } from '../interfaces/characters.interface';

@Injectable()
export class CharactersService {
  private readonly characters: Character[] = [
    {
      id: "651065",
      name: "Illumi Zoldyck",
      imageURL: "https://i.pinimg.com/564x/fa/8f/22/fa8f223f5364e32756e8e982e510a33e.jpg",
      description: "Is the eldest child of Silva and Kikyo Zoldyck. During the 287th Hunter Exam, he appeared under the guise of Gittarackur ",
      age: "24",
      gender: true,
    },
    {
      id: "651066",
      name: "Hisoka Morow",
      imageURL: "https://i.pinimg.com/564x/f3/73/c0/f373c02914f1ff20f0d51e812d20f383.jpg",
      description: "He is always in search for strong opponents, and would spare those who have great potential, such as Gon and Killua in order for them to get strong enough to actually challenge him.",
      age: "Unknown",
      gender: true,
    }
  ] 

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
