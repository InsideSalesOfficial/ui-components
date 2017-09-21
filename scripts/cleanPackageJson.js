var path = require('path');
var fse = require('fs-extra');

function createPackageFile() {
  return new Promise((resolve) => {
    fse.readFile(path.resolve(__dirname, '../package.json'), 'utf8', (err, data) => {
      if (err) {
        throw err;
      }

      resolve(data);
    });
  })
  .then((data) => JSON.parse(data))
  .then((packageData) => {
    const {
      name,
      description,
      homepage,
      repository,
      version,
      main,
      engines,
      author,
      license,
      bugs,
      keywords,
      dependencies,
      peerDependencies,
      scripts
    } = packageData;

    const minimalPackage = {
      name: 'insidesales-components',
      description,
      homepage,
      repository,
      version,
      main,
      engines,
      author,
      license,
      bugs,
      keywords,
      dependencies,
      peerDependencies,
      scripts: {
        'semantic-release': scripts['semantic-release']
      }
    };

    return new Promise((resolve) => {
      const libPath = path.resolve(__dirname, '../package.json');
      const data = JSON.stringify(minimalPackage, null, 2);
      fse.writeFile(libPath, data, (err) => {
        if (err) throw (err);
        console.log(`Created package.json in ${libPath}`);
        resolve();
      });
    });
  });
}

createPackageFile();