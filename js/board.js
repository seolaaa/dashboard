document.addEventListener('DOMContentLoaded',()=>{



  /*도넛차트*/
    const labels1 = [
      '이동혁',
      '이마크',
      '이제노',
      '나재민',
      '황인준',
    ];

    const data1 = {
      labels: labels1,
      datasets: [{
        label: '상품 판매 수',
        backgroundColor: ["#ff3366", "#a5ea89","#89a5ea","#336633","#59227c","#333366"],
        borderColor: 'rgb(255, 255, 255)',
        data: [20, 10, 5, 32, 20],
      
      }],
    };

    const config1 = {
      type: 'doughnut',
      data: data1,
      options: {
        maintainAspectRatio :false,
        
    }
  };
  /*도넛차트끝*/


  /*파이차트*/
  const labels2 = [
    '이동혁',
    '이마크',
    '이제노',
    '나재민',
    '황인준',
    '종천러',
  ];

  const data2 = {
    labels: labels2,
    datasets: [{
      label: '상품 판매 수',
      backgroundColor: ["#ff3366", "#a5ea89","#89a5ea","#336633","#59227c","#333366"],
      borderColor: 'rgb(255, 255, 255)',
      data: [20, 10, 5, 32, 12, 20],
    }],
  };

  const config2 = {
    type: 'pie',
    data: data2,
    options: {
      maintainAspectRatio :false,
    }
  };
  /*파이차트*/

  
  /*y축 바 차트*/
  const labels3 = [
    '이동혁',
    '이마크',
    '이제노',
    '나재민',
    '황인준',
  ];

  const data3 = {
    labels: labels3,
    datasets: [{
      label: '상품 판매 수',
      backgroundColor: ["#ff3366", "#a5ea89","#89a5ea","#336633","#59227c","#333366"],
      borderColor: 'rgb(255, 255, 255)',
      data: [20, 10, 5, 32, 20],
    
    }],
  };

  const config3 = {
    type: 'bar',
    data: data3,
    options: {
      indexAxis: 'y',
      maxBarThickness: 30,
      maintainAspectRatio :false,
  }
};
/*y축 바 차트끝*/


/*x축 바 차트*/
  const labels4 = [
    'January',
    'February',
     'March',
     'April',
     'May',
     'June',
    ];
    
  const data4 = {
    labels: labels4,
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
    
  const config4 = {
    type: 'bar',
    data: data4,
    options: {
    maxBarThickness: 30,
    maintainAspectRatio :false,
    }
  };
  /*x축 바 차트 끝*/




/*차트 실행*/
  const myChart1 = new Chart(
    document.getElementById('doughnut'),
    config1
  );
      
  const myChart2 = new Chart(
    document.getElementById('name'),
    config2
  );

  const myChart3 = new Chart(
    document.getElementById('bar'),
    config3
  );

  const myChart4 = new Chart(
    document.getElementById('comparison'),
    config4
  );
  /*차트실행끝*/

     
     
});

     

      