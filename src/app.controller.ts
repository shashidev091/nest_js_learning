import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
interface info {
  os: string;
  directory: string;
  user: object 
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/info')
  getInfo(): info {
    return {
      directory: "",
      os: "",
      user: {
        f_name: "Shashi",
        l_name: "Bhagat"
      }
    }
  }
}
