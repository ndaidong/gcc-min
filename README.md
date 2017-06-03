# gcc-min
Just write scripts for Node.js environment, then build to use in the browsers.

[![NPM](https://badge.fury.io/js/gcc-min.svg)](https://badge.fury.io/js/gcc-min)
[![Build Status](https://travis-ci.org/ndaidong/gcc-min.svg?branch=master)](https://travis-ci.org/ndaidong/gcc-min)
[![Coverage Status](https://coveralls.io/repos/github/ndaidong/gcc-min/badge.svg?branch=master)](https://coveralls.io/github/ndaidong/gcc-min?branch=master)
[![Dependency Status](https://gemnasium.com/badges/github.com/ndaidong/gcc-min.svg)](https://gemnasium.com/github.com/ndaidong/gcc-min)
[![NSP Status](https://nodesecurity.io/orgs/techpush/projects/1423652f-9450-40d0-9df6-1d54b2312441/badge)](https://nodesecurity.io/orgs/techpush/projects/1423652f-9450-40d0-9df6-1d54b2312441)


# Usage

```
npm install gcc-min --save-dev

// command
gccmin --entry entryFile --name moduleName --output outputDir --package pathToPackageJSONFile

// or
gccmin -e entryFile -n moduleName -o outputDir -p pathToPackageJSONFile
```


# Test

```
git clone https://github.com/ndaidong/gcc-min.git
cd gcc-min
npm install
npm test
```

# License

The MIT License (MIT)
