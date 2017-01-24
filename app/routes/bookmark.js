import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return Ember.RSVP.hash({
      bookmark: this.get('store').find('bookmark', params.bookmark_id)
    })
  }
});
