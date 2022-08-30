import {
  AsyncSubject,
  BehaviorSubject,
  Observable,
  ReplaySubject,
  Subject,
} from 'rxjs';

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
subject.next(Math.random());

// Regular observable unicast values.
const observableEx = new Observable((observer) => {
  observer.next(Math.random());
});

observableEx.subscribe(observer);
observableEx.subscribe(observer);

// 🟢 Behaviour Subject
const behaviorSubject = new BehaviorSubject(5);
behaviorSubject.subscribe((vl) => console.log(`1st: ${vl}`));
behaviorSubject.subscribe((vl) => console.log(`2nd: ${vl}`));
behaviorSubject.next(7);
behaviorSubject.subscribe((vl) => console.log(`3nd: ${vl}`));

// 🟢 Replay Subject
const replaySubject = new ReplaySubject(1);
replaySubject.next(5);
replaySubject.subscribe((vl) => console.log(`1st: ${vl}`));
replaySubject.next(6);
replaySubject.next(7);
replaySubject.subscribe((vl) => console.log(`2nd: ${vl}`));

// 🟢 Async Subject
const asyncSubject = new AsyncSubject();
asyncSubject.subscribe((vl) => console.log(`🔴 Async: ${vl}`));

asyncSubject.next(7);
asyncSubject.next(8);
asyncSubject.next(9);

// It completes in 3 second and emits the last value.
setTimeout(() => asyncSubject.complete(), 3000);
