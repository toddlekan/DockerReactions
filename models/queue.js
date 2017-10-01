const bookshelf = require('../db')
require('./event')

module.exports = bookshelf.model('Queue', {
  tableName: 'queue',
  event: function() {
    return this.belongsTo('Event');
  }
})
