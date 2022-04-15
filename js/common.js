let date = new Date();
const logdingCheckIn = document.querySelector('.navigation--lodging--checkin');
const logdingCheckOut = document.querySelector(
  '.navigation--lodging--checkout'
);

const recentSearchRecord = document.createElement('div');
const calandar = document.createElement('div');
const lodgingLocation = document.querySelector(
  '.navigation--lodging--location'
);
const calandarMaterials = {
  currentYear: date.getFullYear(),
  currentMonth: date.getMonth() + 1,
  currentDate: date.getDate(),
};




function handleTabListCalandar() {
  document.querySelector('.scadule').classList.remove('show');
  document.querySelector('.calandar').classList.add('show');
  document.querySelector('.calandar').classList.remove('hide');
  document.querySelector('.scadule').classList.add('hide');
}

function handleTabListScadule() {
  
  document.querySelector('.scadule').classList.add('show');
  document.querySelector('.scadule').classList.remove('hide');
  document.querySelector('.calandar').classList.add('hide');
  document.querySelector('.calandar').classList.remove('show');
  
}

function renderCalandar() {
  let template = `
<div class="search-calandar">
  <ul class="tab-lists">
    <li class="tab-list"><button class="tab-calandar">달력</button></li>
    <li class="tab-list"><button class="tab-scadule">유연한 일정</button></li>
  </ul>
  <div class="calandar show">
  <h4 class="calandar--date">오늘은 ${calandarMaterials.currentYear}년 ${
    calandarMaterials.currentMonth
  }월 ${calandarMaterials.currentDate}일 입니다.</h4>
  <div>
    <input type="date" /> <input type="date" />
    </div>
  </div>
  <div class="scadule hide">
  <div class="scadule--info">
  <h4>숙박 기간을 선택하세요.</h4>
  <div class="button-group">
  <button>주말</button>
  <button>일주일</button>
  <button>한달</button>
  </div>
  <h4>여행 날짜를 선택하세요.</h4>
  </div>
  <div class="scadule-group">
  
  ${makeMonth()}
  
  </div>
  </div>
  
`;
  calandar.innerHTML = template;
  return calandar;

  function makeMonth() {
    const yearMonth = document.createElement('div');
    let yearmonth = [];
    for (let i = 2022; i < 2024; i++) {
      for (let j = calandarMaterials.currentMonth; j < 13; j++) {
        yearmonth.push(`
    
    
   <div class=" scadule-calandar">
   <div class="scadule-image-box">
   <img src="https://a0.muscache.com/pictures/cf82c9bc-520a-4486-9be4-1f0927972381.jpg" alt="scadule" class="scadule-image" />
   </div>
     
     <div class="scadule-month">${j}월</div>
     <div class="scadule-year">${i}년</div>
    
  </div>
 

      `);
      }
    }
    return (yearMonth.innerHTML = yearmonth.join(''));
  }
}


