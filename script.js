function calculateAge() {
    const dob = document.getElementById('dob').value;
    if (!dob) {
        alert("Please enter your date of birth.");
        return;
    }

    const dobDate = new Date(dob);
    const today = new Date();
    let years = today.getFullYear() - dobDate.getFullYear();
    let months = today.getMonth() - dobDate.getMonth();
    let days = today.getDate() - dobDate.getDate();

    if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    document.getElementById('yearsValue').innerText = years;
    document.getElementById('yearsBack').innerText = years;

    document.getElementById('monthsValue').innerText = months;
    document.getElementById('monthsBack').innerText = months;

    document.getElementById('daysValue').innerText = days;
    document.getElementById('daysBack').innerText = days;

    const resultDiv = document.getElementById('result');
    resultDiv.classList.remove('hidden');

    // Add flip animation
    setTimeout(() => {
        document.getElementById('yearsCard').classList.add('flipped');
        document.getElementById('monthsCard').classList.add('flipped');
        document.getElementById('daysCard').classList.add('flipped');
    }, 500);
}




