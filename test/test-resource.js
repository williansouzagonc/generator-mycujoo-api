'use strict';

const path = require('path');
const helpers = require('yeoman-test');
const assert = require('yeoman-assert');
const fs = require('fs');
const os = require('os');

describe('mycujoo-api:resource', function () {
  it('creates files', function () {
    helpers.run(path.join(__dirname, '../app'))
      .inTmpDir(dir => {
        fs.copyFileSync(path.join(__dirname, './temp-test'), dir)
      })
      .withOptions({ 'skip-install': true })
      .then(() => {
        assert.file([
          'src/resources/test_resource_name/index.js',
          'src/resources/test_resource_name/test_resource_name.controller.js',
          'src/resources/test_resource_name/test_resource_name.spec.js',
        ]);
      })
  });

  it('replaces {{RESOURCE_NAME}} in spec file with promped value', function () {
      var rootController = fs.readFileSync(path.join(os.tmpdir(), './temp-test') + '/src/resources/test_resource_name/test_resource_name.spec.js', 'utf-8');
      assert(rootController.indexOf('test_resource_name') !== -1, true);
  });


  it('replaces {{RESOURCE_NAME}} in index file with promped value', function () {
      var rootController = fs.readFileSync(path.join(os.tmpdir(), './temp-test') + '/src/resources/test_resource_name/index.js', 'utf-8');
      assert(rootController.indexOf('test_resource_name') !== -1, true);
  });
});
