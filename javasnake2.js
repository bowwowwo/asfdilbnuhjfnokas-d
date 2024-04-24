const button = document.getElementById('vAButtons');

button.addEventListener('click', function() {
    const result = window.confirm('Are you sure you want to proceed?');

    if (result) {
                button.style.backgroundColor = 'red';
    } else {}
});