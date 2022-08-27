import { Subject } from 'rxjs';

/**
 * Subject is a multicasting observable, it shares same
 * data to all subscribers.
 */
const observer = {
  next: (value) => console.log('Next: ', value),
  error: (err) => console.error('Error: ', err),
  compete: () => console.log('Complete!'),
};

const subject = new Subject();
subject.subscribe(observer);
subject.next('Howdy 👋 ');

// new subscriber will get the data streamed after its subscription.
subject.subscribe(observer);
subject.next('Hi to the new subscribers 👍');
