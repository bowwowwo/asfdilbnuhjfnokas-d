const button = document.getElementById('vAButtons');

button.addEventListener('click', function() {
    const result = window.confirm('Vai esat pārliecināts?');

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

function ieraksts() {

     var clickTime = new Date();
    
     var formattedTime = clickTime.toLocaleString();
    
     console.log(User + "Button clicked at: " + formattedTime);
 }

