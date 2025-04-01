let a, b, i, j, flag;

a = 2;
b = 11;
for (i = a; i <= b; i++) {
  if (i == 1 || i == 0) continue;

  // flag variable to tell
  // if i is prime or not
  flag = 1;

  for (j = 2; j <= i / 2; ++j) {
    if (i % j == 0) {
      flag = 0;
      break;
    }
  }

  // flag = 1 means i is prime
  // and flag = 0 means i is not prime
  if (flag == 1) console.log(i);
}
