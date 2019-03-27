import Component from '@ember/component';
import computedStyle from 'ember-computed-style';

const randomRange = (min, max) => Math.floor(Math.random() * (max - min) + min)

const minRange = 10
const maxRange = 100
const binsPerValue = []

for (let i = minRange; i < maxRange; i++) {
  binsPerValue[i] = Math.abs((maxRange - minRange) / 2 - i) * randomRange(50, 100)
}

export default Component.extend({
  minRange,
  maxRange,
  binsPerValue,
  range: [minRange, maxRange],

  init() {
    this._super(...arguments);
    // this.filter('').then((allResults) => {
    //   this.set('results', allResults.results);
    // });
  },

  actions: {
    handleFilterEntry() {
      // let filterInputValue = this.value;
      // let filterAction = this.filter;
      // filterAction(filterInputValue).then((filterResults) => {
      //   if (filterResults.query === this.value) {
      //     this.set('results', filterResults.results);
      //   }
      // });
    }
  }
});
