'use strict';

/* jshint camelcase: false */
module.exports = {
  options: {
    config: '_config.yml'
  },
  dev: {
    options: {
      src: 'tmp/jekyll',
      dest: 'dist/',
      // drafts: true,
      // limit_posts: 10
      limit_posts: 1
    }
  },
  prod: {
    options: {
      src: 'tmp/jekyll',
      dest: 'dist/'
    }
  }
};