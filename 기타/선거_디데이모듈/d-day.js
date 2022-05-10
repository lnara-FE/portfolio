function electionDday(){
  const timer = document.querySelector('.counter');
  const getDay = () => {
    const today = new Date(),
          dday = new Date("June 01 2022 00:00:00 GMT+0900"),
          gap = dday.getTime() - today.getTime(),
          result = Math.ceil(gap / (1000 * 60 * 60 * 24));   
    if(gap <= 0) {
      timer.innerText = "D-day";
    }else {
      timer.innerText = `D-${result}`;
    }
  };

  const init = () => {
    getDay();
    setInterval(getDay, 1000);
  };
  init();
}
electionDday();