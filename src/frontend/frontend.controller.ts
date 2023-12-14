import { 
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    Post,
    Put,
    Req,
    UseGuards
} from '@nestjs/common';

import { Request } from 'express';
import { AuthGuard } from '@nestjs/passport';
import { FrontendService } from './frontend.service';
import { readFileSync } from 'fs';

@Controller('')
export class FrontendController {

    constructor(private service: FrontendService) {

    }
    
    @Get('entrar')
    signin() {
        return this.service.signin();
    }

    @Get('cadastrar')
    signup() {
        return this.service.signup();
    }

    @Get('home')
    home() {
        return this.service.home();
    }
    
    
    @Get('trailerFilmes')
    trailerFilmes() {
        return this.service.load();
    }

    @Get('trailerJogos')
    trailerJogos() {
        return this.service.load();
    }
    
    @UseGuards(AuthGuard('jwt'))
    @Get('conteudo_auth')
    conteudoAuth() {
        return this.service.conteudo();
    }

}
