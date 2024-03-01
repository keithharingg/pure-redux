import { addCurrentTime, clearAllTimes } from './redux/actionCreators.js';
import store from './redux/store.js';

const addTime = document.getElementById('addTime');
addTime.addEventListener('click', () => {
  store.dispatch(addCurrentTime());
});

const clearTimesBtn = document.getElementById('clearAllTimes');
clearTimesBtn.addEventListener('click', () => {
  store.dispatch(clearAllTimes());
});

const timesList = document.getElementById('timesList');

store.subscribe(() => {
  timesList.innerHTML = '';
  const times = store.getState();
  times.forEach((time) => {
    let li = document.createElement('li');
    li.innerText = time;
    timesList.appendChild(li);
  });
});

// const unsubscribe = store.subscribe(() =>
//   console.log(`Redux store just changed! ${store.getState()}`),
// );

// store.dispatch({
//   type: 'ADD_CURRENT_TIME',
//   payload: '11:30:00',
// });

// store.dispatch({
//   type: 'ADD_CURRENT_TIME',
//   payload: '11:33:00',
// });

// store.dispatch({
//   type: 'CLEAR_ALL_TIMES',
// });

// unsubscribe();
