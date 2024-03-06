function checkAnswer() {
    const userAnswer = document.getElementById('answer').value;

    // Hash the user's answer using SHA-256
    const hashedAnswer = '8cc01a75797b4be68843e62a1a6fb3e7327dddca78133a6b1411547b47ff1d3d'; // Replace with the hashed answer

    // Generate the SHA-256 hash of the user's input
    const crypto = window.crypto || window.msCrypto; // Get the crypto object
    const encoder = new TextEncoder();
    const data = encoder.encode(userAnswer);
    crypto.subtle.digest('SHA-256', data).then(function(hash) {
        const hashedUserAnswer = Array.from(new Uint8Array(hash)).map(byte => byte.toString(16).padStart(2, '0')).join('');

        if (hashedUserAnswer === hashedAnswer) {
            document.getElementById('result').textContent = 'C\'est la bonne réponse ! ';
        } else {
            document.getElementById('result').textContent = 'Perdu !';
        }
    }).catch(function(error) {
        console.error(error);
    });
}

function checkAnswer2() {
    const userAnswer = document.getElementById('answer2').value;

    // Hash the user's answer using SHA-256
    const hashedAnswer = '8cc01a75797b4be68843e62a1a6fb3e7327dddca78133a6b1411547b47ff1d3d'; // Replace with the hashed answer

    // Generate the SHA-256 hash of the user's input
    const crypto = window.crypto || window.msCrypto; // Get the crypto object
    const encoder = new TextEncoder();
    const data = encoder.encode(userAnswer);
    crypto.subtle.digest('SHA-256', data).then(function(hash) {
        const hashedUserAnswer = Array.from(new Uint8Array(hash)).map(byte => byte.toString(16).padStart(2, '0')).join('');

        if (hashedUserAnswer === hashedAnswer) {
            document.getElementById('result2').textContent = 'C\'est la bonne réponse ! ';
        } else {
            document.getElementById('result2').textContent = 'Perdu !';
        }
    }).catch(function(error) {
        console.error(error);
    });
}

function selectQuestion(questionNumber) {
    // Hide all the questions
    document.getElementById('question1').style.display = 'none';
    document.getElementById('question2').style.display = 'none';

    // Show the selected question
    document.getElementById(`question${questionNumber}`).style.display = 'block';
}