import { OpenAI } from 'openai';
import 'dotenv/config';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const PROMPT_BASE = `
Eres el Coach Entel Fibra Óptica - Maestro del Ciclo Outbound.
Analiza la siguiente transcripción de una llamada de venta telefónica Outbound para servicios de Fibra Óptica en Chile. Evalúa la efectividad del agente en cada etapa: apertura, sondeo, generación de necesidad, manejo de objeciones, cierre y actitud comercial. Proporciona retroalimentación clara, útil, profesional y adaptada al comportamiento del consumidor chileno.

Transcripción:
`;

export async function analizarTranscripcion(texto) {
  try {
    const chatCompletion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: 'Eres un coach experto en ventas de Entel Chile, especializado en llamadas outbound de fibra óptica.' },
        { role: 'user', content: `${PROMPT_BASE}${texto}` }
      ],
    });
    return chatCompletion.choices[0].message.content;
  } catch (error) {
    console.error('Error al generar análisis:', error);
    throw error;
  }
}
