import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {

    const resend = new Resend(process.env.RESEND_API_KEY);
    
    try {
        const dataReq =  await req.json();
        const { data } = await resend.emails.send({
            from: 'Juan Barrera <juan-potfolio-info@resend.dev>',
            to: [dataReq.email],
            subject: 'Gracias por contactar con nosotros',
            react: `Gracias por contactar con nosotros estimado ${dataReq.name}, en breve nos pondremos en contacto contigo.`,
          });
        return NextResponse.json(data, { status: 201 });
    } catch (error) {
        console.error("[EMAIL]", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}