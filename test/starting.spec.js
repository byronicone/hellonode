var assert = require('assert')
var lang = require('../controllers/lang.controller.js')

describe('Language controller', () => {
   it('should return a list of languages', () => {
      var languages = lang.getLanguages();
      assert.equal(languages[0], 'English');
   })
});
