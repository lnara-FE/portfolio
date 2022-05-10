function olympicToday(){
  const week = new Array('일', '월', '화', '수', '목', '금', '토');

  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let date = today.getDate();
  let day = week[today.getDay()];
/*
  if (month < 10) { 
      month = "0" + month; 
  } 
  if (date < 10) { 
      date = "0" + date; 
  }
*/

  let todayText = `${year}년 ${month}월 ${date}일 ${day}`;
  document.getElementById('todaydate').innerHTML = todayText;
}
olympicToday();