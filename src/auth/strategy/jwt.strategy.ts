import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { PrismaService } from "src/prisma/prisma.service";
import { UnauthorizedException } from '@nestjs/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(
    Strategy,
    'jwt',
) {

    constructor(config: ConfigService, private prisma: PrismaService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: config.get('JWT_SECRET'),
        });
    }

    async validate(payload: any) {
        
        const dadosUsuario = await this.prisma.user.findUnique({
            where: {
                email: payload.sub
            },
            select: {
                email: true
            }
        })
        

        if (dadosUsuario === null) {
            throw new UnauthorizedException('Acesso não autorizado');
        }
        
        console.log(dadosUsuario);
        return dadosUsuario;
    }

}