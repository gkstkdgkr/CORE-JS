import {
  getNodes,
  diceAnimation,
  attr,
  insertLast,
  endScroll,
} from './lib/index.js';

// 1. 주사위 애니메이션
// 2. 주사위 굴리기 버튼을 클릭하면 diceAnimation() 실행될 수 있도록

const [rollingButton, recordButton, resetButton] = getNodes(
  '.buttonGroup > button'
);
const recordListWrapper = getNodes('.recordListWrapper');

const handleRollingDice = (() => {
  let isClicked = false;
  let stopAnimation;

  return () => {
    if (!isClicked) {
      stopAnimation = setInterval(diceAnimation, 100);
      recordButton.disabled = true;
      resetButton.disabled = true;
    } else {
      clearInterval(stopAnimation);
      recordButton.disabled = false;
      resetButton.disabled = false;
    }
    isClicked = !isClicked;
  };
})();

let count = 0;
let total = 0;
function createItem(value) {
  const template = `
  <tr>
    <td>${count}</td>
    <td>${value}</td>
    <td>${(total += value)}</td>
  </tr>
`;
  return template;
}

function renderRecordItems() {
  const diceValue = Number(attr(getNodes('#cube'), 'dice'));

  insertLast('.recordList tbody', createItem(diceValue));

  endScroll(recordListWrapper);
}

function handleRecord() {
  recordListWrapper.hidden = false;

  renderRecordItems();
}
function handleReset() {
  recordListWrapper.hidden = true;
}

rollingButton.addEventListener('click', handleRollingDice);
recordButton.addEventListener('click', handleRecord);
resetButton.addEventListener('click', handleReset);
