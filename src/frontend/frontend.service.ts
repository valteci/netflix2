import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';
import { join } from 'path';

@Injectable({})
export class FrontendService {
    constructor() {

    }

    getPage(page: string) {
        return './front-end/src/' + page;
    }

    async signin() {
        const page = this.getPage('login.html');
        const pagina = readFileSync(page, 'utf-8');
        return pagina;
    }

    async signup() {
        const page = this.getPage('cadastro.html');
        const pagina = readFileSync(page, 'utf-8');
        return pagina;
    }

    async home() {
        const page = this.getPage('home.html');
        const pagina = readFileSync(page, 'utf-8');
        return pagina;
    }

    async conteudo() {
        const page = this.getPage('conteudo.html');
        const pagina = readFileSync(page, 'utf-8');
        return pagina;
    }

    async load() {
        const page = this.getPage('load.html');
        const pagina = readFileSync(page, 'utf-8');
        return pagina;
    }
}
