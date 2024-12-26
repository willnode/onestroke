import { keys } from './keys';
import './style.css';

const registeredKeys: Set<string> = new Set();
let text = '';
const dText = document.getElementById('text') as HTMLDivElement;

function getKeys(): string {
  return [...registeredKeys].join('');
}

function updateKeysDisplay() {
  let t = text;
  if (registeredKeys.size > 0) {
    t += '  --- ' + [...registeredKeys].join(',');
    const pK = getKeys();
    if (pK in keys) {
      t += ' -> ' + keys[pK as keyof typeof keys];
    }
  }
  dText.innerText = t;
}
document.addEventListener('keydown', function keyDown(ev: KeyboardEvent) {
  registeredKeys.add(ev.key);
  updateKeysDisplay();
});

document.addEventListener('keyup', function keyDown(ev: KeyboardEvent) {
  const pK = getKeys();
  if (registeredKeys.size > 0) {
    if (pK in keys) {
      text += keys[pK as keyof typeof keys];
    }
    registeredKeys.clear();
  }
  registeredKeys.delete(ev.key);
  updateKeysDisplay();
});
