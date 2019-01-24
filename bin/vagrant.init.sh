#!/usr/bin/env bash

echo -e "\033[33m"          apt-get upgrade, update start          "\033[0m"
sudo apt-get upgrade
sudo apt-get update
echo -e "\033[33m"          apt-get upgrade, update end          "\033[0m"

echo -e "\033[33m"          mysql install with init start          "\033[0m"
sudo debconf-set-selections <<< 'mysql-server-5.6 mysql-server/root_password password reservacation'
sudo debconf-set-selections <<< 'mysql-server-5.6 mysql-server/root_password_again password reservacation'
sudo apt-get -y install mysql-server-5.6
sudo apt-get -y install mysql-client-5.6
echo -e "\033[33m"mysql install with init end"\033[0m"

echo -e "\033[33m"          nginx install with init start          "\033[0m"
sudo apt-get -y install nginx
sudo cp /home/ubuntu/app/reservacation-api/bin/reservacation.conf /etc/nginx/sites-available
sudo ln -s /etc/nginx/sites-available/reservacation.conf /etc/nginx/sites-enabled/reservacation.conf
sudo service nginx restart
echo -e "\033[33m"          nginx install with init end          "\033[0m"

echo -e "\033[33m"          node install start          "\033[0m"
sudo apt-get install curl
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo npm install -g supervisor
echo -e "\033[33m"          node install end          "\033[0m"
