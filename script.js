function updateClock() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const secDeg = seconds * 6; // 360 / 60
  const minDeg = minutes * 6 + seconds * 0.1;
  const hourDeg = (hours % 12) * 30 + minutes * 0.5;

  document.getElementById('second-hand').style.transform = `translate(-50%, -100%) rotate(${secDeg}deg)`;
  document.getElementById('minute-hand').style.transform = `translate(-50%, -100%) rotate(${minDeg}deg)`;
  document.getElementById('hour-hand').style.transform = `translate(-50%, -100%) rotate(${hourDeg}deg)`;
}

setInterval(updateClock, 1000);
updateClock(); // 初期実行

function generateCalendar() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth(); // 0-11
  const today = now.getDate();

  const firstDay = new Date(year, month, 1).getDay(); // 曜日
  const lastDate = new Date(year, month + 1, 0).getDate(); // 月末日

  const weekdays = ['日', '月', '火', '水', '木', '金', '土'];
  const calendar = document.getElementById('calendar');

  // ヘッダー（月と曜日）
  let html = `<div style="font-size:18px; margin-bottom:6px;">${month + 1}月</div>`;
  html += '<table><tr>';
  weekdays.forEach(day => html += `<th>${day}</th>`);
  html += '</tr><tr>';

  // 空白の前日部分
  for (let i = 0; i < firstDay; i++) {
    html += '<td></td>';
  }

  // 日付の描画
  for (let date = 1; date <= lastDate; date++) {
    const isToday = (date === today) ? 'today' : '';
    html += `<td class="${isToday}">${date}</td>`;
    if ((firstDay + date) % 7 === 0) html += '</tr><tr>';
  }

  html += '</tr></table>';
  calendar.innerHTML = html;
}

generateCalendar();
