import DS from 'ember-data';

export default DS.Model.extend({
  url: DS.attr('string'),
  domain: DS.attr('string'),
  language: DS.attr('string'),
  title: DS.attr('string'),
  date: DS.attr('date'),
  description: DS.attr('string')
});
