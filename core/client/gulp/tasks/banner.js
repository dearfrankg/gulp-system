

exports.banner = function () {

    var banner = ['/**',
      ' * <%= pkg.name %> - <%= pkg.description %>',
      ' * @version v<%= pkg.version %>',
      ' */',
      ''].join('\n');

      return banner;

}
