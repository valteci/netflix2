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
import { readFileSync, writeFileSync } from 'fs';
import { ConfigService } from '@nestjs/config';


@Controller('')
export class FrontendController {

    constructor(private service: FrontendService, private config: ConfigService) {

        const ip = config.get('MEU_IP');
        const pathPaginaCadastro = './front-end/src/cadastro.html';
        const pathPaginaConteudoFilmes = './front-end/src/conteudoFilmes.html';
        const pathPaginaConteudoJogos = './front-end/src/conteudoJogos.html';
        const pathPaginaHome = './front-end/src/home.html';
        const pathPaginaLoadFilmes = './front-end/src/loadFilmes.html';
        const pathPaginaLoadJogos = './front-end/src/loadJogos.html';
        const pathPaginaLogin = './front-end/src/login.html';
        const pathPaginaRedirecionamento = './front-end/src/redirecionamento.html';


        const paginaCadastro = readFileSync(pathPaginaCadastro, 'utf-8');
        const paginaConteudoFilmes = readFileSync(pathPaginaConteudoFilmes, 'utf-8');
        const paginaConteudoJogos = readFileSync(pathPaginaConteudoJogos, 'utf-8');
        const paginaHome = readFileSync(pathPaginaHome, 'utf-8');
        const paginaLoadFilmes = readFileSync(pathPaginaLoadFilmes, 'utf-8');
        const paginaLoadJogos = readFileSync(pathPaginaLoadJogos, 'utf-8');
        const paginaLogin = readFileSync(pathPaginaLogin, 'utf-8');
        const paginaRedirecionamento = readFileSync(pathPaginaRedirecionamento, 'utf-8');

        const pathJsCadastro = './public/js/cadastro.js';
        const pathJsHome = './public/js/home.js';
        const pathJsLoadFilmes = './public/js/loadFilmes.js';
        const pathJsLoadJogos = './public/js/loadJogos.js';
        const pathJsLogin = './public/js/login.js';
        const pathJsRedirecionamento = './public/js/redirecionamento.js';

        const jsCadastro = readFileSync(pathJsCadastro, 'utf-8');
        const jsHome = readFileSync(pathJsHome, 'utf-8');
        const jsLoadFilmes = readFileSync(pathJsLoadFilmes, 'utf-8');
        const jsLoadJogos = readFileSync(pathJsLoadJogos, 'utf-8');
        const jsLogin = readFileSync(pathJsLogin, 'utf-8');
        const jsRedirecionamento = readFileSync(pathJsRedirecionamento, 'utf-8');

        const rePaginaCadastro = paginaCadastro.replaceAll('MEU_IP', ip);
        const rePaginaConteudoFilmes = paginaConteudoFilmes.replaceAll('MEU_IP', ip);
        const rePaginaConteudoJogos = paginaConteudoJogos.replaceAll('MEU_IP', ip);
        const rePaginaHome = paginaHome.replaceAll('MEU_IP', ip);
        const rePaginaLoadFilmes = paginaLoadFilmes.replaceAll('MEU_IP', ip);
        const rePaginaLoadJogos = paginaLoadJogos.replaceAll('MEU_IP', ip);
        const rePaginaLogin = paginaLogin.replaceAll('MEU_IP', ip);
        const rePaginaRedirecionamento = paginaRedirecionamento.replaceAll('MEU_IP', ip);
                
        
        const reJsCadastro = jsCadastro.replaceAll('MEU_IP', ip);
        const reJsHome = jsHome.replaceAll('MEU_IP', ip);
        const reJsLoadFilmes = jsLoadFilmes.replaceAll('MEU_IP', ip);
        const reJsLoadJogos = jsLoadJogos.replaceAll('MEU_IP', ip);
        const reJsLogin = jsLogin.replaceAll('MEU_IP', ip);
        const reJsRedirecionamento = jsRedirecionamento.replaceAll('MEU_IP', ip);
        
        writeFileSync(pathPaginaCadastro, rePaginaCadastro, 'utf-8');
        writeFileSync(pathPaginaConteudoFilmes, rePaginaConteudoFilmes, 'utf-8');
        writeFileSync(pathPaginaLoadJogos, rePaginaConteudoJogos, 'utf-8');
        writeFileSync(pathPaginaHome, rePaginaHome, 'utf-8');
        writeFileSync(pathPaginaLoadFilmes, rePaginaLoadFilmes, 'utf-8');
        writeFileSync(pathPaginaLoadJogos, rePaginaLoadJogos, 'utf-8');
        writeFileSync(pathPaginaLogin, rePaginaLogin, 'utf-8');
        writeFileSync(pathPaginaRedirecionamento, rePaginaRedirecionamento, 'utf-8');

        writeFileSync(pathJsCadastro, reJsCadastro, 'utf-8');
        writeFileSync(pathJsHome, reJsHome, 'utf-8');
        writeFileSync(pathJsLoadFilmes, reJsLoadFilmes, 'utf-8');
        writeFileSync(pathJsLoadJogos, reJsLoadJogos, 'utf-8');
        writeFileSync(pathJsLogin, reJsLogin, 'utf-8');
        writeFileSync(pathJsRedirecionamento, reJsRedirecionamento, 'utf-8');
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
