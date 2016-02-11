System.config({
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "es7.decorators",
      "es7.classProperties"
    ]
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  map: {
    "aurelia-templating-resources": "npm:aurelia-templating-resources@1.0.0-beta.1.1.1",
    "aurelia-tools": "npm:aurelia-tools@0.1.18",
    "babel": "npm:babel-core@5.8.35",
    "babel-eslint": "npm:babel-eslint@4.1.8",
    "babel-runtime": "npm:babel-runtime@5.8.35",
    "conventional-changelog": "npm:conventional-changelog@0.0.11",
    "core-js": "npm:core-js@1.2.6",
    "del": "npm:del@1.2.1",
    "gulp": "npm:gulp@3.9.1",
    "gulp-babel": "npm:gulp-babel@5.3.0",
    "gulp-bump": "npm:gulp-bump@0.1.13",
    "gulp-eslint": "npm:gulp-eslint@1.1.1",
    "gulp-yuidoc": "npm:gulp-yuidoc@0.1.2",
    "jasmine-core": "npm:jasmine-core@2.4.1",
    "karma": "npm:karma@0.12.37",
    "karma-babel-preprocessor": "npm:karma-babel-preprocessor@5.2.2",
    "karma-chrome-launcher": "npm:karma-chrome-launcher@0.1.12",
    "karma-coverage": "npm:karma-coverage@0.3.1",
    "karma-jasmine": "npm:karma-jasmine@0.3.7",
    "karma-jspm": "npm:karma-jspm@2.0.2",
    "object.assign": "npm:object.assign@1.1.1",
    "require-dir": "npm:require-dir@0.1.0",
    "run-sequence": "npm:run-sequence@1.1.5",
    "traceur": "github:jmcriffey/bower-traceur@0.0.92",
    "traceur-runtime": "github:jmcriffey/bower-traceur-runtime@0.0.92",
    "vinyl-paths": "npm:vinyl-paths@1.0.0",
    "yargs": "npm:yargs@2.3.0",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-constants@0.1.0": {
      "constants-browserify": "npm:constants-browserify@0.0.1"
    },
    "github:jspm/nodelibs-crypto@0.1.0": {
      "crypto-browserify": "npm:crypto-browserify@3.11.0"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-https@0.1.0": {
      "https-browserify": "npm:https-browserify@0.0.0"
    },
    "github:jspm/nodelibs-net@0.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "timers": "github:jspm/nodelibs-timers@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-querystring@0.1.0": {
      "querystring": "npm:querystring@0.2.0"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-string_decoder@0.1.0": {
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "github:jspm/nodelibs-timers@0.1.0": {
      "timers-browserify": "npm:timers-browserify@1.4.2"
    },
    "github:jspm/nodelibs-tty@0.1.0": {
      "tty-browserify": "npm:tty-browserify@0.0.0"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "github:jspm/nodelibs-zlib@0.1.0": {
      "browserify-zlib": "npm:browserify-zlib@0.1.4"
    },
    "npm:abbrev@1.0.7": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:accepts@1.2.13": {
      "mime-types": "npm:mime-types@2.1.9",
      "negotiator": "npm:negotiator@0.5.3"
    },
    "npm:accepts@1.3.1": {
      "mime-types": "npm:mime-types@2.1.9",
      "negotiator": "npm:negotiator@0.6.0"
    },
    "npm:active-x-obfuscator@0.0.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "zeparser": "npm:zeparser@0.0.5"
    },
    "npm:align-text@0.1.4": {
      "kind-of": "npm:kind-of@3.0.2",
      "longest": "npm:longest@1.0.1",
      "repeat-string": "npm:repeat-string@1.5.2"
    },
    "npm:amdefine@1.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:ansi@0.3.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "tty": "github:jspm/nodelibs-tty@0.1.0"
    },
    "npm:anymatch@1.3.0": {
      "arrify": "npm:arrify@1.0.1",
      "micromatch": "npm:micromatch@2.3.7",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:are-we-there-yet@1.0.6": {
      "delegates": "npm:delegates@1.0.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "readable-stream": "npm:readable-stream@1.1.13",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:argparse@1.0.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "sprintf-js": "npm:sprintf-js@1.0.3",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:arr-diff@2.0.0": {
      "arr-flatten": "npm:arr-flatten@1.0.1"
    },
    "npm:array-union@1.0.1": {
      "array-uniq": "npm:array-uniq@1.0.2"
    },
    "npm:asn1.js@4.4.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "bn.js": "npm:bn.js@4.10.3",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:asn1@0.1.11": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "sys": "github:jspm/nodelibs-util@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:assert-plus@0.1.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:async@0.2.10": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:async@1.5.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:aurelia-binding@1.0.0-beta.1.1.3": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.1.4",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.1.1",
      "core-js": "npm:core-js@2.1.0"
    },
    "npm:aurelia-dependency-injection@1.0.0-beta.1.1.3": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.1.4",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1",
      "core-js": "npm:core-js@2.1.0"
    },
    "npm:aurelia-loader@1.0.0-beta.1.1.1": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.1.4",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.1.0"
    },
    "npm:aurelia-metadata@1.0.0-beta.1.1.4": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1",
      "core-js": "npm:core-js@2.1.0"
    },
    "npm:aurelia-task-queue@1.0.0-beta.1.1.1": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1"
    },
    "npm:aurelia-templating-resources@1.0.0-beta.1.1.1": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.1.3",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.1.3",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.1.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.1.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.1.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.1.1",
      "core-js": "npm:core-js@2.1.0"
    },
    "npm:aurelia-templating@1.0.0-beta.1.1.1": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.1.3",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.1.3",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.1.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.1.4",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.1.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.1.1",
      "core-js": "npm:core-js@2.1.0"
    },
    "npm:aurelia-tools@0.1.18": {
      "breeze-dag": "npm:breeze-dag@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "sys": "github:jspm/nodelibs-util@0.1.0",
      "through2": "npm:through2@2.0.1"
    },
    "npm:aws-sign@0.3.0": {
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:babel-eslint@4.1.8": {
      "acorn-to-esprima": "npm:acorn-to-esprima@1.0.7",
      "babel-core": "npm:babel-core@5.8.35",
      "lodash.assign": "npm:lodash.assign@3.2.0",
      "lodash.pick": "npm:lodash.pick@3.1.0",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:babel-runtime@5.8.35": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:base64-url@1.2.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:base64id@0.1.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:basic-auth-connect@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:basic-auth@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:batch@0.5.3": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:beeper@1.1.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:binary-extensions@1.4.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:block-stream@0.0.8": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:bn.js@4.10.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:body-parser@1.13.3": {
      "bytes": "npm:bytes@2.1.0",
      "content-type": "npm:content-type@1.0.1",
      "debug": "npm:debug@2.2.0",
      "depd": "npm:depd@1.0.1",
      "http-errors": "npm:http-errors@1.3.1",
      "iconv-lite": "npm:iconv-lite@0.4.11",
      "on-finished": "npm:on-finished@2.3.0",
      "qs": "npm:qs@4.0.0",
      "raw-body": "npm:raw-body@2.1.5",
      "type-is": "npm:type-is@1.6.11",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:boom@0.4.2": {
      "hoek": "npm:hoek@0.9.1",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:brace-expansion@1.1.3": {
      "balanced-match": "npm:balanced-match@0.3.0",
      "concat-map": "npm:concat-map@0.0.1"
    },
    "npm:braces@1.8.3": {
      "expand-range": "npm:expand-range@1.8.1",
      "preserve": "npm:preserve@0.2.0",
      "repeat-element": "npm:repeat-element@1.1.2"
    },
    "npm:breeze-dag@0.1.0": {
      "breeze-queue": "npm:breeze-queue@0.1.0",
      "gaia-tsort": "npm:gaia-tsort@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:breeze-nexttick@0.2.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:breeze-queue@0.1.0": {
      "breeze-nexttick": "npm:breeze-nexttick@0.2.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:browserify-aes@1.0.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "buffer-xor": "npm:buffer-xor@1.0.3",
      "cipher-base": "npm:cipher-base@1.0.2",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:browserify-cipher@1.0.0": {
      "browserify-aes": "npm:browserify-aes@1.0.6",
      "browserify-des": "npm:browserify-des@1.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
    },
    "npm:browserify-des@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cipher-base": "npm:cipher-base@1.0.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "des.js": "npm:des.js@1.0.0",
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:browserify-rsa@4.0.0": {
      "bn.js": "npm:bn.js@4.10.3",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "randombytes": "npm:randombytes@2.0.2"
    },
    "npm:browserify-sign@4.0.0": {
      "bn.js": "npm:bn.js@4.10.3",
      "browserify-rsa": "npm:browserify-rsa@4.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "create-hmac": "npm:create-hmac@1.1.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.2.3",
      "inherits": "npm:inherits@2.0.1",
      "parse-asn1": "npm:parse-asn1@5.0.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:browserify-zlib@0.1.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "pako": "npm:pako@0.2.8",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@2.0.5",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:buffer-crc32@0.1.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:buffer-crc32@0.2.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:buffer-xor@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.6",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:bufferstreams@1.1.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "readable-stream": "npm:readable-stream@2.0.5",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:builtin-modules@1.1.1": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:camelcase-keys@2.0.0": {
      "camelcase": "npm:camelcase@2.1.0",
      "map-obj": "npm:map-obj@1.0.1"
    },
    "npm:center-align@0.1.3": {
      "align-text": "npm:align-text@0.1.4",
      "lazy-cache": "npm:lazy-cache@1.0.3"
    },
    "npm:chalk@0.4.0": {
      "ansi-styles": "npm:ansi-styles@1.0.0",
      "has-color": "npm:has-color@0.1.7",
      "strip-ansi": "npm:strip-ansi@0.1.1"
    },
    "npm:chalk@0.5.1": {
      "ansi-styles": "npm:ansi-styles@1.1.0",
      "escape-string-regexp": "npm:escape-string-regexp@1.0.4",
      "has-ansi": "npm:has-ansi@0.1.0",
      "strip-ansi": "npm:strip-ansi@0.3.0",
      "supports-color": "npm:supports-color@0.2.0"
    },
    "npm:chalk@1.1.1": {
      "ansi-styles": "npm:ansi-styles@2.1.0",
      "escape-string-regexp": "npm:escape-string-regexp@1.0.4",
      "has-ansi": "npm:has-ansi@2.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "strip-ansi": "npm:strip-ansi@3.0.0",
      "supports-color": "npm:supports-color@2.0.0"
    },
    "npm:chokidar@1.4.2": {
      "anymatch": "npm:anymatch@1.3.0",
      "async-each": "npm:async-each@0.1.6",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "fsevents": "npm:fsevents@1.0.7",
      "glob-parent": "npm:glob-parent@2.0.0",
      "inherits": "npm:inherits@2.0.1",
      "is-binary-path": "npm:is-binary-path@1.0.1",
      "is-glob": "npm:is-glob@2.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-is-absolute": "npm:path-is-absolute@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readdirp": "npm:readdirp@2.0.0"
    },
    "npm:cipher-base@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0"
    },
    "npm:cli-cursor@1.0.2": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "restore-cursor": "npm:restore-cursor@1.0.1"
    },
    "npm:cli-width@1.1.1": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "tty": "github:jspm/nodelibs-tty@0.1.0"
    },
    "npm:cliui@2.1.0": {
      "center-align": "npm:center-align@0.1.3",
      "right-align": "npm:right-align@0.1.3",
      "wordwrap": "npm:wordwrap@0.0.2"
    },
    "npm:clone-stats@0.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:clone@0.2.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:clone@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:code-point-at@1.0.0": {
      "number-is-nan": "npm:number-is-nan@1.0.0"
    },
    "npm:colors@0.6.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:colors@1.1.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:combined-stream@0.0.7": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "delayed-stream": "npm:delayed-stream@0.0.5",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:commander@0.6.1": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "tty": "github:jspm/nodelibs-tty@0.1.0"
    },
    "npm:commander@2.1.0": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:compressible@2.0.7": {
      "mime-db": "npm:mime-db@1.21.0"
    },
    "npm:compression@1.5.2": {
      "accepts": "npm:accepts@1.2.13",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "bytes": "npm:bytes@2.1.0",
      "compressible": "npm:compressible@2.0.7",
      "debug": "npm:debug@2.2.0",
      "on-headers": "npm:on-headers@1.0.1",
      "vary": "npm:vary@1.0.1",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:concat-stream@1.5.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@2.0.5",
      "typedarray": "npm:typedarray@0.0.6"
    },
    "npm:connect-timeout@1.6.2": {
      "debug": "npm:debug@2.2.0",
      "http-errors": "npm:http-errors@1.3.1",
      "ms": "npm:ms@0.7.1",
      "on-headers": "npm:on-headers@1.0.1"
    },
    "npm:connect@2.30.2": {
      "basic-auth-connect": "npm:basic-auth-connect@1.0.0",
      "body-parser": "npm:body-parser@1.13.3",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "bytes": "npm:bytes@2.1.0",
      "compression": "npm:compression@1.5.2",
      "connect-timeout": "npm:connect-timeout@1.6.2",
      "content-type": "npm:content-type@1.0.1",
      "cookie": "npm:cookie@0.1.3",
      "cookie-parser": "npm:cookie-parser@1.3.5",
      "cookie-signature": "npm:cookie-signature@1.0.6",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "csurf": "npm:csurf@1.8.3",
      "debug": "npm:debug@2.2.0",
      "depd": "npm:depd@1.0.1",
      "errorhandler": "npm:errorhandler@1.4.3",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "express-session": "npm:express-session@1.11.3",
      "finalhandler": "npm:finalhandler@0.4.0",
      "fresh": "npm:fresh@0.3.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "http-errors": "npm:http-errors@1.3.1",
      "method-override": "npm:method-override@2.3.5",
      "morgan": "npm:morgan@1.6.1",
      "multiparty": "npm:multiparty@3.3.2",
      "on-headers": "npm:on-headers@1.0.1",
      "parseurl": "npm:parseurl@1.3.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "pause": "npm:pause@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "qs": "npm:qs@4.0.0",
      "response-time": "npm:response-time@2.3.1",
      "serve-favicon": "npm:serve-favicon@2.3.0",
      "serve-index": "npm:serve-index@1.7.3",
      "serve-static": "npm:serve-static@1.10.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "type-is": "npm:type-is@1.6.11",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "utils-merge": "npm:utils-merge@1.0.0",
      "vhost": "npm:vhost@3.0.2"
    },
    "npm:connect@2.7.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "buffer-crc32": "npm:buffer-crc32@0.1.1",
      "bytes": "npm:bytes@0.2.0",
      "cookie": "npm:cookie@0.0.5",
      "cookie-signature": "npm:cookie-signature@1.0.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "debug": "npm:debug@2.2.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "formidable": "npm:formidable@1.0.11",
      "fresh": "npm:fresh@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "pause": "npm:pause@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "qs": "npm:qs@0.5.1",
      "send": "npm:send@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:constants-browserify@0.0.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:conventional-changelog@0.0.11": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "event-stream": "npm:event-stream@3.1.7",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "lodash.assign": "npm:lodash.assign@2.4.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:cookie-jar@0.3.0": {
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:cookie-parser@1.3.5": {
      "cookie": "npm:cookie@0.1.3",
      "cookie-signature": "npm:cookie-signature@1.0.6"
    },
    "npm:cookie-signature@1.0.0": {
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:cookie-signature@1.0.6": {
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:core-js@1.2.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-js@2.1.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:crc@3.3.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:create-ecdh@4.0.0": {
      "bn.js": "npm:bn.js@4.10.3",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.2.3"
    },
    "npm:create-hash@1.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cipher-base": "npm:cipher-base@1.0.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "ripemd160": "npm:ripemd160@1.0.1",
      "sha.js": "npm:sha.js@2.4.4"
    },
    "npm:create-hmac@1.1.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:cryptiles@0.2.2": {
      "boom": "npm:boom@0.4.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:crypto-browserify@3.11.0": {
      "browserify-cipher": "npm:browserify-cipher@1.0.0",
      "browserify-sign": "npm:browserify-sign@4.0.0",
      "create-ecdh": "npm:create-ecdh@4.0.0",
      "create-hash": "npm:create-hash@1.1.2",
      "create-hmac": "npm:create-hmac@1.1.4",
      "diffie-hellman": "npm:diffie-hellman@5.0.2",
      "inherits": "npm:inherits@2.0.1",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "public-encrypt": "npm:public-encrypt@4.0.0",
      "randombytes": "npm:randombytes@2.0.2"
    },
    "npm:csrf@3.0.1": {
      "base64-url": "npm:base64-url@1.2.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "rndm": "npm:rndm@1.2.0",
      "scmp": "npm:scmp@1.0.0",
      "uid-safe": "npm:uid-safe@2.1.0"
    },
    "npm:csurf@1.8.3": {
      "cookie": "npm:cookie@0.1.3",
      "cookie-signature": "npm:cookie-signature@1.0.6",
      "csrf": "npm:csrf@3.0.1",
      "http-errors": "npm:http-errors@1.3.1"
    },
    "npm:ctype@0.5.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "sys": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:d@0.1.1": {
      "es5-ext": "npm:es5-ext@0.10.11"
    },
    "npm:dateformat@1.0.12": {
      "get-stdin": "npm:get-stdin@4.0.1",
      "meow": "npm:meow@3.7.0"
    },
    "npm:debug@2.2.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ms": "npm:ms@0.7.1",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "tty": "github:jspm/nodelibs-tty@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:decamelize@1.1.2": {
      "escape-string-regexp": "npm:escape-string-regexp@1.0.4"
    },
    "npm:deep-extend@0.4.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:defaults@1.0.3": {
      "clone": "npm:clone@1.0.2"
    },
    "npm:del@1.2.1": {
      "each-async": "npm:each-async@1.1.1",
      "globby": "npm:globby@2.1.0",
      "is-path-cwd": "npm:is-path-cwd@1.0.0",
      "is-path-in-cwd": "npm:is-path-in-cwd@1.0.0",
      "object-assign": "npm:object-assign@3.0.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "rimraf": "npm:rimraf@2.5.1"
    },
    "npm:del@2.2.0": {
      "globby": "npm:globby@4.0.0",
      "is-path-cwd": "npm:is-path-cwd@1.0.0",
      "is-path-in-cwd": "npm:is-path-in-cwd@1.0.0",
      "object-assign": "npm:object-assign@4.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "pify": "npm:pify@2.3.0",
      "pinkie-promise": "npm:pinkie-promise@2.0.0",
      "rimraf": "npm:rimraf@2.5.1"
    },
    "npm:delayed-stream@0.0.5": {
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:depd@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:depd@1.1.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:des.js@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
    },
    "npm:destroy@1.0.4": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:diffie-hellman@5.0.2": {
      "bn.js": "npm:bn.js@4.10.3",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "miller-rabin": "npm:miller-rabin@4.0.0",
      "randombytes": "npm:randombytes@2.0.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:doctrine@0.7.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "esutils": "npm:esutils@1.1.6",
      "isarray": "npm:isarray@0.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:duplexer2@0.0.2": {
      "readable-stream": "npm:readable-stream@1.1.13"
    },
    "npm:duplexer@0.1.1": {
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:each-async@1.1.1": {
      "onetime": "npm:onetime@1.1.0",
      "set-immediate-shim": "npm:set-immediate-shim@1.0.1"
    },
    "npm:elliptic@6.2.3": {
      "bn.js": "npm:bn.js@4.10.3",
      "brorand": "npm:brorand@1.0.5",
      "hash.js": "npm:hash.js@1.0.3",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:end-of-stream@0.1.5": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "once": "npm:once@1.3.3",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:error-ex@1.3.0": {
      "is-arrayish": "npm:is-arrayish@0.2.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:errorhandler@1.4.3": {
      "accepts": "npm:accepts@1.3.1",
      "escape-html": "npm:escape-html@1.0.3",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:es5-ext@0.10.11": {
      "es6-iterator": "npm:es6-iterator@2.0.0",
      "es6-symbol": "npm:es6-symbol@3.0.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:es6-iterator@2.0.0": {
      "d": "npm:d@0.1.1",
      "es5-ext": "npm:es5-ext@0.10.11",
      "es6-symbol": "npm:es6-symbol@3.0.2"
    },
    "npm:es6-map@0.1.3": {
      "d": "npm:d@0.1.1",
      "es5-ext": "npm:es5-ext@0.10.11",
      "es6-iterator": "npm:es6-iterator@2.0.0",
      "es6-set": "npm:es6-set@0.1.4",
      "es6-symbol": "npm:es6-symbol@3.0.2",
      "event-emitter": "npm:event-emitter@0.3.4"
    },
    "npm:es6-set@0.1.4": {
      "d": "npm:d@0.1.1",
      "es5-ext": "npm:es5-ext@0.10.11",
      "es6-iterator": "npm:es6-iterator@2.0.0",
      "es6-symbol": "npm:es6-symbol@3.0.2",
      "event-emitter": "npm:event-emitter@0.3.4"
    },
    "npm:es6-symbol@3.0.2": {
      "d": "npm:d@0.1.1",
      "es5-ext": "npm:es5-ext@0.10.11"
    },
    "npm:es6-weak-map@2.0.1": {
      "d": "npm:d@0.1.1",
      "es5-ext": "npm:es5-ext@0.10.11",
      "es6-iterator": "npm:es6-iterator@2.0.0",
      "es6-symbol": "npm:es6-symbol@3.0.2"
    },
    "npm:escodegen@1.7.1": {
      "esprima": "npm:esprima@1.2.5",
      "estraverse": "npm:estraverse@1.9.3",
      "esutils": "npm:esutils@2.0.2",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "optionator": "npm:optionator@0.5.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.2.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:escope@3.4.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "es6-map": "npm:es6-map@0.1.3",
      "es6-weak-map": "npm:es6-weak-map@2.0.1",
      "esrecurse": "npm:esrecurse@3.1.1",
      "estraverse": "npm:estraverse@4.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:eslint@1.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "chalk": "npm:chalk@1.1.1",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "concat-stream": "npm:concat-stream@1.5.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "debug": "npm:debug@2.2.0",
      "doctrine": "npm:doctrine@0.7.2",
      "escape-string-regexp": "npm:escape-string-regexp@1.0.4",
      "escope": "npm:escope@3.4.0",
      "espree": "npm:espree@2.2.5",
      "estraverse": "npm:estraverse@4.1.1",
      "estraverse-fb": "npm:estraverse-fb@1.3.1",
      "esutils": "npm:esutils@2.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "file-entry-cache": "npm:file-entry-cache@1.2.4",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "glob": "npm:glob@5.0.15",
      "globals": "npm:globals@8.18.0",
      "handlebars": "npm:handlebars@4.0.5",
      "inquirer": "npm:inquirer@0.11.4",
      "is-my-json-valid": "npm:is-my-json-valid@2.12.4",
      "is-resolvable": "npm:is-resolvable@1.0.0",
      "js-yaml": "npm:js-yaml@3.4.5",
      "json-stable-stringify": "npm:json-stable-stringify@1.0.1",
      "lodash.clonedeep": "npm:lodash.clonedeep@3.0.2",
      "lodash.merge": "npm:lodash.merge@3.3.2",
      "lodash.omit": "npm:lodash.omit@3.1.0",
      "minimatch": "npm:minimatch@3.0.0",
      "mkdirp": "npm:mkdirp@0.5.1",
      "object-assign": "npm:object-assign@4.0.1",
      "optionator": "npm:optionator@0.6.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-is-absolute": "npm:path-is-absolute@1.0.0",
      "path-is-inside": "npm:path-is-inside@1.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "shelljs": "npm:shelljs@0.5.3",
      "strip-json-comments": "npm:strip-json-comments@1.0.4",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "text-table": "npm:text-table@0.2.0",
      "user-home": "npm:user-home@2.0.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "xml-escape": "npm:xml-escape@1.0.0"
    },
    "npm:espree@2.2.5": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:esprima@1.2.5": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:esprima@2.5.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:esprima@2.7.2": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:esrecurse@3.1.1": {
      "estraverse": "npm:estraverse@3.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:estraverse-fb@1.3.1": {
      "estraverse": "npm:estraverse@4.1.1"
    },
    "npm:estraverse@3.1.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:estraverse@4.1.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:etag@1.7.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:event-emitter@0.3.4": {
      "d": "npm:d@0.1.1",
      "es5-ext": "npm:es5-ext@0.10.11",
      "events": "github:jspm/nodelibs-events@0.1.1"
    },
    "npm:event-stream@3.1.7": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "duplexer": "npm:duplexer@0.1.1",
      "from": "npm:from@0.1.3",
      "map-stream": "npm:map-stream@0.1.0",
      "pause-stream": "npm:pause-stream@0.0.11",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "split": "npm:split@0.2.10",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "stream-combiner": "npm:stream-combiner@0.0.4",
      "through": "npm:through@2.3.8",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:evp_bytestokey@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:exit-hook@1.1.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:expand-range@1.8.1": {
      "fill-range": "npm:fill-range@2.2.3"
    },
    "npm:express-session@1.11.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cookie": "npm:cookie@0.1.3",
      "cookie-signature": "npm:cookie-signature@1.0.6",
      "crc": "npm:crc@3.3.0",
      "debug": "npm:debug@2.2.0",
      "depd": "npm:depd@1.0.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "on-headers": "npm:on-headers@1.0.1",
      "parseurl": "npm:parseurl@1.3.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "uid-safe": "npm:uid-safe@2.0.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "utils-merge": "npm:utils-merge@1.0.0"
    },
    "npm:express@3.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "buffer-crc32": "npm:buffer-crc32@0.2.5",
      "commander": "npm:commander@0.6.1",
      "connect": "npm:connect@2.7.5",
      "cookie": "npm:cookie@0.0.5",
      "cookie-signature": "npm:cookie-signature@1.0.0",
      "debug": "npm:debug@2.2.0",
      "fresh": "npm:fresh@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "methods": "npm:methods@0.0.1",
      "mkdirp": "npm:mkdirp@0.3.5",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "range-parser": "npm:range-parser@0.0.4",
      "send": "npm:send@0.1.0"
    },
    "npm:extglob@0.3.2": {
      "is-extglob": "npm:is-extglob@1.0.0"
    },
    "npm:fancy-log@1.2.0": {
      "chalk": "npm:chalk@1.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "time-stamp": "npm:time-stamp@1.0.0"
    },
    "npm:figures@1.4.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:file-entry-cache@1.2.4": {
      "flat-cache": "npm:flat-cache@1.0.10",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "object-assign": "npm:object-assign@4.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:fileset@0.2.1": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "glob": "npm:glob@5.0.15",
      "minimatch": "npm:minimatch@2.0.10",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:fill-range@2.2.3": {
      "is-number": "npm:is-number@2.1.0",
      "isobject": "npm:isobject@2.0.0",
      "randomatic": "npm:randomatic@1.1.5",
      "repeat-element": "npm:repeat-element@1.1.2",
      "repeat-string": "npm:repeat-string@1.5.2"
    },
    "npm:finalhandler@0.4.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "debug": "npm:debug@2.2.0",
      "escape-html": "npm:escape-html@1.0.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "on-finished": "npm:on-finished@2.3.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "unpipe": "npm:unpipe@1.0.0"
    },
    "npm:find-up@1.1.0": {
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-exists": "npm:path-exists@2.1.0",
      "pinkie-promise": "npm:pinkie-promise@2.0.0"
    },
    "npm:findup-sync@0.3.0": {
      "glob": "npm:glob@5.0.15",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:first-chunk-stream@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:flagged-respawn@0.3.1": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:flat-cache@1.0.10": {
      "del": "npm:del@2.2.0",
      "graceful-fs": "npm:graceful-fs@4.1.3",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "read-json-sync": "npm:read-json-sync@1.1.1",
      "write": "npm:write@0.2.1"
    },
    "npm:for-own@0.1.3": {
      "for-in": "npm:for-in@0.1.4"
    },
    "npm:forever-agent@0.5.2": {
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "tls": "github:jspm/nodelibs-tls@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:form-data@0.0.8": {
      "async": "npm:async@0.2.10",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "combined-stream": "npm:combined-stream@0.0.7",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "mime": "npm:mime@1.2.11",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:formidable@1.0.11": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
      "sys": "github:jspm/nodelibs-util@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:from@0.1.3": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:fsevents@1.0.7": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "nan": "npm:nan@2.2.0",
      "node-pre-gyp": "npm:node-pre-gyp@0.6.21",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:fstream-ignore@1.0.3": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "fstream": "npm:fstream@1.0.8",
      "inherits": "npm:inherits@2.0.1",
      "minimatch": "npm:minimatch@3.0.0",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:fstream@1.0.8": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "graceful-fs": "npm:graceful-fs@4.1.3",
      "inherits": "npm:inherits@2.0.1",
      "mkdirp": "npm:mkdirp@0.5.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "rimraf": "npm:rimraf@2.5.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:gaia-tsort@0.1.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:gauge@1.2.5": {
      "ansi": "npm:ansi@0.3.1",
      "has-unicode": "npm:has-unicode@2.0.0",
      "lodash.pad": "npm:lodash.pad@3.3.0",
      "lodash.padleft": "npm:lodash.padleft@3.1.1",
      "lodash.padright": "npm:lodash.padright@3.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:gaze@0.5.2": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "globule": "npm:globule@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "timers": "github:jspm/nodelibs-timers@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:generate-function@2.0.0": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:generate-object-property@1.2.0": {
      "is-property": "npm:is-property@1.0.2"
    },
    "npm:get-stdin@4.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:glob-base@0.3.0": {
      "glob-parent": "npm:glob-parent@2.0.0",
      "is-glob": "npm:is-glob@2.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:glob-parent@2.0.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "is-glob": "npm:is-glob@2.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:glob-stream@3.1.18": {
      "glob": "npm:glob@4.5.3",
      "glob2base": "npm:glob2base@0.0.12",
      "minimatch": "npm:minimatch@2.0.10",
      "ordered-read-streams": "npm:ordered-read-streams@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "through2": "npm:through2@0.6.5",
      "unique-stream": "npm:unique-stream@1.0.0"
    },
    "npm:glob-watcher@0.0.6": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "gaze": "npm:gaze@0.5.2"
    },
    "npm:glob2base@0.0.12": {
      "find-index": "npm:find-index@0.1.1",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:glob@3.1.21": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "graceful-fs": "npm:graceful-fs@1.2.3",
      "inherits": "npm:inherits@1.0.2",
      "minimatch": "npm:minimatch@0.2.14",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:glob@3.2.11": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "minimatch": "npm:minimatch@0.3.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:glob@4.5.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inflight": "npm:inflight@1.0.4",
      "inherits": "npm:inherits@2.0.1",
      "minimatch": "npm:minimatch@2.0.10",
      "once": "npm:once@1.3.3",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:glob@5.0.15": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inflight": "npm:inflight@1.0.4",
      "inherits": "npm:inherits@2.0.1",
      "minimatch": "npm:minimatch@3.0.0",
      "once": "npm:once@1.3.3",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-is-absolute": "npm:path-is-absolute@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:glob@6.0.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inflight": "npm:inflight@1.0.4",
      "inherits": "npm:inherits@2.0.1",
      "minimatch": "npm:minimatch@3.0.0",
      "once": "npm:once@1.3.3",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-is-absolute": "npm:path-is-absolute@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:globals@8.18.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:globby@2.1.0": {
      "array-union": "npm:array-union@1.0.1",
      "async": "npm:async@1.5.2",
      "glob": "npm:glob@5.0.15",
      "object-assign": "npm:object-assign@3.0.0"
    },
    "npm:globby@4.0.0": {
      "array-union": "npm:array-union@1.0.1",
      "arrify": "npm:arrify@1.0.1",
      "glob": "npm:glob@6.0.4",
      "object-assign": "npm:object-assign@4.0.1",
      "pify": "npm:pify@2.3.0",
      "pinkie-promise": "npm:pinkie-promise@2.0.0"
    },
    "npm:globule@0.1.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "glob": "npm:glob@3.1.21",
      "lodash": "npm:lodash@1.0.2",
      "minimatch": "npm:minimatch@0.2.14",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:glogg@1.0.0": {
      "sparkles": "npm:sparkles@1.0.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:graceful-fs@1.2.3": {
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:graceful-fs@2.0.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:graceful-fs@3.0.8": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:graceful-fs@4.1.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:gulp-babel@5.3.0": {
      "babel-core": "npm:babel-core@5.8.35",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "gulp-util": "npm:gulp-util@3.0.7",
      "object-assign": "npm:object-assign@4.0.1",
      "replace-ext": "npm:replace-ext@0.0.1",
      "through2": "npm:through2@2.0.1",
      "vinyl-sourcemaps-apply": "npm:vinyl-sourcemaps-apply@0.2.1"
    },
    "npm:gulp-bump@0.1.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "gulp-util": "npm:gulp-util@3.0.7",
      "semver": "npm:semver@2.3.2",
      "through2": "npm:through2@0.5.1"
    },
    "npm:gulp-eslint@1.1.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "bufferstreams": "npm:bufferstreams@1.1.0",
      "eslint": "npm:eslint@1.10.3",
      "gulp-util": "npm:gulp-util@3.0.7",
      "object-assign": "npm:object-assign@4.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:gulp-util@2.2.20": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "chalk": "npm:chalk@0.5.1",
      "dateformat": "npm:dateformat@1.0.12",
      "lodash._reinterpolate": "npm:lodash._reinterpolate@2.4.1",
      "lodash.template": "npm:lodash.template@2.4.1",
      "minimist": "npm:minimist@0.2.0",
      "multipipe": "npm:multipipe@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "through2": "npm:through2@0.5.1",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "vinyl": "npm:vinyl@0.2.3"
    },
    "npm:gulp-util@3.0.7": {
      "array-differ": "npm:array-differ@1.0.0",
      "array-uniq": "npm:array-uniq@1.0.2",
      "beeper": "npm:beeper@1.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "chalk": "npm:chalk@1.1.1",
      "dateformat": "npm:dateformat@1.0.12",
      "fancy-log": "npm:fancy-log@1.2.0",
      "gulplog": "npm:gulplog@1.0.0",
      "has-gulplog": "npm:has-gulplog@0.1.0",
      "lodash._reescape": "npm:lodash._reescape@3.0.0",
      "lodash._reevaluate": "npm:lodash._reevaluate@3.0.0",
      "lodash._reinterpolate": "npm:lodash._reinterpolate@3.0.0",
      "lodash.template": "npm:lodash.template@3.6.2",
      "minimist": "npm:minimist@1.2.0",
      "multipipe": "npm:multipipe@0.1.2",
      "object-assign": "npm:object-assign@3.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "replace-ext": "npm:replace-ext@0.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "through2": "npm:through2@2.0.1",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "vinyl": "npm:vinyl@0.5.3"
    },
    "npm:gulp-yuidoc@0.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "chalk": "npm:chalk@0.4.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "gulp-util": "npm:gulp-util@2.2.20",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "text-table": "npm:text-table@0.2.0",
      "through2": "npm:through2@0.4.1",
      "vinyl-fs": "npm:vinyl-fs@0.1.4",
      "yuidocjs": "npm:yuidocjs@0.3.50"
    },
    "npm:gulp@3.9.1": {
      "archy": "npm:archy@1.0.0",
      "chalk": "npm:chalk@1.1.1",
      "deprecated": "npm:deprecated@0.0.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "gulp-util": "npm:gulp-util@3.0.7",
      "interpret": "npm:interpret@1.0.0",
      "liftoff": "npm:liftoff@2.2.0",
      "minimist": "npm:minimist@1.2.0",
      "orchestrator": "npm:orchestrator@0.3.7",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "pretty-hrtime": "npm:pretty-hrtime@1.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "semver": "npm:semver@4.3.6",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "tildify": "npm:tildify@1.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "v8flags": "npm:v8flags@2.0.11",
      "vinyl-fs": "npm:vinyl-fs@0.3.14"
    },
    "npm:gulplog@1.0.0": {
      "glogg": "npm:glogg@1.0.0"
    },
    "npm:handlebars@4.0.5": {
      "async": "npm:async@1.5.2",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "optimist": "npm:optimist@0.6.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.4.4",
      "uglify-js": "npm:uglify-js@2.6.1"
    },
    "npm:has-ansi@0.1.0": {
      "ansi-regex": "npm:ansi-regex@0.2.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:has-ansi@2.0.0": {
      "ansi-regex": "npm:ansi-regex@2.0.0"
    },
    "npm:has-color@0.1.7": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:has-flag@1.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:has-gulplog@0.1.0": {
      "sparkles": "npm:sparkles@1.0.0"
    },
    "npm:has-unicode@2.0.0": {
      "os": "github:jspm/nodelibs-os@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:hash.js@1.0.3": {
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:hawk@0.13.1": {
      "boom": "npm:boom@0.4.2",
      "cryptiles": "npm:cryptiles@0.2.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "hoek": "npm:hoek@0.8.5",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "sntp": "npm:sntp@0.2.4",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:hoek@0.8.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:hoek@0.9.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:hosted-git-info@2.1.4": {
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:http-errors@1.3.1": {
      "inherits": "npm:inherits@2.0.1",
      "statuses": "npm:statuses@1.2.1"
    },
    "npm:http-proxy@0.10.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "colors": "npm:colors@0.6.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "optimist": "npm:optimist@0.6.1",
      "pkginfo": "npm:pkginfo@0.3.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "utile": "npm:utile@0.2.1"
    },
    "npm:http-signature@0.9.11": {
      "asn1": "npm:asn1@0.1.11",
      "assert-plus": "npm:assert-plus@0.1.2",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "ctype": "npm:ctype@0.5.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:https-browserify@0.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:iconv-lite@0.4.11": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:iconv-lite@0.4.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:indent-string@2.1.0": {
      "repeating": "npm:repeating@2.0.0"
    },
    "npm:inflight@1.0.4": {
      "once": "npm:once@1.3.3",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "wrappy": "npm:wrappy@1.0.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:ini@1.3.4": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:inquirer@0.11.4": {
      "ansi-escapes": "npm:ansi-escapes@1.1.1",
      "ansi-regex": "npm:ansi-regex@2.0.0",
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "chalk": "npm:chalk@1.1.1",
      "cli-cursor": "npm:cli-cursor@1.0.2",
      "cli-width": "npm:cli-width@1.1.1",
      "figures": "npm:figures@1.4.0",
      "lodash": "npm:lodash@3.10.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readline2": "npm:readline2@1.0.1",
      "run-async": "npm:run-async@0.1.0",
      "rx-lite": "npm:rx-lite@3.1.2",
      "string-width": "npm:string-width@1.0.1",
      "strip-ansi": "npm:strip-ansi@3.0.0",
      "through": "npm:through@2.3.8",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:is-absolute@0.1.7": {
      "is-relative": "npm:is-relative@0.1.3"
    },
    "npm:is-binary-path@1.0.1": {
      "binary-extensions": "npm:binary-extensions@1.4.0",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:is-buffer@1.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:is-builtin-module@1.0.0": {
      "builtin-modules": "npm:builtin-modules@1.1.1"
    },
    "npm:is-equal-shallow@0.1.3": {
      "is-primitive": "npm:is-primitive@2.0.0"
    },
    "npm:is-finite@1.0.1": {
      "number-is-nan": "npm:number-is-nan@1.0.0"
    },
    "npm:is-fullwidth-code-point@1.0.0": {
      "number-is-nan": "npm:number-is-nan@1.0.0"
    },
    "npm:is-glob@2.0.1": {
      "is-extglob": "npm:is-extglob@1.0.0"
    },
    "npm:is-my-json-valid@2.12.4": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "generate-function": "npm:generate-function@2.0.0",
      "generate-object-property": "npm:generate-object-property@1.2.0",
      "jsonpointer": "npm:jsonpointer@2.0.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "xtend": "npm:xtend@4.0.1"
    },
    "npm:is-number@2.1.0": {
      "kind-of": "npm:kind-of@3.0.2"
    },
    "npm:is-path-cwd@1.0.0": {
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:is-path-in-cwd@1.0.0": {
      "is-path-inside": "npm:is-path-inside@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:is-path-inside@1.0.0": {
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-is-inside": "npm:path-is-inside@1.0.1"
    },
    "npm:is-resolvable@1.0.0": {
      "tryit": "npm:tryit@1.0.2"
    },
    "npm:isexe@1.1.2": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:isobject@2.0.0": {
      "isarray": "npm:isarray@0.0.1"
    },
    "npm:istanbul@0.3.22": {
      "abbrev": "npm:abbrev@1.0.7",
      "async": "npm:async@1.5.2",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "escodegen": "npm:escodegen@1.7.1",
      "esprima": "npm:esprima@2.5.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fileset": "npm:fileset@0.2.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "handlebars": "npm:handlebars@4.0.5",
      "js-yaml": "npm:js-yaml@3.4.5",
      "mkdirp": "npm:mkdirp@0.5.1",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "nopt": "npm:nopt@3.0.6",
      "once": "npm:once@1.3.3",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "resolve": "npm:resolve@1.1.7",
      "supports-color": "npm:supports-color@3.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0",
      "which": "npm:which@1.2.4",
      "wordwrap": "npm:wordwrap@1.0.0"
    },
    "npm:jasmine-core@2.4.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:js-yaml@3.4.5": {
      "argparse": "npm:argparse@1.0.6",
      "esprima": "npm:esprima@2.7.2",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:json-stable-stringify@1.0.1": {
      "jsonify": "npm:jsonify@0.0.0"
    },
    "npm:json-stringify-safe@4.0.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:jsonpointer@2.0.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:karma-babel-preprocessor@5.2.2": {
      "babel-core": "npm:babel-core@5.8.35",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:karma-chrome-launcher@0.1.12": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "which": "npm:which@1.2.4"
    },
    "npm:karma-coverage@0.3.1": {
      "dateformat": "npm:dateformat@1.0.12",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "istanbul": "npm:istanbul@0.3.22",
      "karma": "npm:karma@0.12.37",
      "minimatch": "npm:minimatch@0.3.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:karma-jasmine@0.3.7": {
      "jasmine-core": "npm:jasmine-core@2.4.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:karma-jspm@2.0.2": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "glob": "npm:glob@3.2.11",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:karma@0.12.37": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "chokidar": "npm:chokidar@1.4.2",
      "colors": "npm:colors@1.1.2",
      "connect": "npm:connect@2.30.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "di": "npm:di@0.0.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "glob": "npm:glob@5.0.15",
      "graceful-fs": "npm:graceful-fs@3.0.8",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "http-proxy": "npm:http-proxy@0.10.4",
      "lodash": "npm:lodash@3.10.1",
      "log4js": "npm:log4js@0.6.31",
      "mime": "npm:mime@1.3.4",
      "minimatch": "npm:minimatch@2.0.10",
      "optimist": "npm:optimist@0.6.1",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "q": "npm:q@1.4.1",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "readline": "github:jspm/nodelibs-readline@0.1.0",
      "rimraf": "npm:rimraf@2.5.1",
      "socket.io": "npm:socket.io@0.9.16",
      "source-map": "npm:source-map@0.4.4",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "useragent": "npm:useragent@2.1.8",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:kind-of@3.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "is-buffer": "npm:is-buffer@1.1.2"
    },
    "npm:lazy-cache@1.0.3": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:levn@0.2.5": {
      "prelude-ls": "npm:prelude-ls@1.1.2",
      "type-check": "npm:type-check@0.3.2"
    },
    "npm:liftoff@2.2.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "extend": "npm:extend@2.0.1",
      "findup-sync": "npm:findup-sync@0.3.0",
      "flagged-respawn": "npm:flagged-respawn@0.3.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "rechoir": "npm:rechoir@0.6.2",
      "resolve": "npm:resolve@1.1.7",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:load-json-file@1.1.0": {
      "graceful-fs": "npm:graceful-fs@4.1.3",
      "parse-json": "npm:parse-json@2.2.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "pify": "npm:pify@2.3.0",
      "pinkie-promise": "npm:pinkie-promise@2.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "strip-bom": "npm:strip-bom@2.0.0"
    },
    "npm:lodash._baseassign@3.2.0": {
      "lodash._basecopy": "npm:lodash._basecopy@3.0.1",
      "lodash.keys": "npm:lodash.keys@3.1.2"
    },
    "npm:lodash._basebind@2.4.1": {
      "lodash._basecreate": "npm:lodash._basecreate@2.4.1",
      "lodash._setbinddata": "npm:lodash._setbinddata@2.4.1",
      "lodash._slice": "npm:lodash._slice@2.4.1",
      "lodash.isobject": "npm:lodash.isobject@2.4.1"
    },
    "npm:lodash._baseclone@3.3.0": {
      "lodash._arraycopy": "npm:lodash._arraycopy@3.0.0",
      "lodash._arrayeach": "npm:lodash._arrayeach@3.0.0",
      "lodash._baseassign": "npm:lodash._baseassign@3.2.0",
      "lodash._basefor": "npm:lodash._basefor@3.0.3",
      "lodash.isarray": "npm:lodash.isarray@3.0.4",
      "lodash.keys": "npm:lodash.keys@3.1.2"
    },
    "npm:lodash._basecreate@2.4.1": {
      "lodash._isnative": "npm:lodash._isnative@2.4.1",
      "lodash.isobject": "npm:lodash.isobject@2.4.1",
      "lodash.noop": "npm:lodash.noop@2.4.1"
    },
    "npm:lodash._basecreatecallback@2.4.1": {
      "lodash._setbinddata": "npm:lodash._setbinddata@2.4.1",
      "lodash.bind": "npm:lodash.bind@2.4.1",
      "lodash.identity": "npm:lodash.identity@2.4.1",
      "lodash.support": "npm:lodash.support@2.4.1"
    },
    "npm:lodash._basecreatewrapper@2.4.1": {
      "lodash._basecreate": "npm:lodash._basecreate@2.4.1",
      "lodash._setbinddata": "npm:lodash._setbinddata@2.4.1",
      "lodash._slice": "npm:lodash._slice@2.4.1",
      "lodash.isobject": "npm:lodash.isobject@2.4.1"
    },
    "npm:lodash._basedifference@3.0.3": {
      "lodash._baseindexof": "npm:lodash._baseindexof@3.1.0",
      "lodash._cacheindexof": "npm:lodash._cacheindexof@3.0.2",
      "lodash._createcache": "npm:lodash._createcache@3.1.2"
    },
    "npm:lodash._baseflatten@3.1.4": {
      "lodash.isarguments": "npm:lodash.isarguments@3.0.6",
      "lodash.isarray": "npm:lodash.isarray@3.0.4"
    },
    "npm:lodash._basetostring@3.0.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash._createassigner@3.1.1": {
      "lodash._bindcallback": "npm:lodash._bindcallback@3.0.1",
      "lodash._isiterateecall": "npm:lodash._isiterateecall@3.0.9",
      "lodash.restparam": "npm:lodash.restparam@3.6.1"
    },
    "npm:lodash._createcache@3.1.2": {
      "lodash._getnative": "npm:lodash._getnative@3.9.1"
    },
    "npm:lodash._createpadding@3.6.1": {
      "lodash.repeat": "npm:lodash.repeat@3.2.0"
    },
    "npm:lodash._createwrapper@2.4.1": {
      "lodash._basebind": "npm:lodash._basebind@2.4.1",
      "lodash._basecreatewrapper": "npm:lodash._basecreatewrapper@2.4.1",
      "lodash._slice": "npm:lodash._slice@2.4.1",
      "lodash.isfunction": "npm:lodash.isfunction@2.4.1"
    },
    "npm:lodash._escapehtmlchar@2.4.1": {
      "lodash._htmlescapes": "npm:lodash._htmlescapes@2.4.1"
    },
    "npm:lodash._pickbyarray@3.0.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash._pickbycallback@3.0.0": {
      "lodash._basefor": "npm:lodash._basefor@3.0.3",
      "lodash.keysin": "npm:lodash.keysin@3.0.8"
    },
    "npm:lodash._reunescapedhtml@2.4.1": {
      "lodash._htmlescapes": "npm:lodash._htmlescapes@2.4.1",
      "lodash.keys": "npm:lodash.keys@2.4.1"
    },
    "npm:lodash._setbinddata@2.4.1": {
      "lodash._isnative": "npm:lodash._isnative@2.4.1",
      "lodash.noop": "npm:lodash.noop@2.4.1"
    },
    "npm:lodash._shimkeys@2.4.1": {
      "lodash._objecttypes": "npm:lodash._objecttypes@2.4.1"
    },
    "npm:lodash.assign@2.4.1": {
      "lodash._basecreatecallback": "npm:lodash._basecreatecallback@2.4.1",
      "lodash._objecttypes": "npm:lodash._objecttypes@2.4.1",
      "lodash.keys": "npm:lodash.keys@2.4.1"
    },
    "npm:lodash.assign@3.2.0": {
      "lodash._baseassign": "npm:lodash._baseassign@3.2.0",
      "lodash._createassigner": "npm:lodash._createassigner@3.1.1",
      "lodash.keys": "npm:lodash.keys@3.1.2"
    },
    "npm:lodash.bind@2.4.1": {
      "lodash._createwrapper": "npm:lodash._createwrapper@2.4.1",
      "lodash._slice": "npm:lodash._slice@2.4.1"
    },
    "npm:lodash.clonedeep@3.0.2": {
      "lodash._baseclone": "npm:lodash._baseclone@3.3.0",
      "lodash._bindcallback": "npm:lodash._bindcallback@3.0.1"
    },
    "npm:lodash.defaults@2.4.1": {
      "lodash._objecttypes": "npm:lodash._objecttypes@2.4.1",
      "lodash.keys": "npm:lodash.keys@2.4.1"
    },
    "npm:lodash.escape@2.4.1": {
      "lodash._escapehtmlchar": "npm:lodash._escapehtmlchar@2.4.1",
      "lodash._reunescapedhtml": "npm:lodash._reunescapedhtml@2.4.1",
      "lodash.keys": "npm:lodash.keys@2.4.1"
    },
    "npm:lodash.escape@3.2.0": {
      "lodash._root": "npm:lodash._root@3.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash.isobject@2.4.1": {
      "lodash._objecttypes": "npm:lodash._objecttypes@2.4.1"
    },
    "npm:lodash.isplainobject@3.2.0": {
      "lodash._basefor": "npm:lodash._basefor@3.0.3",
      "lodash.isarguments": "npm:lodash.isarguments@3.0.6",
      "lodash.keysin": "npm:lodash.keysin@3.0.8"
    },
    "npm:lodash.keys@2.4.1": {
      "lodash._isnative": "npm:lodash._isnative@2.4.1",
      "lodash._shimkeys": "npm:lodash._shimkeys@2.4.1",
      "lodash.isobject": "npm:lodash.isobject@2.4.1"
    },
    "npm:lodash.keys@3.1.2": {
      "lodash._getnative": "npm:lodash._getnative@3.9.1",
      "lodash.isarguments": "npm:lodash.isarguments@3.0.6",
      "lodash.isarray": "npm:lodash.isarray@3.0.4"
    },
    "npm:lodash.keysin@3.0.8": {
      "lodash.isarguments": "npm:lodash.isarguments@3.0.6",
      "lodash.isarray": "npm:lodash.isarray@3.0.4"
    },
    "npm:lodash.merge@3.3.2": {
      "lodash._arraycopy": "npm:lodash._arraycopy@3.0.0",
      "lodash._arrayeach": "npm:lodash._arrayeach@3.0.0",
      "lodash._createassigner": "npm:lodash._createassigner@3.1.1",
      "lodash._getnative": "npm:lodash._getnative@3.9.1",
      "lodash.isarguments": "npm:lodash.isarguments@3.0.6",
      "lodash.isarray": "npm:lodash.isarray@3.0.4",
      "lodash.isplainobject": "npm:lodash.isplainobject@3.2.0",
      "lodash.istypedarray": "npm:lodash.istypedarray@3.0.4",
      "lodash.keys": "npm:lodash.keys@3.1.2",
      "lodash.keysin": "npm:lodash.keysin@3.0.8",
      "lodash.toplainobject": "npm:lodash.toplainobject@3.0.0"
    },
    "npm:lodash.omit@3.1.0": {
      "lodash._arraymap": "npm:lodash._arraymap@3.0.0",
      "lodash._basedifference": "npm:lodash._basedifference@3.0.3",
      "lodash._baseflatten": "npm:lodash._baseflatten@3.1.4",
      "lodash._bindcallback": "npm:lodash._bindcallback@3.0.1",
      "lodash._pickbyarray": "npm:lodash._pickbyarray@3.0.2",
      "lodash._pickbycallback": "npm:lodash._pickbycallback@3.0.0",
      "lodash.keysin": "npm:lodash.keysin@3.0.8",
      "lodash.restparam": "npm:lodash.restparam@3.6.1"
    },
    "npm:lodash.pad@3.3.0": {
      "lodash._root": "npm:lodash._root@3.0.0",
      "lodash.repeat": "npm:lodash.repeat@3.2.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash.padleft@3.1.1": {
      "lodash._basetostring": "npm:lodash._basetostring@3.0.1",
      "lodash._createpadding": "npm:lodash._createpadding@3.6.1"
    },
    "npm:lodash.padright@3.1.1": {
      "lodash._basetostring": "npm:lodash._basetostring@3.0.1",
      "lodash._createpadding": "npm:lodash._createpadding@3.6.1"
    },
    "npm:lodash.pick@3.1.0": {
      "lodash._baseflatten": "npm:lodash._baseflatten@3.1.4",
      "lodash._bindcallback": "npm:lodash._bindcallback@3.0.1",
      "lodash._pickbyarray": "npm:lodash._pickbyarray@3.0.2",
      "lodash._pickbycallback": "npm:lodash._pickbycallback@3.0.0",
      "lodash.restparam": "npm:lodash.restparam@3.6.1"
    },
    "npm:lodash.repeat@3.2.0": {
      "lodash._root": "npm:lodash._root@3.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash.support@2.4.1": {
      "lodash._isnative": "npm:lodash._isnative@2.4.1"
    },
    "npm:lodash.template@2.4.1": {
      "lodash._escapestringchar": "npm:lodash._escapestringchar@2.4.1",
      "lodash._reinterpolate": "npm:lodash._reinterpolate@2.4.1",
      "lodash.defaults": "npm:lodash.defaults@2.4.1",
      "lodash.escape": "npm:lodash.escape@2.4.1",
      "lodash.keys": "npm:lodash.keys@2.4.1",
      "lodash.templatesettings": "npm:lodash.templatesettings@2.4.1",
      "lodash.values": "npm:lodash.values@2.4.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash.template@3.6.2": {
      "lodash._basecopy": "npm:lodash._basecopy@3.0.1",
      "lodash._basetostring": "npm:lodash._basetostring@3.0.1",
      "lodash._basevalues": "npm:lodash._basevalues@3.0.0",
      "lodash._isiterateecall": "npm:lodash._isiterateecall@3.0.9",
      "lodash._reinterpolate": "npm:lodash._reinterpolate@3.0.0",
      "lodash.escape": "npm:lodash.escape@3.2.0",
      "lodash.keys": "npm:lodash.keys@3.1.2",
      "lodash.restparam": "npm:lodash.restparam@3.6.1",
      "lodash.templatesettings": "npm:lodash.templatesettings@3.1.1"
    },
    "npm:lodash.templatesettings@2.4.1": {
      "lodash._reinterpolate": "npm:lodash._reinterpolate@2.4.1",
      "lodash.escape": "npm:lodash.escape@2.4.1"
    },
    "npm:lodash.templatesettings@3.1.1": {
      "lodash._reinterpolate": "npm:lodash._reinterpolate@3.0.0",
      "lodash.escape": "npm:lodash.escape@3.2.0"
    },
    "npm:lodash.toplainobject@3.0.0": {
      "lodash._basecopy": "npm:lodash._basecopy@3.0.1",
      "lodash.keysin": "npm:lodash.keysin@3.0.8"
    },
    "npm:lodash.values@2.4.1": {
      "lodash.keys": "npm:lodash.keys@2.4.1"
    },
    "npm:lodash@1.0.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash@3.10.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:log4js@0.6.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "cluster": "github:jspm/nodelibs-cluster@0.1.0",
      "dgram": "github:jspm/nodelibs-dgram@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@1.0.33",
      "semver": "npm:semver@4.3.6",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:loud-rejection@1.2.1": {
      "array-find-index": "npm:array-find-index@1.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "signal-exit": "npm:signal-exit@2.1.2"
    },
    "npm:lru-cache@2.2.4": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:map-stream@0.1.0": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:meow@3.7.0": {
      "camelcase-keys": "npm:camelcase-keys@2.0.0",
      "decamelize": "npm:decamelize@1.1.2",
      "loud-rejection": "npm:loud-rejection@1.2.1",
      "map-obj": "npm:map-obj@1.0.1",
      "minimist": "npm:minimist@1.2.0",
      "normalize-package-data": "npm:normalize-package-data@2.3.5",
      "object-assign": "npm:object-assign@4.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "read-pkg-up": "npm:read-pkg-up@1.0.1",
      "redent": "npm:redent@1.0.0",
      "trim-newlines": "npm:trim-newlines@1.0.0"
    },
    "npm:method-override@2.3.5": {
      "debug": "npm:debug@2.2.0",
      "methods": "npm:methods@1.1.2",
      "parseurl": "npm:parseurl@1.3.1",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "vary": "npm:vary@1.0.1"
    },
    "npm:micromatch@2.3.7": {
      "arr-diff": "npm:arr-diff@2.0.0",
      "array-unique": "npm:array-unique@0.2.1",
      "braces": "npm:braces@1.8.3",
      "expand-brackets": "npm:expand-brackets@0.1.4",
      "extglob": "npm:extglob@0.3.2",
      "filename-regex": "npm:filename-regex@2.0.0",
      "is-extglob": "npm:is-extglob@1.0.0",
      "is-glob": "npm:is-glob@2.0.1",
      "kind-of": "npm:kind-of@3.0.2",
      "normalize-path": "npm:normalize-path@2.0.1",
      "object.omit": "npm:object.omit@2.0.0",
      "parse-glob": "npm:parse-glob@3.0.4",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "regex-cache": "npm:regex-cache@0.4.2"
    },
    "npm:miller-rabin@4.0.0": {
      "bn.js": "npm:bn.js@4.10.3",
      "brorand": "npm:brorand@1.0.5"
    },
    "npm:mime-db@1.21.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:mime-types@2.1.9": {
      "mime-db": "npm:mime-db@1.21.0",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:mime@1.2.11": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:mime@1.2.6": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:mime@1.3.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:minimatch@0.2.14": {
      "lru-cache": "npm:lru-cache@2.7.3",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "sigmund": "npm:sigmund@1.0.1"
    },
    "npm:minimatch@0.3.0": {
      "lru-cache": "npm:lru-cache@2.2.4",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "sigmund": "npm:sigmund@1.0.1"
    },
    "npm:minimatch@2.0.10": {
      "brace-expansion": "npm:brace-expansion@1.1.3",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:minimatch@3.0.0": {
      "brace-expansion": "npm:brace-expansion@1.1.3",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:mkdirp@0.3.5": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:mkdirp@0.5.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "minimist": "npm:minimist@0.0.8",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:morgan@1.6.1": {
      "basic-auth": "npm:basic-auth@1.0.3",
      "debug": "npm:debug@2.2.0",
      "depd": "npm:depd@1.0.1",
      "on-finished": "npm:on-finished@2.3.0",
      "on-headers": "npm:on-headers@1.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:multiparty@3.3.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@1.1.13",
      "stream-counter": "npm:stream-counter@0.2.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:multipipe@0.1.2": {
      "duplexer2": "npm:duplexer2@0.0.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:mute-stream@0.0.5": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:nan@1.0.0": {
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:nan@2.2.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:ncp@0.4.2": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:node-pre-gyp@0.6.21": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "mkdirp": "npm:mkdirp@0.5.1",
      "nopt": "npm:nopt@3.0.6",
      "npmlog": "npm:npmlog@2.0.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "rc": "npm:rc@1.1.6",
      "request": "npm:request@2.21.0",
      "rimraf": "npm:rimraf@2.5.1",
      "semver": "npm:semver@5.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "tar": "npm:tar@2.2.1",
      "tar-pack": "npm:tar-pack@3.1.3",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:node-uuid@1.4.7": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:nopt@3.0.6": {
      "abbrev": "npm:abbrev@1.0.7",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:normalize-package-data@2.3.5": {
      "hosted-git-info": "npm:hosted-git-info@2.1.4",
      "is-builtin-module": "npm:is-builtin-module@1.0.0",
      "semver": "npm:semver@5.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "validate-npm-package-license": "npm:validate-npm-package-license@3.0.1"
    },
    "npm:npmlog@2.0.2": {
      "ansi": "npm:ansi@0.3.1",
      "are-we-there-yet": "npm:are-we-there-yet@1.0.6",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "gauge": "npm:gauge@1.2.5",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:oauth-sign@0.3.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0"
    },
    "npm:object.assign@1.1.1": {
      "object-keys": "npm:object-keys@1.0.9"
    },
    "npm:object.omit@2.0.0": {
      "for-own": "npm:for-own@0.1.3",
      "is-extendable": "npm:is-extendable@0.1.1"
    },
    "npm:on-finished@2.3.0": {
      "ee-first": "npm:ee-first@1.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:once@1.3.3": {
      "wrappy": "npm:wrappy@1.0.1"
    },
    "npm:optimist@0.6.1": {
      "minimist": "npm:minimist@0.0.8",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "wordwrap": "npm:wordwrap@0.0.2"
    },
    "npm:optionator@0.5.0": {
      "deep-is": "npm:deep-is@0.1.3",
      "fast-levenshtein": "npm:fast-levenshtein@1.0.7",
      "levn": "npm:levn@0.2.5",
      "prelude-ls": "npm:prelude-ls@1.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "type-check": "npm:type-check@0.3.2",
      "wordwrap": "npm:wordwrap@0.0.2"
    },
    "npm:optionator@0.6.0": {
      "deep-is": "npm:deep-is@0.1.3",
      "fast-levenshtein": "npm:fast-levenshtein@1.0.7",
      "levn": "npm:levn@0.2.5",
      "prelude-ls": "npm:prelude-ls@1.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "type-check": "npm:type-check@0.3.2",
      "wordwrap": "npm:wordwrap@0.0.2"
    },
    "npm:options@0.0.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:orchestrator@0.3.7": {
      "end-of-stream": "npm:end-of-stream@0.1.5",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "sequencify": "npm:sequencify@0.0.7",
      "stream-consume": "npm:stream-consume@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:ordered-read-streams@0.1.0": {
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:os-homedir@1.0.1": {
      "os": "github:jspm/nodelibs-os@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:pako@0.2.8": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:parse-asn1@5.0.0": {
      "asn1.js": "npm:asn1.js@4.4.0",
      "browserify-aes": "npm:browserify-aes@1.0.6",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:parse-glob@3.0.4": {
      "glob-base": "npm:glob-base@0.3.0",
      "is-dotfile": "npm:is-dotfile@1.0.2",
      "is-extglob": "npm:is-extglob@1.0.0",
      "is-glob": "npm:is-glob@2.0.1"
    },
    "npm:parse-json@2.2.0": {
      "error-ex": "npm:error-ex@1.3.0"
    },
    "npm:parseurl@1.3.1": {
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:path-exists@2.1.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "pinkie-promise": "npm:pinkie-promise@2.0.0"
    },
    "npm:path-is-absolute@1.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:path-is-inside@1.0.1": {
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:path-type@1.1.0": {
      "graceful-fs": "npm:graceful-fs@4.1.3",
      "pify": "npm:pify@2.3.0",
      "pinkie-promise": "npm:pinkie-promise@2.0.0"
    },
    "npm:pause-stream@0.0.11": {
      "through": "npm:through@2.3.8"
    },
    "npm:pbkdf2@3.0.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "create-hmac": "npm:create-hmac@1.1.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:pify@2.3.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:pinkie-promise@2.0.0": {
      "pinkie": "npm:pinkie@2.0.4"
    },
    "npm:pkginfo@0.3.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:policyfile@0.0.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process-nextick-args@1.0.6": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:public-encrypt@4.0.0": {
      "bn.js": "npm:bn.js@4.10.3",
      "browserify-rsa": "npm:browserify-rsa@4.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "parse-asn1": "npm:parse-asn1@5.0.0",
      "randombytes": "npm:randombytes@2.0.2"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:q@1.4.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:random-bytes@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:randomatic@1.1.5": {
      "is-number": "npm:is-number@2.1.0",
      "kind-of": "npm:kind-of@3.0.2"
    },
    "npm:randombytes@2.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:raw-body@2.1.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "bytes": "npm:bytes@2.2.0",
      "iconv-lite": "npm:iconv-lite@0.4.13",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "unpipe": "npm:unpipe@1.0.0"
    },
    "npm:rc@1.1.6": {
      "deep-extend": "npm:deep-extend@0.4.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ini": "npm:ini@1.3.4",
      "minimist": "npm:minimist@1.2.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "strip-json-comments": "npm:strip-json-comments@1.0.4"
    },
    "npm:read-json-sync@1.1.1": {
      "graceful-fs": "npm:graceful-fs@4.1.3"
    },
    "npm:read-pkg-up@1.0.1": {
      "find-up": "npm:find-up@1.1.0",
      "read-pkg": "npm:read-pkg@1.1.0"
    },
    "npm:read-pkg@1.1.0": {
      "load-json-file": "npm:load-json-file@1.1.0",
      "normalize-package-data": "npm:normalize-package-data@2.3.5",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-type": "npm:path-type@1.1.0"
    },
    "npm:readable-stream@1.0.33": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:readable-stream@1.1.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:readable-stream@2.0.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "process-nextick-args": "npm:process-nextick-args@1.0.6",
      "string_decoder": "npm:string_decoder@0.10.31",
      "util-deprecate": "npm:util-deprecate@1.0.2"
    },
    "npm:readdirp@2.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "graceful-fs": "npm:graceful-fs@4.1.3",
      "minimatch": "npm:minimatch@2.0.10",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@2.0.5",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:readline2@1.0.1": {
      "code-point-at": "npm:code-point-at@1.0.0",
      "is-fullwidth-code-point": "npm:is-fullwidth-code-point@1.0.0",
      "mute-stream": "npm:mute-stream@0.0.5",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readline": "github:jspm/nodelibs-readline@0.1.0"
    },
    "npm:rechoir@0.6.2": {
      "path": "github:jspm/nodelibs-path@0.1.0",
      "resolve": "npm:resolve@1.1.7"
    },
    "npm:redent@1.0.0": {
      "indent-string": "npm:indent-string@2.1.0",
      "strip-indent": "npm:strip-indent@1.0.1"
    },
    "npm:redis@0.7.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "sys": "github:jspm/nodelibs-util@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:regex-cache@0.4.2": {
      "is-equal-shallow": "npm:is-equal-shallow@0.1.3",
      "is-primitive": "npm:is-primitive@2.0.0"
    },
    "npm:repeating@2.0.0": {
      "is-finite": "npm:is-finite@1.0.1"
    },
    "npm:replace-ext@0.0.1": {
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:request@2.21.0": {
      "aws-sign": "npm:aws-sign@0.3.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cookie-jar": "npm:cookie-jar@0.3.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "forever-agent": "npm:forever-agent@0.5.2",
      "form-data": "npm:form-data@0.0.8",
      "hawk": "npm:hawk@0.13.1",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "http-signature": "npm:http-signature@0.9.11",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "json-stringify-safe": "npm:json-stringify-safe@4.0.0",
      "mime": "npm:mime@1.2.11",
      "node-uuid": "npm:node-uuid@1.4.7",
      "oauth-sign": "npm:oauth-sign@0.3.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "qs": "npm:qs@0.6.6",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "tls": "github:jspm/nodelibs-tls@0.1.0",
      "tunnel-agent": "npm:tunnel-agent@0.3.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:require-dir@0.1.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:resolve@1.1.7": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:response-time@2.3.1": {
      "depd": "npm:depd@1.0.1",
      "on-headers": "npm:on-headers@1.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:restore-cursor@1.0.1": {
      "exit-hook": "npm:exit-hook@1.1.1",
      "onetime": "npm:onetime@1.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:right-align@0.1.3": {
      "align-text": "npm:align-text@0.1.4"
    },
    "npm:rimraf@2.5.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "glob": "npm:glob@6.0.4",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:ripemd160@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:rndm@1.2.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:run-async@0.1.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "once": "npm:once@1.3.3"
    },
    "npm:run-sequence@1.1.5": {
      "chalk": "npm:chalk@1.1.1",
      "gulp-util": "npm:gulp-util@3.0.7"
    },
    "npm:rx-lite@3.1.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:semver@2.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:semver@4.3.6": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:semver@5.1.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:send@0.1.0": {
      "debug": "npm:debug@2.2.0",
      "fresh": "npm:fresh@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "mime": "npm:mime@1.2.6",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "range-parser": "npm:range-parser@0.0.4",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:send@0.13.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "debug": "npm:debug@2.2.0",
      "depd": "npm:depd@1.1.0",
      "destroy": "npm:destroy@1.0.4",
      "escape-html": "npm:escape-html@1.0.3",
      "etag": "npm:etag@1.7.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fresh": "npm:fresh@0.3.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http-errors": "npm:http-errors@1.3.1",
      "mime": "npm:mime@1.3.4",
      "ms": "npm:ms@0.7.1",
      "on-finished": "npm:on-finished@2.3.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "range-parser": "npm:range-parser@1.0.3",
      "statuses": "npm:statuses@1.2.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:serve-favicon@2.3.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "etag": "npm:etag@1.7.0",
      "fresh": "npm:fresh@0.3.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ms": "npm:ms@0.7.1",
      "parseurl": "npm:parseurl@1.3.1",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:serve-index@1.7.3": {
      "accepts": "npm:accepts@1.2.13",
      "batch": "npm:batch@0.5.3",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "debug": "npm:debug@2.2.0",
      "escape-html": "npm:escape-html@1.0.3",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http-errors": "npm:http-errors@1.3.1",
      "mime-types": "npm:mime-types@2.1.9",
      "parseurl": "npm:parseurl@1.3.1",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:serve-static@1.10.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "escape-html": "npm:escape-html@1.0.3",
      "parseurl": "npm:parseurl@1.3.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "send": "npm:send@0.13.1",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:sha.js@2.4.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:shelljs@0.5.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:sigmund@1.0.1": {
      "http": "github:jspm/nodelibs-http@1.7.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:signal-exit@2.1.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:sntp@0.2.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "dgram": "github:jspm/nodelibs-dgram@0.1.0",
      "dns": "github:jspm/nodelibs-dns@0.1.0",
      "hoek": "npm:hoek@0.9.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:socket.io-client@0.9.16": {
      "active-x-obfuscator": "npm:active-x-obfuscator@0.0.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "uglify-js": "npm:uglify-js@1.2.5",
      "ws": "npm:ws@0.4.32",
      "xmlhttprequest": "npm:xmlhttprequest@1.4.2"
    },
    "npm:socket.io@0.9.16": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "base64id": "npm:base64id@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "policyfile": "npm:policyfile@0.0.4",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "redis": "npm:redis@0.7.3",
      "socket.io-client": "npm:socket.io-client@0.9.16",
      "tty": "github:jspm/nodelibs-tty@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:source-map@0.2.0": {
      "amdefine": "npm:amdefine@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:source-map@0.4.4": {
      "amdefine": "npm:amdefine@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:source-map@0.5.3": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:sparkles@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1"
    },
    "npm:spdx-correct@1.0.2": {
      "spdx-license-ids": "npm:spdx-license-ids@1.2.0"
    },
    "npm:spdx-expression-parse@1.0.2": {
      "spdx-exceptions": "npm:spdx-exceptions@1.0.4",
      "spdx-license-ids": "npm:spdx-license-ids@1.2.0"
    },
    "npm:spdx-license-ids@1.2.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:split@0.2.10": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
      "through": "npm:through@2.3.8",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:statuses@1.2.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.0.33"
    },
    "npm:stream-combiner@0.0.4": {
      "duplexer": "npm:duplexer@0.1.1"
    },
    "npm:stream-counter@0.2.0": {
      "readable-stream": "npm:readable-stream@1.1.13",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:string-width@1.0.1": {
      "code-point-at": "npm:code-point-at@1.0.0",
      "is-fullwidth-code-point": "npm:is-fullwidth-code-point@1.0.0",
      "strip-ansi": "npm:strip-ansi@3.0.0"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:strip-ansi@0.1.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:strip-ansi@0.3.0": {
      "ansi-regex": "npm:ansi-regex@0.2.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:strip-ansi@3.0.0": {
      "ansi-regex": "npm:ansi-regex@2.0.0"
    },
    "npm:strip-bom@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "first-chunk-stream": "npm:first-chunk-stream@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "is-utf8": "npm:is-utf8@0.2.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:strip-bom@2.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "is-utf8": "npm:is-utf8@0.2.1"
    },
    "npm:strip-indent@1.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "get-stdin": "npm:get-stdin@4.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:strip-json-comments@1.0.4": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:supports-color@0.2.0": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:supports-color@2.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:supports-color@3.1.2": {
      "has-flag": "npm:has-flag@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:tar-pack@3.1.3": {
      "debug": "npm:debug@2.2.0",
      "fstream": "npm:fstream@1.0.8",
      "fstream-ignore": "npm:fstream-ignore@1.0.3",
      "once": "npm:once@1.3.3",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@2.0.5",
      "rimraf": "npm:rimraf@2.5.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "tar": "npm:tar@2.2.1",
      "uid-number": "npm:uid-number@0.0.6",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:tar@2.2.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "block-stream": "npm:block-stream@0.0.8",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "fstream": "npm:fstream@1.0.8",
      "inherits": "npm:inherits@2.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:through2@0.4.1": {
      "readable-stream": "npm:readable-stream@1.0.33",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "xtend": "npm:xtend@2.1.2"
    },
    "npm:through2@0.5.1": {
      "readable-stream": "npm:readable-stream@1.0.33",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "xtend": "npm:xtend@3.0.0"
    },
    "npm:through2@0.6.5": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@1.0.33",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "xtend": "npm:xtend@4.0.1"
    },
    "npm:through2@2.0.1": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@2.0.5",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "xtend": "npm:xtend@4.0.1"
    },
    "npm:through@2.3.8": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:tildify@1.1.2": {
      "os-homedir": "npm:os-homedir@1.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:timers-browserify@1.4.2": {
      "process": "npm:process@0.11.2"
    },
    "npm:tunnel-agent@0.3.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "tls": "github:jspm/nodelibs-tls@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:type-check@0.3.2": {
      "prelude-ls": "npm:prelude-ls@1.1.2"
    },
    "npm:type-is@1.6.11": {
      "media-typer": "npm:media-typer@0.3.0",
      "mime-types": "npm:mime-types@2.1.9"
    },
    "npm:uglify-js@1.2.5": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:uglify-js@2.6.1": {
      "async": "npm:async@0.2.10",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.5.3",
      "uglify-to-browserify": "npm:uglify-to-browserify@1.0.2",
      "yargs": "npm:yargs@3.10.0"
    },
    "npm:uglify-to-browserify@1.0.2": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:uid-number@0.0.6": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:uid-safe@2.0.0": {
      "base64-url": "npm:base64-url@1.2.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:uid-safe@2.1.0": {
      "base64-url": "npm:base64-url@1.2.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "random-bytes": "npm:random-bytes@1.0.0"
    },
    "npm:unique-stream@1.0.0": {
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:user-home@1.1.1": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:user-home@2.0.0": {
      "os-homedir": "npm:os-homedir@1.0.1"
    },
    "npm:useragent@2.1.8": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "lru-cache": "npm:lru-cache@2.2.4",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:util-deprecate@1.0.2": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:utile@0.2.1": {
      "async": "npm:async@0.2.10",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "deep-equal": "npm:deep-equal@1.0.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "i": "npm:i@0.3.4",
      "mkdirp": "npm:mkdirp@0.5.1",
      "ncp": "npm:ncp@0.4.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "rimraf": "npm:rimraf@2.5.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:v8flags@2.0.11": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "user-home": "npm:user-home@1.1.1"
    },
    "npm:validate-npm-package-license@3.0.1": {
      "spdx-correct": "npm:spdx-correct@1.0.2",
      "spdx-expression-parse": "npm:spdx-expression-parse@1.0.2"
    },
    "npm:vinyl-fs@0.1.4": {
      "glob-stream": "npm:glob-stream@3.1.18",
      "glob-watcher": "npm:glob-watcher@0.0.6",
      "graceful-fs": "npm:graceful-fs@2.0.3",
      "map-stream": "npm:map-stream@0.1.0",
      "mkdirp": "npm:mkdirp@0.3.5",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "vinyl": "npm:vinyl@0.2.3"
    },
    "npm:vinyl-fs@0.3.14": {
      "defaults": "npm:defaults@1.0.3",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "glob-stream": "npm:glob-stream@3.1.18",
      "glob-watcher": "npm:glob-watcher@0.0.6",
      "graceful-fs": "npm:graceful-fs@3.0.8",
      "mkdirp": "npm:mkdirp@0.5.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "strip-bom": "npm:strip-bom@1.0.0",
      "through2": "npm:through2@0.6.5",
      "vinyl": "npm:vinyl@0.4.6"
    },
    "npm:vinyl-paths@1.0.0": {
      "through2": "npm:through2@0.6.5"
    },
    "npm:vinyl-sourcemaps-apply@0.2.1": {
      "source-map": "npm:source-map@0.5.3"
    },
    "npm:vinyl@0.2.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "clone-stats": "npm:clone-stats@0.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:vinyl@0.4.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "clone": "npm:clone@0.2.0",
      "clone-stats": "npm:clone-stats@0.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:vinyl@0.5.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "clone": "npm:clone@1.0.2",
      "clone-stats": "npm:clone-stats@0.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "replace-ext": "npm:replace-ext@0.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    },
    "npm:which@1.2.4": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "is-absolute": "npm:is-absolute@0.1.7",
      "isexe": "npm:isexe@1.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:window-size@0.1.0": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "tty": "github:jspm/nodelibs-tty@0.1.0"
    },
    "npm:write@0.2.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "mkdirp": "npm:mkdirp@0.5.1",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:ws@0.4.32": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "commander": "npm:commander@2.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "nan": "npm:nan@1.0.0",
      "options": "npm:options@0.0.6",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "tinycolor": "npm:tinycolor@0.0.1",
      "tls": "github:jspm/nodelibs-tls@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:xmlhttprequest@1.4.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:xtend@2.1.2": {
      "object-keys": "npm:object-keys@0.4.0"
    },
    "npm:yargs@2.3.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "wordwrap": "npm:wordwrap@0.0.2"
    },
    "npm:yargs@3.10.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "camelcase": "npm:camelcase@1.2.1",
      "cliui": "npm:cliui@2.1.0",
      "decamelize": "npm:decamelize@1.1.2",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "window-size": "npm:window-size@0.1.0"
    },
    "npm:yui@3.14.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "request": "npm:request@2.21.0"
    },
    "npm:yuidocjs@0.3.50": {
      "express": "npm:express@3.1.2",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "graceful-fs": "npm:graceful-fs@2.0.3",
      "marked": "npm:marked@0.2.10",
      "minimatch": "npm:minimatch@0.2.14",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "rimraf": "npm:rimraf@2.5.1",
      "yui": "npm:yui@3.14.1"
    },
    "npm:zeparser@0.0.5": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  }
});
