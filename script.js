
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Cerrar menú" : "Abrir menú"
    );

    menuToggle.textContent = isOpen ? "×" : "☰";
});

nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        nav.classList.remove("open");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menú");
        menuToggle.textContent = "☰";
    });
});

document.getElementById("year").textContent =
    new Date().getFullYear();

const arrival = document.getElementById("arrival");
const departure = document.getElementById("departure");

const today = new Date();

const localToday = new Date(
    today.getTime() - today.getTimezoneOffset() * 60000
)
    .toISOString()
    .slice(0, 10);

arrival.min = localToday;
departure.min = localToday;

arrival.addEventListener("change", () => {
    departure.min = arrival.value || localToday;

    if (departure.value && departure.value <= arrival.value) {
        departure.value = "";
    }
});

document
    .getElementById("booking-form")
    .addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document
            .getElementById("guest-name")
            .value.trim();

        const start = arrival.value;
        const end = departure.value;

        const message = document.getElementById("form-message");

        if (end <= start) {
            message.textContent =
                "La fecha de salida debe ser posterior a la fecha de llegada.";

            departure.focus();
            return;
        }

        message.textContent =
            `¡Gracias, ${name}! Tu solicitud de ${start} a ${end} está lista. ` +
            "Para recibirla, conecta este formulario con WhatsApp " +
            "o un servicio de reservas.";
    });
