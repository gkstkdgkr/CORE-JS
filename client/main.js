import data from './data/data';
import {
  clearContents,
  copy,
  getNode,
  getRandom,
  insertLast,
  isNumericString,
  showAlert,
} from './lib/index';

console.log(data);

const submit = getNode('#submit');
const nameField = getNode('#nameField');
const result = getNode('.result');

function handleSubmit(e) {
  e.preventDefault();

  const name = nameField.value;
  const list = data(name);
  const pick = list[getRandom(list.length)];

  if (!name || name.replace(/\s*/g, '') === '') {
    showAlert('.alert-error', '공백은 허용하지 않습니다.');

    return;
  }
  if (typeof name === 'number') {
    console.log('?');

    showAlert('.alert-error', '제대로 된 이름을 입력해 주세요');
    return;
  }

  if (!isNumericString(name)) {
    showAlert('.alert-error', '제대로 된 이름을 입력해 주세요');
    return;
  }

  clearContents(result);
  insertLast(result, pick);
}
function handleCopy() {
  const text = result.textContent;

  if (nameField.value) {
    copy(text).then(() => {
      showAlert('.alert-success', '클립보드 복사 완료!');
    });
  }
}

submit.addEventListener('click', handleSubmit);
result.addEventListener('click', handleCopy);
