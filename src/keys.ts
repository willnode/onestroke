const alphabets = {
  a: 'e',
  as: 'i',
  af: 'u',
  afs: 'f',
  asd: 's',
  asf: 'v',
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
  h: 'backspace', // backspace key
  j: 'enter', // enter key
  k: 'space', // space key
  l: 'tab', // tab key

  // shift key modifier
  sh: 'delete', // delete key
  sj: 'pgdown', // page down
  sk: 'pgup', // page up
  sl: 'tab', // tab key

  // vi arrow keys
  ah: 'left',
  aj: 'down',
  ak: 'up',
  al: 'right',
};

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
