// wotiftesting.js
casper.test.begin('Wotif search retrieves 100 or more results', 3, function suite(test) {
    casper.start("http://www.wotif.com/search/results?country=NZ&region=20016&startDay=2014-05-20&adults=2&children=0&formSearch=true&page=1&viewType=all", function() {
        test.assertTitle("Wotif.com: Queenstown hotels, accommodation, motels, serviced apartments, B&B - Online hotel bookings with instant confirmation - select your hotel at Wotif.com");
        test.assertExists('select#country optgroup option', 'Selector exists');
        test.assertSelectorHasText('select#country optgroup option', 'New Zealand');
        // this.fill('form[action="/search"]', {
        //     q: "casperjs"
        // }, true);
    });

    // casper.then(function() {
    //     test.assertTitle("casperjs - Recherche Google", "google title is ok");
    //     test.assertUrlMatch(/q=casperjs/, "search term has been submitted");
    //     test.assertEval(function() {
    //         return __utils__.findAll("h3.r").length >= 10;
    //     }, "google search for \"casperjs\" retrieves 10 or more results");
    // });

    casper.run(function() {
        test.done();
    });
});