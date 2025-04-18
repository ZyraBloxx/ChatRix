function sendMessage() {
  const input = document.getElementById("messageInput");
  if (!input.value.trim()) return;
  const msgBox = document.getElementById("messages");
  const msg = document.createElement("div");
  msg.className = "bg-gray-800 p-2 rounded shadow";
  msg.textContent = input.value;
  msgBox.appendChild(msg);
  input.value = "";
}