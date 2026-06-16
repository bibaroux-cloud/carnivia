function handleLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const terminal = document.getElementById('status-terminal');
    const button = document.querySelector('.btn-access');
    
    button.disabled = true;
    button.innerText = "CONNESSIONE IN CORSO...";
    
    terminal.innerHTML = `<p class="blink">> CONNESSIONE AI SERVER DI CARNIVIA...</p>`;
    
    setTimeout(() => {
        terminal.innerHTML += `<p>> IP UTENTE RILEVATO: OMNI_NODE_${Math.floor(Math.random() * 900 + 100)}</p>`;
    }, 1000);

    setTimeout(() => {
        terminal.innerHTML += `<p>> DECRIPTAZIONE CHIAVE IN CORSO...</p>`;
    }, 2200);

    setTimeout(() => {
        terminal.innerHTML = `
            <p style="color: #ff3333;">> ERRORE DI AUTENTICAZIONE</p>
            <p>> Benvenuto, ${username}. Accesso negato dal Webmaster Daniele Barbo.</p>
            <p>> Server blindati. Riprovare con credenziali valide.</p>
        `;
        button.disabled = false;
        button.innerText = "RIENTRA NEL SISTEMA";
    }, 4000);
}