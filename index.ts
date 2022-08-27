import './style.css';
import { Subject } from 'rxjs';

const observer = {
  next: (value) => console.log('Next: ', value),
  error: (err) => console.error('Error: ', err),
  compete: () => console.log('Complete!'),
};

const observer2 = {
  next: (value) => console.log('Next2: ', value),
  error: (err) => console.error('Error2: ', err),
  compete: () => console.log('Complete2!'),
};

const subject = new Subject();
subject.subscribe(observer);

subject.next('Howdy !!');

subject.subscribe(observer2);

subject.next('Hi to the newcomeers');
