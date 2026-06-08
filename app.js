document.addEventListener("DOMContentLoaded", () => {
    
    // --- LÓGICA DE LOGIN ---
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            // Simulación de autenticación
            window.location.href = "dashboard.html";
        });
    }

    // --- LÓGICA DE DASHBOARD / AGENDA ---
    const agendaGrid = document.getElementById("agendaGrid");
    if (agendaGrid) {
        // Datos simulados de citas
        const horarios = [
            { id: 1, hora: "08:00 AM", medico: "Dr. Pérez", disponible: true },
            { id: 2, hora: "09:30 AM", medico: "Dra. Gómez", disponible: true },
            { id: 3, hora: "11:00 AM", medico: "Dr. Pérez", disponible: false },
            { id: 4, hora: "02:00 PM", medico: "Dra. Ruiz", disponible: true }
        ];

        // Renderizar horarios
        horarios.forEach(slot => {
            if(slot.disponible){
                const card = document.createElement("div");
                card.className = "slot-card";
                card.innerHTML = `
                    <h3>${slot.hora}</h3>
                    <p>${slot.medico}</p>
                    <button class="btn btn-primary" onclick="agendarCita(${slot.id})">Reservar</button>
                `;
                agendaGrid.appendChild(card);
            }
        });

        // Cerrar sesión
        document.getElementById("logoutBtn").addEventListener("click", () => {
            window.location.href = "index.html";
        });
    }
});

// Función global para agendar
function agendarCita(id) {
    // Ocultar la cuadrícula y mostrar mensaje de éxito
    document.getElementById("agendaGrid").style.display = "none";
    document.getElementById("confirmationMessage").classList.remove("hidden");
    console.log(`Cita con ID ${id} confirmada. Datos guardados en sistema.`);
}
