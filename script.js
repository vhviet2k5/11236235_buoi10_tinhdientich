document.getElementById('shape').addEventListener('change', function() {
    const shape = this.value;
    document.querySelectorAll('.shapeInputs').forEach(div => div.style.display = 'none');
    document.getElementById(shape + 'Inputs').style.display = 'block';
});

function calculate() {
    const shape = document.getElementById('shape').value;
    let area, perimeter;

    if (shape === 'rectangle') {
        const length = parseFloat(document.getElementById('length').value);
        const width = parseFloat(document.getElementById('width').value);
        if (isNaN(length) || isNaN(width) || length <= 0 || width <= 0) {
            alert('Vui lòng nhập chiều dài và chiều rộng hợp lệ.');
            return;
        }
        if (length <= width) {
            alert('Chiều dài phải lớn hơn chiều rộng. Vui lòng nhập lại.');
            return;
        }
        area = length * width;
        perimeter = 2 * (length + width);

    } else if (shape === 'circle') {
        const radius = parseFloat(document.getElementById('radius').value);
        if (isNaN(radius) || radius <= 0) {
            alert('Vui lòng nhập bán kính hợp lệ.');
            return;
        }
        area = Math.PI * radius * radius;
        perimeter = 2 * Math.PI * radius;

    } else if (shape === 'triangle') {
        const base = parseFloat(document.getElementById('base').value);
        const height = parseFloat(document.getElementById('height').value);
        if (isNaN(base) || isNaN(height) || base <= 0 || height <= 0) {
            alert('Vui lòng nhập cạnh đáy và chiều cao hợp lệ.');
            return;
        }
        area = 0.5 * base * height;
        perimeter = base + 2 * Math.sqrt((base * base) + (height * height)); 

    }

    document.getElementById('result').innerText = `Diện tích: ${area.toFixed(2)}, Chu vi: ${perimeter.toFixed(2)}`;
}