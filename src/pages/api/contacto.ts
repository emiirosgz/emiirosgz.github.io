import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { nombre, correo, telefono, proyecto, servicio, paquete, mensaje } = body;

    if (!nombre || !correo || !telefono) {
      return new Response(
        JSON.stringify({ error: 'Campos obligatorios faltantes' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const apiKey = import.meta.env.RESEND_API_KEY;

    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; color: #333; line-height: 1.6; border: 1px solid #e0e0e0; border-radius: 8px; padding: 24px; background-color: #ffffff;">
        <h2 style="color: #111; border-bottom: 2px solid #eee; padding-bottom: 10px; margin-top: 0;">📩 Nuevo Mensaje desde el Portafolio</h2>
        
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; width: 140px;">Nombre:</td>
            <td style="padding: 8px 0;">${nombre}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Correo:</td>
            <td style="padding: 8px 0;"><a href="mailto:${correo}" style="color: #2563eb;">${correo}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Teléfono:</td>
            <td style="padding: 8px 0;">${telefono}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Negocio / Proyecto:</td>
            <td style="padding: 8px 0;">${proyecto || 'No especificado'}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Servicio:</td>
            <td style="padding: 8px 0;">${servicio || 'No especificado'}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Paquete / Opción:</td>
            <td style="padding: 8px 0;">${paquete || 'No especificado'}</td>
          </tr>
        </table>

        <div style="background-color: #f9fafb; border-left: 4px solid #2563eb; padding: 16px; border-radius: 4px; margin-top: 10px;">
          <h4 style="margin: 0 0 8px 0; color: #1e293b;">Detalles / Mensaje:</h4>
          <p style="margin: 0; white-space: pre-wrap; color: #334155;">${mensaje || 'Sin detalles adicionales'}</p>
        </div>

        <hr style="margin-top: 24px; border: none; border-top: 1px solid #eee;" />
        <p style="font-size: 12px; color: #6b7280; margin-bottom: 0;">Este correo se envió automáticamente desde el formulario de contacto de tu sitio web emiirosgz.github.io.</p>
      </div>
    `;

    const resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: 'Formulario Web <onboarding@resend.dev>',
        to: ['emiirosgz@gmail.com'],
        reply_to: correo,
        subject: `📩 Cotización / Contacto: ${nombre}`,
        html: emailContent,
      }),
    });

    const resData = await resendRes.json();

    if (!resendRes.ok) {
      console.error('Error enviando correo con Resend:', resData);
      return new Response(
        JSON.stringify({ error: resData.message || 'Error al enviar correo con Resend' }),
        { status: resendRes.status, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, id: resData.id }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error: any) {
    console.error('Error en endpoint de contacto:', error);
    return new Response(
      JSON.stringify({ error: error.message || 'Error interno del servidor' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
