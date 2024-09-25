document.getElementById("assessment-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Collect input values
    const dailyRevenue = parseFloat(document.getElementById("daily-revenue").value);
    const monthlyExpenses = parseFloat(document.getElementById("monthly-expenses").value);
    const netIncome = (dailyRevenue * 30) - monthlyExpenses; // Estimate monthly revenue based on daily

    // Display results
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `<h2>Results</h2>
                           <p>Estimated Monthly Revenue: $${(dailyRevenue * 30).toFixed(2)}</p>
                           <p>Estimated Monthly Expenses: $${monthlyExpenses.toFixed(2)}</p>
                           <p>Estimated Net Income: $${netIncome.toFixed(2)}</p>`;
    resultDiv.classList.remove("hidden");
});
