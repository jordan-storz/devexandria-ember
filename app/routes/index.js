import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    console.log('fetching model in index');
    return this.get('store').findAll('tag');
  }
});
