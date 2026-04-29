(function () {
  const DEMO_ENDPOINT = "https://api.sinyx.me/v1/demo";

  const state = {
    turnstileToken: "",
    isSubmitting: false,
  };

  const urlInput = document.getElementById("demo-url");
  const formatSelect = document.getElementById("demo-format");
  const submitButton = document.getElementById("demo-btn");
  const statusEl = document.getElementById("demo-status");
  const outputEl = document.getElementById("demo-output");

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function setStatus(message, type) {
    statusEl.textContent = message;
    statusEl.className = type ? `demo-status ${type}` : "demo-status";
  }

  function setOutput(content) {
    outputEl.innerHTML = escapeHtml(content);
  }

  function updateSubmitState() {
    const hasUrl = urlInput.value.trim().length > 0;
    submitButton.disabled = state.isSubmitting || !state.turnstileToken || !hasUrl;
  }

  function renderChunks(chunks) {
    if (!Array.isArray(chunks) || chunks.length === 0) {
      return "No chunks returned.";
    }

    return chunks
      .slice(0, 8)
      .map((chunk) => {
        const heading = chunk.headingPath || "Root";
        const content = chunk.content || "";
        return [
          `${chunk.chunkIndex}. ${heading}`,
          `priority: ${chunk.priority} | chars: ${chunk.charCount}`,
          content,
        ].join("\n");
      })
      .join("\n\n---\n\n");
  }

  function formatResult(data, format) {
    if (!data || data.success === false) {
      return data?.error || "The extraction failed.";
    }

    if (format === "chunks") return renderChunks(data.chunks);
    if (format === "markdown") return data.markdown || "";
    if (format === "text") return data.text || "";
    if (format === "html") return data.html || "";

    return JSON.stringify(data, null, 2);
  }

  async function submitDemo() {
    const url = urlInput.value.trim();
    const format = formatSelect.value;

    if (!url) {
      setStatus("Enter a URL first.", "error");
      updateSubmitState();
      return;
    }

    if (!state.turnstileToken) {
      setStatus("Complete verification first.", "error");
      updateSubmitState();
      return;
    }

    state.isSubmitting = true;
    updateSubmitState();
    setStatus("Extracting...", "");
    setOutput("Working...");

    try {
      const response = await fetch(DEMO_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          url,
          format,
          turnstileToken: state.turnstileToken,
        }),
      });

      const data = await response.json().catch(() => ({
        success: false,
        error: "Unexpected response from the demo endpoint.",
      }));

      if (!response.ok || data.success === false) {
        setStatus(data.error || `Request failed with HTTP ${response.status}.`, "error");
        setOutput(data.details || data.error || JSON.stringify(data, null, 2));
        return;
      }

      setStatus("Extraction complete.", "success");
      setOutput(formatResult(data, format));
    } catch (error) {
      setStatus("Could not reach the demo endpoint.", "error");
      setOutput(error.message);
    } finally {
      state.isSubmitting = false;
      state.turnstileToken = "";
      if (window.turnstile) window.turnstile.reset();
      updateSubmitState();
    }
  }

  window.sinyxTurnstileSuccess = function (token) {
    state.turnstileToken = token;
    setStatus("Verification complete.", "success");
    updateSubmitState();
  };

  window.sinyxTurnstileExpired = function () {
    state.turnstileToken = "";
    setStatus("Verification expired. Please verify again.", "error");
    updateSubmitState();
  };

  window.sinyxTurnstileError = function () {
    state.turnstileToken = "";
    setStatus("Verification could not load. Refresh and try again.", "error");
    updateSubmitState();
  };

  submitButton.addEventListener("click", submitDemo);
  urlInput.addEventListener("input", updateSubmitState);
  urlInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && !submitButton.disabled) {
      event.preventDefault();
      submitDemo();
    }
  });

  updateSubmitState();
})();
