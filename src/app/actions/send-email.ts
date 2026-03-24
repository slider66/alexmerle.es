"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmailAction(data: {
  name: string;
  business: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  message: string;
}) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.warn("Falta RESEND_API_KEY en las variables de entorno");
      return { success: false, error: "Servicio de correo no configurado (falta API Key)." };
    }

    const { name, business, email, phone, service, budget, message } = data;

    const bodyLines = [
      `Nombre: ${name.trim()}`,
      `Negocio: ${business.trim()}`,
      `Email: ${email.trim()}`,
      `Teléfono: ${phone.trim()}`,
      `Necesita: ${service}`,
      `Presupuesto: ${budget}`,
      ``,
      `Mensaje:`,
      message.trim(),
    ].join("\n");

    const { error } = await resend.emails.send({
      from: "Web Lead <onboarding@resend.dev>", // Cambiar esto por dominio verificado en Resend ej. hola@alexmerle.es
      to: ["alex@merle.es"],
      subject: `Nuevo lead desde la web: ${business.trim()}`,
      text: bodyLines,
    });

    if (error) {
      console.error("Resend Error:", error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (error: unknown) {
    console.error("Action Error:", error);
    return { success: false, error: "Error interno del servidor al enviar el mensaje." };
  }
}
