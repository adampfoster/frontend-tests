# Run with casperjs test codeshiptest.coffee

casper = require('casper').create()
 
casper.start "https://www.codeship.io/", ->
  @.clickLabel "Blog", "a" 
  @.then ->
    @.test.assertUrlMatch "http://blog.codeship.io"
 
casper.run ->
  @.test.done(1)