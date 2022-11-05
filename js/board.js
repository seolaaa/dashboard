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
        options: {
          
        }
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
        options: {
          maxBarThickness: 30,
        }
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
        options: {
          maxBarThickness: 30,
        }
      };



      const labels4 = [
        '이동혁',
        '이마크',
        '이제노',
        '나재민',
        '황인준',
        '종천러',
      ];
    
      const data4 = {
        labels: labels4,
        datasets: [{
          label: '상품 판매 수',
          backgroundColor: ["#ff3366", "#a5ea89","#89a5ea","#336633","#59227c","#333366"],
          borderColor: 'rgb(255, 255, 255)',
          data: [20, 10, 5, 32, 12, 20],
        }],
      };
    
      const config4 = {
        type: 'pie',
        data: data4,
        options: {
          maintainAspectRatio :false,
        }
      };




      const labels5 = [
        '이동혁',
        '이마크',
        '이제노',
        '나재민',
        '황인준',
      ];
    
      const data5 = {
        labels: labels5,
        datasets: [{
          label: '상품 판매 수',
          backgroundColor: ["#ff3366", "#a5ea89","#89a5ea","#336633","#59227c","#333366"],
          borderColor: 'rgb(255, 255, 255)',
          data: [20, 10, 5, 32, 20],
        
        }],
      };
    
      const config5 = {
        type: 'bar',
        data: data5,
        options: {
          indexAxis: 'y',
          maxBarThickness: 30,
          maintainAspectRatio :false
          
      }
    };




    const labels6 = [
      'Cake',
      'Croissant',
      'Cookie',
      'Pie',
      'Croffle',
    ];
  
    const data6 = {
      labels: labels6,
      datasets: [{
        label: '카페 디저트 선호도',
        // borderColor: 'rgb(255, 255, 255)',
        data: [20, 10, 5, 32, 20],
      
      }],
    };
  
    const config6 = {
      type: 'line',
      data: data6,
      options: {
        indexAxis: 'x',
        maxBarThickness: 30,
        maintainAspectRatio :false,
        lineTension : 0,
        pointBackgroundColor :'rgb(255, 255, 255)',
        
    }
  };


      
      const myChart1 = new Chart(
        document.getElementById('sales'),
        config1
      );

      const myChart2 = new Chart(
        document.getElementById('preference'),
        config2
      );

      const myChart3 = new Chart(
        document.getElementById('comparison'),
        config3
      );

      const myChart4 = new Chart(
        document.getElementById('name'),
        config4
      );

      const myChart5 = new Chart(
        document.getElementById('bar'),
        config5
      );

      const myChart6 = new Chart(
        document.getElementById('dessert'),
        config6
      );
})