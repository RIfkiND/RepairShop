
//   import { Resend } from 'resend';
//   import { AppleReceiptEmail } from '../../../../emails/receipt';
//   import { db } from '../../../../config/db';
//   const resend = new Resend(process.env.RESEND_API_KEY);

//   export async function POST(request:Request) {
//     try {
//       const { id } = await request.json() as{id:string};
//     if (!id) {
//       return new Response(JSON.stringify({ error: "ID is required." }), { status: 400 });
//     }

//     const customer:any = await db.repair_Request.findUnique({
//       where:{id},
//       select:{email:true}
//     })
//     if(!customer){
//       new Response(JSON.stringify({ error: "Not Found" }), { status: 400 });
//     }
//       const { data, error } = await resend.emails.send({
//         from: 'Repair <Repair@resend.dev>',
//         to: [customer.email],
//         subject: 'Repair Receipt',
//         react:  ReceiptEmail({ firstName: 'John' }),
//       });

//       if (error) {
//         return Response.json({ error }, { status: 500 });
//       }

//       return Response.json({data},{status:200});
//     } catch (error) {
//       return Response.json({ error }, { status: 500 });
//     }
// }
