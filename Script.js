// ===== MENU SUAVE =====

document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener('click', function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        target.scrollIntoView({
            behavior: 'smooth'
        });

    });

});


// ===== HEADER AO ROLAR =====

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 100) {

        header.style.background = "#08101d";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.2)";

    } else {

        header.style.background = "rgba(15,23,42,.95)";
        header.style.boxShadow = "none";

    }

});


// ===== FAQ EXPANSÍVEL =====

const perguntas = document.querySelectorAll(".faq-item");

perguntas.forEach(item => {

    item.addEventListener("click", () => {

        item.classList.toggle("ativo");

    });

});


// ===== CONTADOR ANIMADO =====

const numeros = document.querySelectorAll(".numero h2");

const iniciarContador = () => {

    numeros.forEach(numero => {

        const valorFinal = parseInt(numero.innerText);

        let valorAtual = 0;

        const incremento = valorFinal / 100;

        const intervalo = setInterval(() => {

            valorAtual += incremento;

            if (valorAtual >= valorFinal) {

                numero.innerText = valorFinal + "+";

                clearInterval(intervalo);

            } else {

                numero.innerText = Math.floor(valorAtual);

            }

        }, 20);

    });

};

iniciarContador();


// ===== BOTÃO VOLTAR AO TOPO =====

const voltarTopo = document.createElement("div");

voltarTopo.className = "topo";

voltarTopo.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';

document.body.appendChild(voltarTopo);


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        voltarTopo.style.opacity = "1";

        voltarTopo.style.pointerEvents = "all";

    } else {

        voltarTopo.style.opacity = "0";

        voltarTopo.style.pointerEvents = "none";

    }

});


voltarTopo.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


// ===== EFEITO HOVER NOS CARDS =====

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px)";

        card.style.transition = ".4s";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px)";

    });

});


// ===== BOTÃO WHATSAPP =====

const whatsapp = document.querySelector(".whatsapp");

whatsapp.href =
"https://wa.me/5584999999999?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20os%20imóveis.";

whatsapp.target = "_blank";