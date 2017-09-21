var path = require('path');
var fse = require('fs-extra');
var glob = require('glob');
var minimatch = require("minimatch")

glob('src/components/**/*.css', {
  ignore: [
    'src/components/styles/**/*.css'
  ]
}, (er, files) => {
  
  let filesToCopy = [
    'src/components/styles/fonts'
  ];

  if(files.length) {
    filesToCopy = [
      ...filesToCopy,
      ...files
    ];
  }

  Promise.all(
    filesToCopy.map((file) => copyFile(file))
  );
  
  function copyFile(file) {
    let libPath = resolveBuildPath(file);
  
    if(file === 'src/components/styles/fonts') {
      libPath = path.resolve(__dirname, '../lib/styles', path.basename(file));
    }

    const fileIsModuleCss = minimatch(file, 'src/components/**/*.css');
    
    if(fileIsModuleCss) {
      const fileDirectories = file.split('/');
      libPath = path.resolve(__dirname, `../lib/${fileDirectories[2]}`, path.basename(file));
    }
  
    return new Promise((resolve) => {
      fse.copy(
        file,
        libPath,
        (err) => {
          if (err) throw err;
          resolve();
        }
      );
    })
    .then(() => console.log(`Copied ${file} to ${libPath}`));
  }
  
  function resolveBuildPath(file) {
    return path.resolve(__dirname, '../lib/', path.basename(file));
  }
});