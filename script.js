if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js")
    .then(() => console.log("Service Worker registrado ✅"))
    .catch(error => console.log("Error en SW:", error));
}
const datos = {
  hipovolemico: {
    titulo: "💧 Shock Hipovolémico",
    definicion: "Disminución del volumen intravascular por hemorragia o pérdida de líquidos.",
    signos: [
      "PA < 90 mmHg (normal: 100–120 mmHg)",
      "FC > 100 lpm (normal: 60–100 lpm)",
      "Diuresis < 0.5 ml/kg/h (normal: ≥ 0.5)",
      "Llenado capilar > 2 seg (normal: ≤ 2 seg)"
    ],
    medicamentos: ["NaCl 0.9%", "Ringer lactato"],
    dosis: "Cristaloides IV: 20 ml/kg en bolo rápido",
    caso: "Post-quirúrgico con sangrado y PA de 82 mmHg"
  },
  septico: {
    titulo: "🧬 Shock Séptico",
    definicion: "Disfunción orgánica causada por respuesta inflamatoria a infección grave.",
    signos: [
      "Fiebre > 38.3°C o < 36°C (normal: 36.5–37.5°C)",
      "Leucocitos > 12k o < 4k/mm³ (normal: 4k–10k)",
      "Lactato > 2 mmol/L (normal: 0.5–2)",
      "PA < 90 mmHg sostenida"
    ],
    medicamentos: ["Meropenem", "Vancomicina", "Noradrenalina"],
    dosis: "Meropenem 1g IV/8h, Noradrenalina 0.05–0.5 µg/kg/min",
    caso: "Anciano con fiebre, confusión y lactato de 3.6 mmol/L"
  },
  anafilactico: {
    titulo: "🤧 Shock Anafiláctico",
    definicion: "Reacción alérgica grave con vasodilatación y edema por histamina.",
    signos: [
      "PA baja (normal: 100–120 mmHg)",
      "Broncoespasmo, urticaria",
      "SatO₂ < 90% (normal: ≥ 95%)"
    ],
    medicamentos: ["Adrenalina IM", "Hidrocortisona", "Difenhidramina"],
    dosis: "Adrenalina 0.3–0.5 mg IM cada 5–15 min",
    caso: "Joven con alergia alimentaria, disnea súbita y urticaria"
  },
  neurogenico: {
    titulo: "🧠 Shock Neurogénico",
    definicion: "Falla del tono simpático tras lesión medular → vasodilatación y bradicardia.",
    signos: [
      "FC < 60 lpm (normal: 60–100)",
      "PA baja sin taquicardia compensadora",
      "Piel caliente y seca"
    ],
    medicamentos: ["Fenilefrina", "Atropina"],
    dosis: "Atropina 0.5 mg IV cada 3–5 min (máx. 3 mg)",
    caso: "Trauma cervical con bradicardia y PA de 75 mmHg"
  },
  cardiogenico: {
    titulo: "❤️ Shock Cardiogénico",
    definicion: "Falla del corazón para bombear sangre adecuadamente.",
    signos: [
      "PA < 90 mmHg (normal: 100–120 mmHg)",
      "Estertores pulmonares",
      "Ingurgitación yugular",
      "SatO₂ < 90% (normal: ≥ 95%)"
    ],
    medicamentos: ["Dobutamina", "Noradrenalina"],
    dosis: "Dobutamina 2–20 µg/kg/min IV",
    caso: "Paciente post IAM con edema pulmonar y hipotensión"
  },
  obstructivo: {
    titulo: "💥 Shock Obstructivo",
    definicion: "Obstrucción mecánica al flujo sanguíneo que impide perfusión adecuada.",
    signos: [
      "PA baja + yugular distendida",
      "Desviación traqueal",
      "Ruidos cardíacos apagados"
    ],
    medicamentos: ["Alteplasa", "Maniobras quirúrgicas"],
    dosis: "Alteplasa 100 mg IV en embolia pulmonar masiva",
    caso: "Trauma torácico con hipotensión y signos de taponamiento"
  }
};

function mostrar(tipo) {
  const info = datos[tipo];
  const contenido = document.getElementById("contenido");
  contenido.innerHTML = `
    <h2>${info.titulo}</h2>
    <p><strong>Definición:</strong> ${info.definicion}</p>
    <p><strong>Signos clínicos:</strong></p>
    <ul>${info.signos.map(s => `<li>${s}</li>`).join("")}</ul>
    <p><strong>Medicamentos:</strong> ${info.medicamentos.join(", ")}</p>
    <p><strong>Dosis:</strong> ${info.dosis}</p>
    <p><strong>Aplicación clínica:</strong> ${info.caso}</p>
  `;
}
