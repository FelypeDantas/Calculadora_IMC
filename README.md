# Calculadora de IMC com Gráfico e Histórico

Este é um projeto de calculadora de IMC (Índice de Massa Corporal) que possui uma interface gráfica, exibe os resultados de forma visual em um gráfico e salva o histórico de cálculos no **localStorage** do navegador.

## Funcionalidades

- **Cálculo do IMC**: Insira seu peso (em kg) e altura (em metros) para calcular o IMC.
- **Classificação do IMC**: O resultado inclui a classificação de acordo com os valores de IMC:
  - Abaixo do peso
  - Peso normal
  - Acima do peso
  - Obeso
  - Obesidade grave
- **Gráfico**: Visualize o histórico de cálculos em um gráfico interativo.
- **Histórico Persistente**: Os cálculos são salvos no localStorage e exibidos mesmo após recarregar a página.

## Tecnologias Utilizadas

- **HTML5**: Estrutura do projeto.
- **CSS3**: Estilização e layout responsivo.
- **JavaScript**: Lógica de cálculo, manipulação do DOM e integração com localStorage.
- **Chart.js**: Biblioteca para criação de gráficos.

## Como Utilizar

1. Clone este repositório ou baixe os arquivos.
2. Abra o arquivo `index.html` em qualquer navegador moderno.
3. Preencha os campos de **peso** e **altura** e clique em "Calcular IMC".
4. Veja o resultado no campo de texto e no gráfico abaixo.

## Estrutura do Projeto

- `index.html`: Estrutura principal do projeto.
- `style.css`: Estilos e layout.
- `script.js`: Lógica de cálculo, gerenciamento de histórico e renderização do gráfico.


## Como Personalizar

- **Estilo**: Você pode editar o arquivo `style.css` para mudar cores, fontes ou layout.
- **Gráfico**: A configuração do gráfico está no arquivo `script.js`, utilizando a biblioteca Chart.js.

## Como Funciona o Histórico

O projeto utiliza o **localStorage** do navegador para armazenar os dados de cada cálculo (peso, altura e IMC). Isso permite que os dados sejam persistentes, mesmo após o fechamento do navegador.

## Instalação de Dependências

O projeto utiliza a biblioteca Chart.js para os gráficos. Certifique-se de que o arquivo `https://cdn.jsdelivr.net/npm/chart.js` está sendo carregado corretamente no seu navegador. Nenhuma instalação adicional é necessária.

## Contribuindo

1. Faça um fork do projeto.
2. Crie uma branch para sua feature (`git checkout -b minha-feature`).
3. Commit suas alterações (`git commit -m 'Minha nova feature'`).
4. Envie para a branch principal (`git push origin minha-feature`).
5. Abra um Pull Request.

## Licença

Este projeto é de uso livre e está disponível sob a licença MIT.

---

Desenvolvido com ❤️ para ajudar no aprendizado e prática de desenvolvimento front-end.
