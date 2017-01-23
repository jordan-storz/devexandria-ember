import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      tags: this.get('store').findAll('tag')
    })
  }
});
