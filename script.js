document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("imcForm");
    const resultadoDiv = document.getElementById("resultado");
    const ctx = document.getElementById("grafico").getContext("2d");
    
    let historicoIMC = JSON.parse(localStorage.getItem("historicoIMC")) || [];

    const atualizarGrafico = () => {
        const labels = historicoIMC.map((entry, index) => `Cálculo ${index + 1}`);
        const dados = historicoIMC.map(entry => entry.imc.toFixed(2));

        new Chart(ctx, {
            type: "line",
            data: {
                labels: labels,
                datasets: [{
                    label: "Histórico de IMC",
                    data: dados,
                    borderColor: "rgba(75, 192, 192, 1)",
                    backgroundColor: "rgba(75, 192, 192, 0.2)",
                    borderWidth: 2,
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    };

    const calcularIMC = (peso, altura) => {
        const imc = peso / (altura * altura);
        let classificacao = "";

        if (imc < 18.5) classificacao = "Abaixo do Peso";
        else if (imc >= 18.5 && imc <= 25) classificacao = "Peso normal";
        else if (imc > 25 && imc <= 30) classificacao = "Acima do peso";
        else if (imc > 30 && imc <= 40) classificacao = "Obeso";
        else classificacao = "Obesidade grave";

        return { imc, classificacao };
    };

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const peso = parseFloat(document.getElementById("peso").value);
        const altura = parseFloat(document.getElementById("altura").value);

        if (!peso || !altura) {
            alert("Por favor, insira valores válidos.");
            return;
        }

        const { imc, classificacao } = calcularIMC(peso, altura);

        resultadoDiv.textContent = `IMC: ${imc.toFixed(2)} - ${classificacao}`;
        historicoIMC.push({ peso, altura, imc });
        localStorage.setItem("historicoIMC", JSON.stringify(historicoIMC));

        atualizarGrafico();
    });

    atualizarGrafico(); // Renderizar gráfico inicial com dados salvos
});
