function log(a, b, c, d) {
  console.log(a, b, c, d);
  arguments[0] = 'hack';
  arguments[3] = 'frontend';

  console.log(a, b, c, d);
}

log(1, 2, 3);