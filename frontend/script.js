async function analyze() {
  const input = document.getElementById("input").value;
  const output = document.getElementById("output");

  output.textContent = "Analyzing reasoning...";

  const response = await fetch("http://127.0.0.1:8000/analyze", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: input })
  });

  const data = await response.json();
  output.textContent = JSON.stringify(data, null, 2);
}
