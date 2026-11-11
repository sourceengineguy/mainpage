document.addEventListener("DOMContentLoaded", () => {
    function applyButtonStyle(btn) {
        btn.style.display = "inline-block";
        btn.style.backgroundColor = "#27272a";
        btn.style.color = "#ffffff";
        btn.style.padding = "0.75rem 1.5rem";
        btn.style.borderRadius = "6px";
        btn.style.border = "1px solid #3f3f46";
        btn.style.fontFamily = '"Liberation Sans", -apple-system, sans-serif';
        btn.style.fontWeight = "700";
        btn.style.textDecoration = "none";
        btn.style.transition = "background-color 0.15s ease, border-color 0.15s ease, transform 0.15s ease";

        btn.addEventListener("mouseenter", () => {
            btn.style.backgroundColor = "#3f3f46";
            btn.style.borderColor = "#52525b";
            btn.style.transform = "scale(1.05)";
        });

        btn.addEventListener("mouseleave", () => {
            btn.style.backgroundColor = "#27272a";
            btn.style.borderColor = "#3f3f46";
            btn.style.transform = "scale(1)";
        });
    }

    const path = window.location.pathname;
    const isUzicutout = path.includes("uzicutout.html");
    const isHomePage = (path === "/" || path.endsWith("index.html") || path.endsWith("/")) && !isUzicutout;

    if (isHomePage) {
        const container = document.createElement("div");
        container.className = "container";
        container.style.textAlign = "center";

        const ytButton = document.createElement("a");
        ytButton.href = "https://www.youtube.com/@SourceEngineGuy";
        ytButton.target = "_blank";
        ytButton.rel = "noopener noreferrer";
        ytButton.innerText = "Check out my YT Channel (@SourceEngineGuy)";

        applyButtonStyle(ytButton);
        container.appendChild(ytButton);
        document.body.appendChild(container);
    }

    const htmlButtons = document.querySelectorAll(".action-btn");
    htmlButtons.forEach(btn => {
        applyButtonStyle(btn);
    });
});