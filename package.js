Package.describe({
    name: 'rzymek:tinymce-cdn',
    version: '4.0.0_2',
    summary: 'TinyMCE is a platform independent web-based JavaScript HTML WYSIWYG editor control. CDN version',
    git: 'https://github.com/rzymek/meteor-tinymce-cdn.git',
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.versionsFrom('1.2');
    api.use(['templating','underscore'],'client');
    api.addFiles(['client/tinymce.html', 'client/tinymce.js'],'client');
});
