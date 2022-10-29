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
          label: '올해 매출액',
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
          label: '선호도',
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




      const labels3 = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
      ];
    
      const data3 = {
        labels: labels3,
        datasets: [{
          label: '2022',
          backgroundColor: 'rgb(204, 102, 153)',
          borderColor: 'rgb(255, 99, 132)',
          data: [20, 10, 5, 32, 12, 20, 15],
        },
        
        {
          label: '2023',
          backgroundColor: 'rgb(255, 198, 198)',
          borderColor: 'rgb(255, 99, 132)',
          data: [10, 30, 15, 22, 8, 12, 5],
        }],
      };
        
      
     
    
      const config3 = {
        type: 'bar',
        data: data3,
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

      const myChart3 = new Chart(
        document.getElementById('myChart3'),
        config3
      );
})