Package.describe({
    summary: "Login service for VK.",
    version: "0.1",
    git: "https://github.com/gsrozh/meteor-accounts-vk",
    name: "gsrozh:accounts-vk"
});

Package.onUse(function(api) {
    api.versionsFrom('METEOR@0.9.0');
    api.use('accounts-base', ['client', 'server']);
    api.imply('accounts-base', ['client', 'server']);
    api.use('accounts-oauth', ['client', 'server']);
    api.imply('accounts-oauth', ['client', 'server']);
    api.use('service-configuration', ['client', 'server']);
    api.imply('service-configuration', ['client', 'server']);

    api.use('oauth2', ['client', 'server']);
    api.use('oauth', ['client', 'server']);
    api.use('http', ['server']);
    api.use('underscore', 'server');
    api.use('random', 'client');

    api.add_files("lib/accounts_vk.js");
    api.add_files('lib/vk_client.js', 'client');
    api.add_files('lib/vk_server.js', 'server');

    api.export('VK');

});
