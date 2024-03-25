import { NextResponse } from "next/server";
import { logOutUser } from "../../../../services/auth/auth";

export async function GET(req) {
    try {
        const data = await logOutUser();
        const response = NextResponse.json(data);
        response.cookies.delete('accessToken');
        return response;
    } catch (error) {
        // Aquí puedes manejar el error como consideres adecuado
        // Por ejemplo, devolver un código de estado HTTP específico y un mensaje de error
        return new NextResponse(JSON.stringify({ message: "Error al cerrar sesión" }), {
            status: 500, // Código de estado HTTP para "Error interno del servidor"
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
};
