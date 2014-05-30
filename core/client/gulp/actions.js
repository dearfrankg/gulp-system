var fs = require('fs');
var onlyScripts = require('./util/scriptFilter');
var tasks = fs.readdirSync('./gulp/tasks/').filter(onlyScripts);

var actions = {};

tasks.forEach(function(task) {

    actionName = task.replace(/\.js$/, '');
	actions[actionName] = require('./tasks/' + task);
});

module.exports = actions;