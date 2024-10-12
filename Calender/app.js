const monthYear = document.getElementById('month-year');
const calendarDates = document.getElementById('calendar-dates');
const prevMonthBtn = document.getElementById('prev-month');
const nextMonthBtn = document.getElementById('next-month');

let currentDate = new Date();

function renderCalendar() {
  calendarDates.innerHTML = '';

  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();

  monthYear.textContent = `${currentDate.toLocaleString('default', { month: 'long' })} ${year}`;

  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  for (let i = 0; i < firstDayOfMonth; i++) {
    const emptyCell = document.createElement('div');
    calendarDates.appendChild(emptyCell);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const dateCell = document.createElement('div');
    dateCell.textContent = day;
    calendarDates.appendChild(dateCell);
  }
}

function goToNextMonth() {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar();
}

function goToPrevMonth() {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar();
}

prevMonthBtn.addEventListener('click', goToPrevMonth);
nextMonthBtn.addEventListener('click', goToNextMonth);

renderCalendar();
