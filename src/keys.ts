import { Model } from './types'
const alphabets = {
  a: 'e',
  as: 'i',
  af: 'u',
  afs: 'f',
  ad: 's',
  ads: 'v',
  adf: 'h',
  s: 'a',
  sf: 'w',
  sfd: 'j',
  sfa: 'p',
  sa: 'r',
  sad: 'l',
  f: 't',
  fd: 'm',
  fds: 'o',
  fs: 'g',
  fsd: 'q',
  fsa: 'z',
  d: 'n',
  da: 'd',
  das: 'b',
  daf: 'x',
  df: 'k',
  dfs: 'y',
  dfa: 'c',
};
export const keys = {
  ...alphabets,
  ...Object.entries(alphabets).reduce((a: Record<string, string>, [k, v]) => {
    a['k' + k] = v.toUpperCase(); // shift key
    return a;
  }, {}),

  ha: '0',
  hs: '1',
  hd: '2',
  hf: '3',
  has: '4',
  had: '5',
  haf: '6',
  hfd: '7',
  hfs: '8',
  hfa: '9',
  hsa: '+',
  hsd: '*',
  hsf: '^',
  hda: '~',
  hds: '%',
  hdf: '$',

  ja: '-',
  js: '_',
  jd: '.',
  jf: ',',
  jas: '+',
  jsa: '=',
  jdf: '/',
  jfd: '\\',

  jad: '(',
  jaf: ')',
  jsd: '[',
  jsf: ']',
  jda: '<',
  jds: '>',
  jfa: '{',
  jfs: '}',

  jasd: '?',
  jasf: '|',
  jads: '@',
  jafs: '#',

  jsad: ':',
  jsaf: ';',
  jsda: '!',
  jsfa: '&',

  jfda: '\'',
  jfds: '\"',
  jfad: '`',
  jfsd: '~',

  jdfa: '€',
  jdfs: '¢',
  jdaf: '¥',
  jdsf: '£',

  h: 'Backspace', // backspace key
  j: 'Enter', // enter key
  k: 'Space', // space key
  l: 'Tab', // tab key
  
  sh: 'Delete', // backspace key
  sj: '', // enter key
  sk: '', // space key
  sl: 'ShiftTab', // tab key

  // vi arrow keys
  ah: 'ArrowLeft',
  aj: 'ArrowDown',
  ak: 'ArrowUp',
  al: 'ArrowRight',

  // navigation modifier
  sah: 'Home',
  saj: 'PageDown',
  sak: 'PageUp',
  sal: 'End',
  
  // ctrl keys
  dh: 'Insert',
  dj: 'Undo',
  dk: 'Copy',
  dl: 'Paste',
};

export function append(m: Model, s: string) {
  m.text = m.text.substring(0, m.cursor) + s + m.text.substring(m.cursor);
  if (!m.inserting) {
    m.cursor += s.length;
  }
}

export const functions = {
  Backspace: (m: Model) => {
    if (m.cursor > 0) {
      m.text = m.text.substring(0, m.cursor - 1) + m.text.substring(m.cursor);
      m.cursor--;
    } else {
      m.cursor = 0;
    }
  },
  Enter: (m: Model) => {
    append(m, "\n")
  },
  Space: (m: Model) => {
    append(m, " ")
  },
  Tab: (m: Model) => {
    append(m, "\t")
  },
  ArrowLeft: (m: Model) => {
    if (m.cursor > 0) {
      m.cursor--;
    }
  },
  ArrowRight: (m: Model) => {
    if (m.cursor < m.text.length) {
      m.cursor++;
    }
  },
}

/*
A, a	  ▄ ▄▄▄
B, b	  ▄▄▄ ▄ ▄ ▄
C, c	  ▄▄▄ ▄ ▄▄▄ ▄
D, d	  ▄▄▄ ▄ ▄
E, e	  ▄
F, f	  ▄ ▄ ▄▄▄ ▄
G, g	  ▄▄▄ ▄▄▄ ▄
H, h	  ▄ ▄ ▄ ▄
I, i	  ▄ ▄
J, j	  ▄ ▄▄▄ ▄▄▄ ▄▄▄
K, k 	  ▄▄▄ ▄ ▄▄▄
L, l	  ▄ ▄▄▄ ▄ ▄
M, m	  ▄▄▄ ▄▄▄
N, n	  ▄▄▄ ▄
O, o	  ▄▄▄ ▄▄▄ ▄▄▄
P, p	  ▄ ▄▄▄ ▄▄▄ ▄
Q, q	  ▄▄▄ ▄▄▄ ▄ ▄▄▄
R, r	  ▄ ▄▄▄ ▄
S, s	  ▄ ▄ ▄
T, t	  ▄▄▄
U, u	  ▄ ▄ ▄▄▄
V, v	  ▄ ▄ ▄ ▄▄▄
W, w	  ▄ ▄▄▄ ▄▄▄
X, x	  ▄▄▄ ▄ ▄ ▄▄▄
Y, y	  ▄▄▄ ▄ ▄▄▄ ▄▄▄
Z, z	  ▄▄▄ ▄▄▄ ▄ ▄
0	  ▄▄▄ ▄▄▄ ▄▄▄ ▄▄▄ ▄▄▄
1	  ▄ ▄▄▄ ▄▄▄ ▄▄▄ ▄▄▄
2	  ▄ ▄ ▄▄▄ ▄▄▄ ▄▄▄
3	  ▄ ▄ ▄ ▄▄▄ ▄▄▄
4	  ▄ ▄ ▄ ▄ ▄▄▄
5	  ▄ ▄ ▄ ▄ ▄
6	  ▄▄▄ ▄ ▄ ▄ ▄
7	  ▄▄▄ ▄▄▄ ▄ ▄ ▄
8	  ▄▄▄ ▄▄▄ ▄▄▄ ▄ ▄
9	  ▄▄▄ ▄▄▄ ▄▄▄ ▄▄▄ ▄
*/
