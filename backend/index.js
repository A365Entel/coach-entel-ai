import express from 'express';
import multer from 'multer';
import cors from 'cors';
import fs from 'fs';
import { transcribe } from './transcriber.js';
import { analizarTranscripcion } from './coachPrompt.js';
import 'dotenv/config';

const app = express();
const upload = multer({ dest: 'uploads/' });
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (_, res) => {
  res.send('Coach Entel AI - API funcionando');
});

app.post('/analyze', upload.single('audio'), async (req, res) => {
  try {
    const audioPath = req.file.path;
    const texto = await transcribe(audioPath);
    const analisis = await analizarTranscripcion(texto);
    fs.unlinkSync(audioPath);
    res.json({ transcripcion: texto, analisis });
  } catch (err) {
    console.error('Error al procesar:', err);
    res.status(500).json({ error: 'Error al procesar el audio' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
