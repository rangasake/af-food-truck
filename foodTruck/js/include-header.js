fetch('af-food-truck/foodTruck/header.html')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.text();
  })
  .then(data => {
    document.getElementById('header').innerHTML = data;
  })
  .catch(error => {
    console.error('Could not load header:', error);
  });
