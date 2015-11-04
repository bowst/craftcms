#
# Cookbook Name:: craftcms
# Recipe:: default
#
# Copyright 2015, Vicinus Digital
#
# All rights reserved - Do Not Redistribute
#

include_recipe "apt"

apt_repository 'nginx' do
  uri          'ppa:nginx/stable'
  distribution node['lsb']['codename']
end

apt_repository 'php5' do
  uri           'ppa:ondrej/php5'
  distribution node['lsb']['codename']
end

for dev_package in ["curl", "unzip", "build-essential", "git-core", "imagemagick"] do
  apt_package dev_package do
    action :install
  end
end

apt_package "nginx" do
  action :install
end

for php_package in ["php5-fpm", "php5-cli", "php5-gd", "php5-curl", "php5-mcrypt", "php5-mysql", "php5-imagick"] do
  apt_package php_package do
    action :install
  end
end

apt_package "mysql-server-5.6" do
  action :install
end

cookbook_file "nginx_default" do
  path "/etc/nginx/sites-available/default"
  action :create
end

service "nginx" do
   action :restart
end

cookbook_file "php.ini" do
  path "/etc/php5/fpm/php.ini"
  action :create
end

service "php5-fpm" do
   action :restart
end

remote_file "/tmp/Craft-2.4.2670.zip" do
  source "http://download.buildwithcraft.com/craft/2.4/2.4.2670/Craft-2.4.2670.zip"
end

execute "unzip -o /tmp/Craft-2.4.2670.zip" do
  cwd '/var/www'
  not_if { ::File.exists?("/var/www/craft/app/Craft.php")}
end

execute "mysql -u root -e 'create database craftcms'" do
  exists = <<-EOH
  mysql -u root -e "show databases" | grep ^craftcms$
  EOH
  not_if exists
end

cookbook_file "db.php" do
  path "/var/www/craft/config/db.php"
  action :create
end
