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


# Known Issues

## HGFS Kernel Module Issue

If you get this error message when running `vagrant up`:

```
The HGFS kernel module was not found on the running virtual machine.
This must be installed for shared folders to work properly. Please
install the VMware tools within the guest and try again. Note that
the VMware tools installation will succeed even if HGFS fails
to properly install. Carefully read the output of the VMware tools
installation to verify the HGFS kernel modules were installed properly.
```
...you're in for a bit of a fun time.

To fix this issue:

* SSH into the guest machine with `vagrant ssh`
* Install linux build tools (`sudo apt-get install build-essential`)
* Install/Reinstall linux kernel headers (`sudo apt-get install linux-headers-$(uname -r)`)
* Install VMware tools ([Instructions for Ubuntu here](http://kb.vmware.com/selfservice/microsites/search.do?language=en_US&cmd=displayKC&externalId=1022525))
* While the install script is running, if it detects an invalid path for the linux headers and prompts you to manually enter the path, type: `/usr/src/linux-headers-$(uname -r)/include`
* When prompted if you would like to enable automatic rebuilding of the kernel, enter yes (head's up, the default is no)

After all that, you should be all set.  Run `vagrant reload` to restart the guest machine.
