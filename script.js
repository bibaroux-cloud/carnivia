unction handleLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value; // Legge la password inserita
    const terminal = document.getElementById('status-terminal');
    const button = document.querySelector('.btn-access');
    
    // LA TUA PASSWORD SEGRETA
    const passwordCorretta = "VENEZIA2026"; 

    button.disabled = true;
    button.innerText = "CONNESSIONE IN CORSO...";
    terminal.innerHTML = `<p class="blink">> CONNESSIONE AI SERVER DI CARNIVIA...</p>`;
    
    setTimeout(() => {
        terminal.innerHTML += `<p>> ANALISI CHIAVE DI CIFRATURA...</p>`;
    }, 1200);

    setTimeout(() => {
        // Controlla se la password è corretta
        if (password === passwordCorretta) {
            terminal.innerHTML = `
                <p style="color: #00ff66;">> DECRIPTAZIONE COMPLETATA CON SUCCESSO!</p>
                <p>> Benvenuto nel network, ${username}.</p>
                <p>> Caricamento database segreto in corso...</p>
            `;
            // Qui in futuro possiamo reindirizzare l'utente a una nuova pagina segreta
        } else {
            terminal.innerHTML = `
                <p style="color: #ff3333;">> CHIAVE DI CIFRATURA ERRATA</p>
                <p>> Tentativo registrato. Accesso negato.</p>
            `;
            button.disabled = false;
            button.innerText = "RIENTRA NEL SISTEMA";
        }
    }, 3000);
}
