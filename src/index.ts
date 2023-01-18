import { delay, from, Observable } from 'rxjs';

// eslint-disable-next-line no-console
console.log('RxJS TS Playground');

const data: number[] = [1, 2, 3, 4, 5];

from(data).subscribe((d: number) => console.log('Data received:', d));
