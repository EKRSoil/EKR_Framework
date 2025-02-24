document.getElementById('imageInput').addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Simulación de integración con DeepSeek (requiere API real)
    // Ejemplo hipotético usando un backend propio:
    const formData = new FormData();
    formData.append('image', file);

    try {
        const response = await fetch('URL_DE_API_DEEPSEEK', {
            method: 'POST',
            headers: {'Authorization': 'Bearer TU_API_KEY'},
            body: formData
        });
        const data = await response.json();
        renderEquation(data.equation);
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('equationResult').innerHTML = 
            '<p style="color: red">Error al procesar la imagen</p>';
    }
});

function renderEquation(equation) {
    const resultDiv = document.getElementById('equationResult');
    // Clasificar como química o matemática
    const isChemical = equation.includes('ce{');
    const wrapper = isChemical ? `$\ce{${equation}}$` : `@${equation}@`;
    
    resultDiv.innerHTML = `
        <p>Ecuación detectada:</p>
        <div class="equation-box">${wrapper}</div>
    `;

    MathJax.typesetPromise();
}