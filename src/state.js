export class CountStore {
  constructor(count) {
    this.count = count;
  }
  inc = () => {
    this.count++;
  };
  sub = () => {
    this.count--;
  };
}
