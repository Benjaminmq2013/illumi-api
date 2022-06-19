import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getCharacters():string{
    return "gon, killua, illumi, hisoka"
  }
}