function handleSearch(e) {
  calandar.remove();
  const lodgingLocationInput = document.querySelector(
    '.navigation--lodging--search-input'
  );
  let template = `
  <div class="search-record">
  <div>
  <h3>언제 어디로든 떠나는 여행</h3>
  <div class="flex-search-wrapper">
  <button class="flex-search">유연한 검색<video autoplay="" crossorigin="anonymous" playsinline="" poster="https://a0.muscache.com/pictures/04c0a34f-9880-48b7-a69c-49011f602a35.jpg" preload="auto" width="28" height="28"><source src="https://a0.muscache.com/videos/vopt/13/e1/13e14ffc-822c-5e84-aa58-d6a6527dc218/13e14ffc822c5e84aa58d6a6527dc218.mp4?impolicy=low_quality" type="video/mp4"></video></button>
  </div>
  </div>
  <div>
  <h4>최근 검색 기록</h4>
  <ul>
    <li><div><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 22px; width: 22px; fill: currentcolor;"><path d="m15.9999.3335c8.6524795 0 15.6667 7.01422051 15.6667 15.6667 0 8.6524795-7.0142205 15.6667-15.6667 15.6667-8.65247949 0-15.6667-7.0142205-15.6667-15.6667 0-8.65247949 7.01422051-15.6667 15.6667-15.6667zm0 2c-7.54790999 0-13.6667 6.11879001-13.6667 13.6667 0 7.54791 6.11879001 13.6667 13.6667 13.6667 7.54791 0 13.6667-6.11879 13.6667-13.6667 0-7.54790999-6.11879-13.6667-13.6667-13.6667zm1.0001 3v10.0895l8.7375978 5.0444733-.9999956 1.7320534-9.7376022-5.6219748v-11.2440519z"></path></svg></div><a href="/">서귀포 숙소</a></li>
    <li><div><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 22px; width: 22px; fill: currentcolor;"><path d="m15.9999.3335c8.6524795 0 15.6667 7.01422051 15.6667 15.6667 0 8.6524795-7.0142205 15.6667-15.6667 15.6667-8.65247949 0-15.6667-7.0142205-15.6667-15.6667 0-8.65247949 7.01422051-15.6667 15.6667-15.6667zm0 2c-7.54790999 0-13.6667 6.11879001-13.6667 13.6667 0 7.54791 6.11879001 13.6667 13.6667 13.6667 7.54791 0 13.6667-6.11879 13.6667-13.6667 0-7.54790999-6.11879-13.6667-13.6667-13.6667zm1.0001 3v10.0895l8.7375978 5.0444733-.9999956 1.7320534-9.7376022-5.6219748v-11.2440519z"></path></svg></div><a href="/">제주시 숙소</a></li>
    <li><div><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 22px; width: 22px; fill: currentcolor;"><path d="m15.9999.3335c8.6524795 0 15.6667 7.01422051 15.6667 15.6667 0 8.6524795-7.0142205 15.6667-15.6667 15.6667-8.65247949 0-15.6667-7.0142205-15.6667-15.6667 0-8.65247949 7.01422051-15.6667 15.6667-15.6667zm0 2c-7.54790999 0-13.6667 6.11879001-13.6667 13.6667 0 7.54791 6.11879001 13.6667 13.6667 13.6667 7.54791 0 13.6667-6.11879 13.6667-13.6667 0-7.54790999-6.11879-13.6667-13.6667-13.6667zm1.0001 3v10.0895l8.7375978 5.0444733-.9999956 1.7320534-9.7376022-5.6219748v-11.2440519z"></path></svg></div><a href="/">Sanchong District 숙소</a></li>
    <li><div><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 22px; width: 22px; fill: currentcolor;"><path d="m15.9999.3335c8.6524795 0 15.6667 7.01422051 15.6667 15.6667 0 8.6524795-7.0142205 15.6667-15.6667 15.6667-8.65247949 0-15.6667-7.0142205-15.6667-15.6667 0-8.65247949 7.01422051-15.6667 15.6667-15.6667zm0 2c-7.54790999 0-13.6667 6.11879001-13.6667 13.6667 0 7.54791 6.11879001 13.6667 13.6667 13.6667 7.54791 0 13.6667-6.11879 13.6667-13.6667 0-7.54790999-6.11879-13.6667-13.6667-13.6667zm1.0001 3v10.0895l8.7375978 5.0444733-.9999956 1.7320534-9.7376022-5.6219748v-11.2440519z"></path></svg></div><a href="/">애월읍 숙소</a></li>
  </div>
  
  `;
  lodgingLocationInput.focus();

  recentSearchRecord.innerHTML = template;

  document
    .querySelector('.navigation--lodging--list')
    .appendChild(recentSearchRecord);

  window.addEventListener('click', (e) => {
    e.target === document.querySelector('.wrapper') &&
      recentSearchRecord.remove();
  });
}

function handleCheckIn(e) {

  recentSearchRecord.remove();

  document
    .querySelector('.navigation--lodging--list')
    .appendChild(renderCalandar());

  window.addEventListener('click', (e) => {
    e.target === document.querySelector('.wrapper') && calandar.remove();
  });

  document.querySelector('.tab-calandar').addEventListener('click',handleTabListCalandar);   
  document.querySelector('.tab-scadule').addEventListener('click', handleTabListScadule)
 
}



lodgingLocation.addEventListener('click', handleSearch);
logdingCheckIn.addEventListener('click', handleCheckIn);
logdingCheckOut.addEventListener('click', handleCheckIn);
;


// const swiper = new Swiper('.swiper',{
//   pagination: {
//     el: 6,
//   },
//   navigation:{
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev'
//   }
// })