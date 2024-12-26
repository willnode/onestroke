import { append, functions, keys } from './keys';
import './style.css';
import { Model } from './types';

const registeredKeys: Set<string> = new Set();
let model: Model = {
  cursor: "Type here...".length,
  text: "Type here...",
  inserting: false,
  shallowing: false,
}
const dText = document.getElementById('text') as HTMLDivElement;
const dHint = document.getElementById('hint') as HTMLDivElement;
const dDict = document.getElementById('dict') as HTMLDivElement;

function getKeys(): string {
  let k = [...registeredKeys].join('');
  if (k.indexOf('k') > 0) {
    k = 'k' + k.replace('k', '');
  }
  return k;
}

function updateKeysDisplay() {
  let m = model;
  dText.innerText = m.text.substring(0, m.cursor) + "■" + m.text.substring(m.cursor);
  if (registeredKeys.size > 0) {
    dHint.innerText = [...registeredKeys].join(',');
    const pK = getKeys();
    if (pK in keys) {
      dHint.innerText += ' -> ' + keys[pK as keyof typeof keys];
    }
    dDict.innerText = Object.entries(keys).filter(([k])=>k.startsWith(pK)).map(([k, v]) => `${k} => ${v}`).join('\n');
  } else {
    dHint.innerText = 'Put your fingers to ASDF and HJKL';
    dDict.innerText = Object.entries(keys).map(([k, v]) => `${k} => ${v}`).join('\n');
  }
}
document.addEventListener('keydown', function keyDown(ev: KeyboardEvent) {
  if (registeredKeys.size == 1 && registeredKeys.has('l')) {
    model.shallowing = true;
    registeredKeys.clear();
  }
  registeredKeys.add(ev.key);
  updateKeysDisplay();
});

document.addEventListener('keyup', function keyDown(ev: KeyboardEvent) {
  const pK = getKeys();
  if (registeredKeys.size > 0) {
    if (model.shallowing && ev.key == 'l') {
      model.shallowing = false;
    }
    if (!model.shallowing) {
      if (pK in keys) {
        const kk = keys[pK as keyof typeof keys];
        if (kk in functions) {
          functions[kk as keyof typeof functions](model);
        } else {
          append(model, kk);
        }
      }
      registeredKeys.clear();
    }
  }
  registeredKeys.delete(ev.key);
  updateKeysDisplay();
});

updateKeysDisplay();
