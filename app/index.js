'use strict';
const Generator = require('yeoman-generator');
const yosay = require('yosay');

module.exports = class extends Generator {

  constructor(args, opts) {
    // Calling the super constructor is important so our generator is correctly set up
    super(args, opts);

    // Next, add your custom code
    this.option('babel'); // This method adds support for a `--babel` flag
  }

  initializing() {
    this.pkg = require('../package.json');
  }

  configuring() {
    this.fs.copy(
      this.templatePath('.editorconfig'),
      this.destinationPath('.editorconfig')
    );

    this.fs.copy(
      this.templatePath('.nvmrc'),
      this.destinationPath('.nvmrc')
    );

    this.fs.copy(
      this.templatePath('.env'),
      this.destinationPath('.env')
    );

    this.fs.copy(
      this.templatePath('.eslintignore'),
      this.destinationPath('.eslintignore')
    );

    this.fs.copy(
      this.templatePath('.eslintrc.yml'),
      this.destinationPath('.eslintrc.yml')
    );

    this.fs.copy(
      this.templatePath('config'),
      this.destinationPath('config')
    );

    this.fs.copy(
      this.templatePath('package.json'),
      this.destinationPath('package.json')
    );
  }

  writing() {
    this.fs.copy(
      this.templatePath('index.js'),
      this.destinationPath('index.js')
    );

    this.fs.copy(
      this.templatePath('src'),
      this.destinationPath('src')
    );
  }

  install() {
    this.installDependencies({
      skipInstall: this.options['skip-install']
    });
  }

  end() {
    yosay(`Your app is already created.`);
  }
};
