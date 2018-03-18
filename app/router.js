import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});
//hey, comment
Router.map(function() {
});

export default Router;
