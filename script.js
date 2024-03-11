let savedPoint = { x: 0, y: 0 };

    function calculateAndDraw() {
        // Retrieve values from inputs
        const length = parseFloat(document.getElementById('lengthInput').value);
        const width = parseFloat(document.getElementById('widthInput').value);
        const x = parseFloat(document.getElementById('xInput').value);
        const y = parseFloat(document.getElementById('yInput').value);

        // Validate inputs using regular expressions
        const regex = /^\d+(\.\d+)?$/;
        if (!regex.test(length) || !regex.test(width) || !regex.test(x) || !regex.test(y)) {
            alert('Please enter valid numeric values.');
            return;
        }

        // Validate boundaries
        if (x < 0 || y < 0 || x + length > 400 || y + width > 300) {
            alert('Rectangle exceeds canvas boundaries.');
            return;
        }

        // Calculate area
        const area = length * width;

        // Display result
        document.getElementById('resultLabel').innerText = `Area: ${area.toFixed(2)}`;

        // Draw rectangle on canvas
        const canvas = document.getElementById('rectangleCanvas');
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillRect(x, y, width, length); // Corrected parameters
    }

    function clearCanvas() {
        const canvas = document.getElementById('rectangleCanvas');
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        document.getElementById('resultLabel').innerText = '';
    }

    function clearForm() {
        document.getElementById('lengthInput').value = '';
        document.getElementById('widthInput').value = '';
        document.getElementById('xInput').value = '';
        document.getElementById('yInput').value = '';
        document.getElementById('resultLabel').innerText = '';
        clearCanvas();
    }

    function savePoint() {
        alert("Click on the canvas to save a point.");
    }

    function drawAtSavedPoint() {
        const length = parseFloat(document.getElementById('lengthInput').value);
        const width = parseFloat(document.getElementById('widthInput').value);

        if (isNaN(length) || isNaN(width)) {
            alert('Please enter valid numeric values for length and width.');
            return;
        }

        const canvas = document.getElementById('rectangleCanvas');
        const ctx = canvas.getContext('2d');

        if (savedPoint.x + length > 400 || savedPoint.y + width > 300) {
            alert('Rectangle exceeds canvas boundaries.');
            return;
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillRect(savedPoint.x, savedPoint.y, width, length);
    }

    function canvasClick(event) {
        savedPoint.x = event.offsetX;
        savedPoint.y = event.offsetY;
        alert(`Point saved: X = ${savedPoint.x}, Y = ${savedPoint.y}`);
    }