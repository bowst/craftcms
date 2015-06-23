# Instructions

This Vagrant config uses both the Omnibus Vagrant plugin and the Hostsupdater plugin.  The following commands will install them:

* ```vagrant plugin install vagrant-hostsupdater```
* ```vagrant plugin install vagrant-omnibus```

To use this repo to build a Craft development environment:

* Clone the repo locally: ```git clone https://github.com/bowst/craftcms.git```
* Change to the checked out dir: ```cd craftcms```
* Remove the .git folder: ```rm -rf .git```
* Create the vagrant instance: ```vagrant up```
* Once the instance has initialized, configure through a web browser: ```http://craftcms.bowst.dev/admin```
* Initialize your git repo: ```git init```
* Commit to your repo: ```git commit -a -m 'Initial commit'```
* Go wild.
