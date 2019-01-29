'use strict';
module.exports = function(app) {
    var person = require('../controllers/personControllers');

    app.route('/persons')
        .get(person.persons_all)
        .post(person.create_persons);

    app.route('/persons/:personsId')
        .get(person.read_persons)
        .put(person.update_persons)
        .delete(person.delete_persons);
    
};