import fs from 'fs';
import { OpenAI } from 'openai';
import 'dotenv/config';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function transcribe(audioPath) {
  try {
    const response = await openai.audio.transcriptions.create({
      file: fs.createReadStream(audioPath),
      model: 'whisper-1',
      language: 'es',
    });
    return response.text;
  } catch (error) {
    console.error('Error al transcribir:', error);
    throw error;
  }
}
