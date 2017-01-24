import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    console.log(params);
    return Ember.RSVP.hash({
      tag: this.get('store').find('tag', params.tag_id)
    })
  }
});
