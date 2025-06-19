const API_URL = 'https://coach-entel-ai.onrender.com/analyze';

async function analizarAudio() {
  const fileInput = document.getElementById('audioFile');
  const file = fileInput.files[0];
  if (!file) {
    alert('Selecciona un archivo de audio');
    return;
  }

  const formData = new FormData();
  formData.append('audio', file);

  try {
    const res = await fetch(API_URL, {
      method: 'POST',
      body: formData
    });

    const data = await res.json();
    document.getElementById('transcripcion').textContent = data.transcripcion || 'Sin transcripción';
    document.getElementById('analisis').textContent = data.analisis || 'Sin análisis';

  } catch (e) {
    console.error(e);
    alert('Error al enviar el audio');
  }
}

