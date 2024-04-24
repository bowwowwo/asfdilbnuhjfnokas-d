const button = document.getElementById('vAButtons');

button.addEventListener('click', function() {
    const result = window.confirm('Are you sure you want to proceed?');

    if (result) {
        const currentColor = button.style.backgroundColor;

        
        if (currentColor === 'red') {
            button.style.backgroundColor = 'green';
        } else {
            button.style.backgroundColor = 'red';
        }
    } else {

    }
});
