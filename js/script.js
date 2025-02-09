document.getElementById('profitForm').addEventListener('submit', function(event) {
    event.preventDefault(); // mencegah form untuk mengirim ulang

    // Mendapatkan nilai dari input
    var price = parseFloat(document.getElementById('price').value);
    var quantity = parseFloat(document.getElementById('quantity').value);
    var profitPercent = parseFloat(document.getElementById('profitPercent').value);
    var transactionType = document.getElementById('type').value;

    // Melakukan perhitungan keuntungan
    var totalCost = price * quantity;
    var profit = totalCost * (profitPercent / 100);
    var totalPrice = totalCost + profit;

    if (transactionType === 'jual') {
        // Menghitung harga beli
        var buyPrice = (totalCost / quantity) / (1 + (profitPercent / 100));
        var resultText = 
            'Total Harga: ' + totalCost.toFixed(2) + '<br>' +
            'Keuntungan: ' + profit.toFixed(2) + '<br>' +
            'Total Harga dengan Keuntungan: ' + totalPrice.toFixed(2) + '<br>' +
            'Harga Beli: ' + buyPrice.toFixed(2);
    } else if (transactionType === 'beli') {
        // Menghitung harga jual
        var sellPrice = (totalCost / quantity) * (1 + (profitPercent / 100));
        var resultText = 
            'Total Harga: ' + totalCost.toFixed(2) + '<br>' +
            'Keuntungan: ' + profit.toFixed(2) + '<br>' +
            'Total Harga dengan Keuntungan: ' + totalPrice.toFixed(2) + '<br>' +
            'Harga Jual: ' + sellPrice.toFixed(2);
    }

    // Menampilkan hasil
    document.getElementById('result').innerHTML = resultText;
});
