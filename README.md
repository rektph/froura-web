# Froura-Web
Froura Web Thesis

## After cloning this project be sure of the following:
- nodejs 8.\*.\* is installed
- composer is Installed
- xampp is installed
- laravel is installed
- Windows OS

## Run this commands
```
composer install
npm install
```

## Copy this to c:/xampp/conf/extras/httpd-vhost.conf
```
<VirtualHost **:80>
    DocumentRoot "C:/xampp/htdocs/froura-web/public"
    ServerName froura.test
</VirtualHost>
```

## Copy this to c:/Windows/System32/drivers/etc/hosts
```
127.0.0.1 froura.test
```

## Create a .env file on the project folder then run this command
```
php artisan key:generate
```

## Create a new firebaseConfig.js file on the /resources/assets/js folder then run this command
```
npm run watch
```

## Then go to [froura.test](http://froura.test)