'use strict';

const path = require('path');
const helpers = require('yeoman-test');
const assert = require('yeoman-assert');
const fs = require('fs');

describe('mycujoo-api:app', function () {
  it('creates project files', function () {
    helpers.run(path.join(__dirname, '../app'))
      .inTmpDir(dir => {
        fs.copyFileSync(path.join(__dirname, './temp-test'), dir)
      })
      .withOptions({ 'skip-install': true })
      .withPrompts({
        name: 'Test API TEST',
      })
      .then(() => {
        assert.file([
          '.editorconfig',
          '.eslint',
          '.nvmrc',
          '.env',
          '.eslintignore',
          '.eslintrc.yml',
          'package.json',
          'index.js',
          'src/server.js',
          'src/routes.js',
          'src/config/index.js',
          'src/config/development.js',
          'src/config/test.js',
          'src/config/production.js',
          'src/resources/root/index.js',
          'src/resources/root/root.controller.js',
          'src/resources/root/root.spec.js',
        ]);
      })
  });
});
