async function llamarIA(pregunta) {
  const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": "Bearer TU_API_KEY",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "llama-3.3-70b-versatile",
      messages: [{role: "user", content: pregunta}]
    })
  });
  const data = await res.json();
  return data.choices[0].message.content;
}