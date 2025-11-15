// (Existing code remains above)

// --- Registration Page Logic ---
// Show/hide Registration section like others
const registerForm = document.getElementById('registerForm');
const registerMsg = document.getElementById('registerMsg');

if (registerForm) {
  registerForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // Simulate registration (no backend)
    const name = document.getElementById('regName').value.trim();
    const email = document.getElementById('regEmail').value.trim();
    const password = document.getElementById('regPassword').value;
    if (!name || !email || !password) {
      registerMsg.style.color = "#e53e3e";
      registerMsg.textContent = "Please fill in all fields.";
      return;
    }
    // Simulate success
    registerMsg.style.color = "#38a169";
    registerMsg.textContent = `Registration successful! Welcome, ${name}.`;
    registerForm.reset();
    setTimeout(() => { registerMsg.textContent = ""; }, 3000);
  });
}