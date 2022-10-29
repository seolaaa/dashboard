document.addEventListener('DOMContentLoaded',()=>{


    const labels1 = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
      ];
    
      const data1 = {
        labels: labels1,
        datasets: [{
          label: 'My First dataset',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: [0, 10, 5, 2, 20, 30, 45],
        }]
      };
    
      const config1 = {
        type: 'line',
        data: data1,
        options: {}
      };


 
    const labels2 = [
        'yellow',
        'red',
        'blue',
        'pink',
        'purple',
        'green',
      ];
    
      const data2 = {
        labels: labels2,
        datasets: [{
          label: 'Color',
          backgroundColor: 'rgb(255, 204, 051)',
          borderColor: 'rgb(255, 99, 132)',
          data: [20, 10, 5, 32, 12, 20, 15],
        }]
      };
     
    
      const config2 = {
        type: 'bar',
        data: data2,
        options: {}
      };


      
      const myChart1 = new Chart(
        document.getElementById('myChart1'),
        config1
      );

      const myChart2 = new Chart(
        document.getElementById('myChart2'),
        config2
      );
})