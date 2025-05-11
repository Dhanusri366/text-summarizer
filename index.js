import { pipeline } from "https://cdn.jsdelivr.net/npm/@huggingface/transformers@3.5.1";
    let pipe = null;
    (async () => {
      pipe = await pipeline("summarization");
      console.log("Model loaded");
    })();

    document
      .getElementById("summarizeBtn")
      .addEventListener("click", async () => {
        if (!pipe) return alert("Model is still loading...");

        const input = document.getElementById("inputText").value.trim();
        if (!input) return alert("Please enter some text.");

        const result = await pipe(input, { max_length: 40, min_length: 20 });
        document.getElementById("summaryText").textContent =
          result[0].summary_text;
      });