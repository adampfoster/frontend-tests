var casper = require('casper').create();

casper.test.begin('assertField() tests', 1, function(test) {
    casper.start('http://www.google.fr/', function() {
        this.fill('form[name="gs"]', { q: 'plop' }, false);
        test.assertField('q', 'plop');
    }).run(function() {
        test.done();
    });
});

// Path usage with type 'css'
casper.test.begin('assertField() tests', 1, function(test) {
    casper.start('http://www.google.fr/', function() {
        this.fill('form[name="gs"]', { q: 'plop' }, false);
        test.assertField({type: 'css', path: '.q.foo'}, 'plop');
    }).run(function() {
        test.done();
    });
});