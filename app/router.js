import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('all', {paths:'/'});
  this.route('undo');
  this.route('done');
  this.route('trash');
});

export default Router;
