ECHO OFF
npm install
composer install
copy .env.example .env
php artisan key:generate
copy \resources\assets\js\firebaseConfig.js.example \resources\assets\js\firebaseConfig.js
copy hosts C:\Windows\System32\drivers\etc\hosts
copy httpd-vhosts.conf C:\xampp\apache\conf\extra\httpd-vhosts.conf
code .
npm run watch
