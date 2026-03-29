document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("imcForm");
    const resultado = document.getElementById("resultado");
    const limparBtn = document.getElementById("limpar");
    const pesoInput = document.getElementById("peso");
    const alturaInput = document.getElementById("altura");
    const ctx = document.getElementById("grafico").getContext("2d");

    let historico = JSON.parse(localStorage.getItem("historicoIMC")) || [];
    let chart;

    const salvar = () => {
        localStorage.setItem("historicoIMC", JSON.stringify(historico));
    };

    const calcularIMC = (peso, altura) => {
        const imc = peso / (altura ** 2);

        const classificacao =
            imc < 18.5 ? "Abaixo do peso" :
            imc <= 24.9 ? "Peso normal" :
            imc <= 29.9 ? "Sobrepeso" :
            imc <= 39.9 ? "Obesidade" :
            "Obesidade grave";

        return { imc, classificacao };
    };

    const atualizarGrafico = () => {
        const labels = historico.map((_, i) => `#${i + 1}`);
        const data = historico.map(e => e.imc);

        if (chart) {
            chart.data.labels = labels;
            chart.data.datasets[0].data = data;
            chart.update();
            return;
        }

        chart = new Chart(ctx, {
            type: "line",
            data: {
                labels,
                datasets: [{
                    label: "Histórico de IMC",
                    data,
                    borderWidth: 2,
                    tension: 0.3
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: true
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false
                    }
                }
            }
        });
    };

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const peso = Number(pesoInput.value);
        const altura = Number(alturaInput.value);

        if (peso <= 0 || altura <= 0) {
            resultado.textContent = "Valores inválidos.";
            return;
        }

        const { imc, classificacao } = calcularIMC(peso, altura);

        resultado.textContent =
            `IMC: ${imc.toLocaleString("pt-BR", { maximumFractionDigits: 2 })} - ${classificacao}`;

        historico.push({ peso, altura, imc });
        salvar();
        atualizarGrafico();

        form.reset();
    });

    limparBtn.addEventListener("click", () => {
        historico = [];
        salvar();
        atualizarGrafico();
        resultado.textContent = "Histórico limpo.";
    });

    atualizarGrafico();
});
