'use strict';
const Generator = require('yeoman-generator');
const path = require('path');
const fs = require('fs')

module.exports = class extends Generator {
  constructor(args, opts) {
    // Calling the super constructor is important so our generator is correctly set up
    super(args, opts);

    // Next, add your custom code
    this.option('babel'); // This method adds support for a `--babel` flag
  }

  initializing() {
    this.argument('name', {
      required: true,
      type: String,
      desc: 'Creates a new REST resource'
    });
  }

  writing() {
    var resourceName = this.arguments[0];

    fs.mkdir('src/resources/' + resourceName);
    
    this.fs.copy(
      this.templatePath('_resource/index.js'),
      this.destinationPath('src/resources/' + resourceName + '/index.js'),{
        process :  function (input) {
            var output = input.toString('utf-8')
                              .replace('{{RESOURCE_NAME}}', resourceName)
                              .replace('{{RESOURCE_NAME}}', resourceName);        
            return output;
          }
      }
    );

    this.fs.copy(
      this.templatePath('_resource/controller.js'),
      this.destinationPath('src/resources/' + resourceName + '/' + resourceName + '.controller.js')
    );


    this.fs.copy(
      this.templatePath('_resource/spec.js'),
      this.destinationPath('src/resources/' + resourceName + '/' + resourceName + '.spec.js'),{
        process :  function (input) {
            var output = input.toString('utf-8')
                              .replace('{{RESOURCE_NAME}}', resourceName)  
                              .replace('{{RESOURCE_NAME}}', resourceName);    
            return output;
        }
      }
    );
  }
};


function rewriteFile (args) {
  args.path = args.path || process.cwd();
  var fullPath = path.join(args.path, args.file);

  args.haystack = fs.readFileSync(fullPath, 'utf8');
  var body = rewrite(args);

  fs.writeFileSync(fullPath, body);
}

function escapeRegExp (str) {
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
}

function rewrite (args) {
  // check if splicable is already in the body text
  var re = new RegExp(args.splicable.map(function (line) {
    return '\s*' + escapeRegExp(line);
  }).join('\n'));

  if (re.test(args.haystack)) {
    return args.haystack;
  }

  var lines = args.haystack.split('\n');

  var otherwiseLineIndex = -1;
  lines.forEach(function (line, i) {
    if (line.indexOf(args.needle) !== -1) {
      otherwiseLineIndex = i;
    }
  });
  if(otherwiseLineIndex === -1) return lines.join('\n');

  var spaces = 0;
  while (lines[otherwiseLineIndex].charAt(spaces) === ' ') {
    spaces += 1;
  }

  var spaceStr = '';
  while ((spaces -= 1) >= 0) {
    spaceStr += ' ';
  }

  lines.splice(otherwiseLineIndex + 1, 0, args.splicable.map(function (line) {
    return spaceStr + line;
  }).join('\n'));

  return lines.join('\n');
}