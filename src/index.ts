import { from } from 'rxjs';

// eslint-disable-next-line no-console
console.log(`------------------
RxJS TS Playground
------------------\n`);

from([1, 2, 3, 4, 5]).subscribe((d: number) =>
  // eslint-disable-next-line no-console
  console.log('Data received:', d),
);
