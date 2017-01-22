import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('bookmarks');
  this.route('bookmark', {path: '/bookmark/:bookmark_id'});
  this.route('tags');
  this.route('tag', {path: '/tag/:tag_id'});
});

export default Router;
