<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href='https://fonts.googleapis.com/css?family=Rubik:300,400,500,700|Material+Icons' rel="stylesheet">
        <script src="https://www.google.com/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit" async defer></script> 
        <link rel="stylesheet" href="{{asset('css/override.css')}}">
        <link rel="icon" href="{{asset('favicon.png')}}">
        <title>FROURA</title>
    </head>
    <body>
        <div id="app"></div>
        <script src="{{asset('js/index.js')}}"></script>
        <script src='https://www.google.com/recaptcha/api.js'></script>
    </body>
</html>
