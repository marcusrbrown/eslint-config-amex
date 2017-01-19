module.exports = {
  extends: [
    'eslint-config-airbnb',
  ].map(require.resolve),
  rules: {
    // open a PR per rule change
    // ****.com/stash/projects/UIE/repos/eslint-config-axp/pull-requests?create
    'comma-dangle': 0,
    'react/jsx-no-bind': [2, {
      'ignoreRefs': true
    }]
  }
};
