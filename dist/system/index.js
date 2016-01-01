System.register([], function (_export) {
  'use strict';

  _export('configure', configure);

  function configure(config) {
    config.globalResources('./cmdr-element');
  }

  return {
    setters: [],
    execute: function () {}
  };
});