import { NextResponse } from "next/server";
import { jwtVerify } from "jose";
import { logOutUser } from "../services/auth/auth";

const secret = process.env.NEXT_PUBLIC_SECRET;

async function verify(token, secret) {
    const { payload } = await jwtVerify(token, new TextEncoder().encode(secret));
    return payload;
}

export default async function middleware(request) {
    const url = request.url;
    const nextUrl = request.nextUrl.clone();
    const checkAccess = async () => {
        const jwt = request.cookies.get('accessToken')?.value;
        if (jwt === undefined) {
            nextUrl.pathname = '/';
            return NextResponse.rewrite(nextUrl);
        }

        try {
            if (!secret || secret.length === 0) {
                throw new Error("La clave secreta no está definida o es de longitud cero.");
            }
            const verification = await verify(jwt, secret);
            if (verification) {
                return NextResponse.next();
            } else {
                throw new Error("ACCESO DENEGADO");
            }
        } catch (e) {
            switch (e.code) {
                case 'ERR_JWT_EXPIRED':
                    logOutUser();
                    nextUrl.pathname = '/';
                    return NextResponse.rewrite(nextUrl);
                default:
                    nextUrl.pathname = '/unauthenticated';
                    return NextResponse.rewrite(nextUrl);
            }
        }
    };

    // Agregando logs para cada ruta
    if (url.includes("/dashboard")) {
        return checkAccess();
    }
    return NextResponse.next();
}
