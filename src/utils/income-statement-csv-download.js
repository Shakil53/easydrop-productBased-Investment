export const convertToCSV = (data, title = 'EasyDrop - Income Statement') => {
    const csvRows = [];
  
    // Add title
    csvRows.push([`"${title}"`]);
    csvRows.push(['']); 
  
    // Add headers
    csvRows.push(['Label', 'Value'].join(','));
  
    // Add data rows
    data.forEach(row => {
      csvRows.push([row.label, row.value].join(','));
    });
  
    return csvRows.join('\n');
  };
  
  export const downloadCSV = (csvString, filename = 'data.csv') => {
    const blob = new Blob([csvString], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
  
   
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();
  
    // Clean up the object URL
    window.URL.revokeObjectURL(url);
  };
  