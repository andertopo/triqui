module.exports = function (ctx) {
    var fs = require('fs');
    var path = require('path');

    var Q = require('q');
    var deferred = Q.defer();

    // console.log(JSON.stringify(ctx)); // variables de contexto

    if (ctx.build.platform == 'browser') {
        var activityDir = '/www';
        
        var totalDestinationDir = path.join(ctx.project.dir, activityDir);

        console.log('origen', path.join(ctx.project.dir, 'web.config'));
        console.log('destino', path.join(totalDestinationDir, 'web.config'));

        fs.copyFileSync(path.join(ctx.project.dir, 'web.config'), path.join(totalDestinationDir, 'web.config'));
        
        console.log('archivo copiado!!');
        deferred.resolve();
    } else {
        deferred.resolve();
    }

    return deferred.promise;
}