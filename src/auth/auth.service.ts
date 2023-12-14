import { ForbiddenException, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthDto } from "./dto";
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";

@Injectable({})
export class AuthService {

    constructor(
        private prisma: PrismaService, 
        private jwt: JwtService,
        private config: ConfigService,
    ) {

        
    }
    
    async signin(dto: AuthDto) {
        
        const user = 
            await this.prisma.login.findUnique({
                where: {
                    email: dto.email,
                },
            });
        
        if (!user) 
            throw new ForbiddenException(
                'Estudante nao cadastrado'
            );

        const pwMatches = 
            await argon.verify(
                user.hashSenha, dto.password
            );

        if (!pwMatches)
            throw new ForbiddenException(
                'Senha incorreta!'
            );
        
        return this.signToken(user.email);
    }

    async signup(dto: AuthDto) {
        const hash = await argon.hash(dto.password);
        
        try {
            
            const user = await this.prisma.login.create({
                data: {
                    email: dto.email,
                    hashSenha: hash,                     
                },
                select: {
                    email: true
                }
            })
            
            return this.signToken(user.email);
            
        } catch(error) {
            if (error instanceof PrismaClientKnownRequestError)
                if (error.code === 'P2002')
                    throw new ForbiddenException(
                        'um dos dados ja existem no banco de dados!'
                    );

            throw error;
        }
    }

    async signToken(
        email: string,
    ): Promise<{access_token: string}> {

        const payload = {
            sub: email,
        }

        const token = await this.jwt.signAsync(
            payload,
            {
                expiresIn: '15m',
                secret: this.config.get('JWT_SECRET'),
            },
        );

        return {
            access_token: token
        }

    }


}