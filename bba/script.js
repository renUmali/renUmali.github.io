
document.addEventListener("DOMContentLoaded", function() {
    const table = document.getElementById("sortableTable");
    const headers = table.querySelectorAll("th");
    const rows = Array.from(table.querySelectorAll("tr")).slice(1); // Skip the header row, keep all rows for sorting

    headers.forEach((header, index) => {
        header.addEventListener("click", () => {
            rows.sort((rowA, rowB) => {
                const cellA = rowA.cells[index].textContent;
                const cellB = rowB.cells[index].textContent;

                // Handle numeric and string sorting
                const numA = parseFloat(cellA);
                const numB = parseFloat(cellB);

                const isNumeric = !isNaN(numA) && !isNaN(numB);
                if (isNumeric) {
                    return numB - numA;  // Sort highest to lowest
                }

                // For string data, default to descending alphabetical order
                return cellB.localeCompare(cellA);
            });

            rows.forEach(row => table.appendChild(row)); // Reorder the rows based on the sorted array
        });
    });
});
