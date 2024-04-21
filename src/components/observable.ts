export class Observable<T> {
  private observers: Observer<T>[] = [];

  subscribe(observer: Observer<T>) {
    this.observers.push(observer);
    return () => {
      this.observers = this.observers.filter((obs) => obs !== observer);
    };
  }

  // unsubscribe(observer: Observer<T>) {
  //   this.observers = this.observers.filter((obs) => obs !== observer);
  // }

  notify(data: T) {
    this.observers.forEach((observer) => observer(data));
  }
}
