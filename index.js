function processRule(rule) {

  if (!rule || !rule.nodes || !rule.nodes.length) return null;

  rule.nodes.forEach(declaration => {
    if (declaration.type === 'decl') {
      if (declaration.important) {
        declaration.important = false;
      }
    }
  });

}

function processAtRule(atRule) {

  if (!atRule || !atRule.nodes || !atRule.nodes.length) return null;

  atRule.nodes.forEach(rule => {
    if (rule.type === 'rule') {
      processRule(rule);
    }
  })

}


module.exports = function (source) {
  source.nodes.forEach(rule => {
    if (rule.type === 'rule') {
      processRule(rule)
    } else if (rule.type === 'atrule') {
      processAtRule(rule)
    }
  });
  return source;
};
