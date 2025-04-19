document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.getElementById("boot").classList.add("hidden");
    document.getElementById("app").classList.remove("hidden");
  }, 5000); // 5 seconds delay
});

function sendMessage() {
  const input = document.getElementById("messageInput");
  const msg = input.value.trim();
  if (msg) {
    const msgDiv = document.createElement("div");
    msgDiv.textContent = "You: " + msg;
    document.getElementById("messages").appendChild(msgDiv);
    input.value = "";
  }
}
