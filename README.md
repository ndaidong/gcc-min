# gcc-min
Just write scripts for Node.js environment, then build to use in the browsers.

[![NPM](https://badge.fury.io/js/gcc-min.svg)](https://badge.fury.io/js/gcc-min)
[![Build Status](https://travis-ci.org/ndaidong/gcc-min.svg?branch=master)](https://travis-ci.org/ndaidong/gcc-min)
[![codecov](https://codecov.io/gh/ndaidong/gcc-min/branch/master/graph/badge.svg)](https://codecov.io/gh/ndaidong/gcc-min)
[![Dependency Status](https://gemnasium.com/badges/github.com/ndaidong/gcc-min.svg)](https://gemnasium.com/github.com/ndaidong/gcc-min)
[![NSP Status](https://nodesecurity.io/orgs/techpush/projects/1423652f-9450-40d0-9df6-1d54b2312441/badge)](https://nodesecurity.io/orgs/techpush/projects/1423652f-9450-40d0-9df6-1d54b2312441)


## Usage

Install:

```
npm install gcc-min
```

Run command to build:

```
gccmin --entry entryFile --name moduleName --output outputDir --package pathToPackageJSONFile

// or
gccmin -e entryFile -n moduleName -o outputDir -p pathToPackageJSONFile
```

Or Node APIs

```
var gccmin = require('gcc-min');

gccmin.build(path entryFile, String moduleName, path outputDir, Object config);

```

`config` is a JavaScript object which contain the meta data info to insert into the output files. It may be extracted from package.json file.


The config object must provide the following properties:

```
{
  name: String,
  version: String in semver format, e.g: '1.2.3'
  author: String,
  repository: Object {
    type: 'git',
    url: "https://github.com/username/reponame"
  },
  license: String
}

```


## Test

```
git clone https://github.com/ndaidong/gcc-min.git
cd gcc-min
npm install
npm test
```

# License

The MIT License (MIT)
