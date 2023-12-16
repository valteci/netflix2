import { 
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    Post,
    Put,
    Req,
    Res,
    UseGuards
} from '@nestjs/common';

import { Request, Response } from 'express';
import { AuthGuard } from '@nestjs/passport';
import { FrontendService } from './frontend.service';
import { readFileSync, createReadStream } from 'fs';


@Controller('')
export class FrontendController {

    constructor(private service: FrontendService) {

    }

    @UseGuards(AuthGuard('jwt'))
    @Get('me')
    getMe(@Req() req: Request) {
        return req.user;
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
        return this.service.loadFilmes();
    }

    @Get('trailerJogos')
    trailerJogos() {
        return this.service.loadJogos();
    }
    
    @UseGuards(AuthGuard('jwt'))
    @Get('conteudoJogos_auth')
    conteudoAuthJogos() {
        return this.service.conteudoJogos();
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('conteudoFilmes_auth')
    conteudoAuthFilmes() {
        return this.service.conteudoFilmes();
    }

    /* @Get('getVideo')
    getVideo(@Res() res: Response) {
        res.setHeader('Content-Type', 'video/mp4');
        const path = '../../front-end/videos/gta6.mp4';
        const stream = createReadStream(path);
        stream.pipe(res);

    } */

}
