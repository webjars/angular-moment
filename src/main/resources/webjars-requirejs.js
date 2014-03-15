requirejs.config({
    paths: { "angular-moment": webjars.path("angular-moment", "angular-moment") },
    shim: { "angular-moment": [ "angular", "momentjs" ] }
});
