import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'section',
  classNames: ['column'],

  actions: {
    userInfo() {
      let firstName = this.get('user.firstName');
      let lastName = this.get('user.lastName');
      alert(`This is: ${firstName} ${lastName}`);
    }
  }
});
