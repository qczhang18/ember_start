import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return ['Steve Woz', 'Zuckerberg', 'Larry Page'];
  }
});
