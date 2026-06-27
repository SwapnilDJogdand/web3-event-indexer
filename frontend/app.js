const graphqlQuery = `
  query ListMessages {
    messagess(orderBy: "timestamp", orderDirection: "desc", limit: 20) {
      items {
        id
        author
        content
        timestamp
        exists
      }
    }
  }
`;

const elements = {
  terminalOutput: document.querySelector("#terminalOutput"),
  statusText: document.querySelector("#statusText"),
  lastUpdated: document.querySelector("#lastUpdated"),
  refreshButton: document.querySelector("#refreshButton"),
};

const formatTimestamp = (value) => {
  if (!value) return "--";
  const ms = Number(value) * 1000;
  return new Date(ms).toLocaleTimeString();
};

const renderTerminalLine = (message) => {
  const icon = message.exists ? "🟢" : "🔴";
  const event = message.exists ? "Message Created/Active" : "Message Deleted";
  const time = formatTimestamp(message.timestamp);
  const author = message.author || "anonymous";

  return `
    <p class="log-event">[${time}] ${icon} ${event} | ID=${message.id} | author=${author} | content="${message.content || "(empty)"}"</p>
  `;
};

const appendTerminalLogs = (messages) => {
  if (!elements.terminalOutput) return;

  const html = messages.length
    ? messages.map((message) => renderTerminalLine(message)).join("")
    : '<p class="log-event">No live events available yet.</p>';

  elements.terminalOutput.innerHTML = html;
};

const setStatus = (text) => {
  if (!elements.statusText) return;
  elements.statusText.textContent = text;
};

const setLastUpdated = () => {
  if (!elements.lastUpdated) return;
  elements.lastUpdated.textContent = `Last updated: ${new Date().toLocaleTimeString()}`;
};

const fetchMessages = async () => {
  const response = await fetch("/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query: graphqlQuery }),
  });

  if (!response.ok) {
    throw new Error(`GraphQL request failed with ${response.status}`);
  }

  const data = await response.json();
  return data.data?.messagess?.items || [];
};

const refresh = async () => {
  elements.refreshButton.disabled = true;
  setStatus("Fetching live data...");

  try {
    const messages = await fetchMessages();
    appendTerminalLogs(messages);
    setStatus(`Live: ${messages.length} items`);
    setLastUpdated();
  } catch (error) {
    elements.terminalOutput.innerHTML = '<p class="log-event">Error fetching live stream.</p>';
    setStatus("Error fetching live stream");
    console.error(error);
  } finally {
    elements.refreshButton.disabled = false;
  }
};

const initialize = () => {
  if (!elements.refreshButton) return;
  elements.refreshButton.addEventListener("click", refresh);
  refresh();
  setInterval(refresh, 5000);
};

initialize();
