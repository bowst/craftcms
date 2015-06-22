Vagrant.configure("2") do |c|
  c.vm.box = "opscode-ubuntu-14.04"
  c.vm.box_url = "http://opscode-vm-bento.s3.amazonaws.com/vagrant/vmware/opscode_ubuntu-14.04_chef-provisionerless.box"
  c.vm.hostname = "craftcms-dev.bowst.com"
  c.hostsupdater.aliases = ["craftcms-dev.bowst.com"]
  c.vm.network(:private_network, {:ip=>"10.50.50.50"})
  c.vm.synced_folder ".", "/vagrant", disabled: true
  c.vm.synced_folder "/opt/sites/bowst/craftcms/", "/var/www/", type: :nfs
  c.omnibus.chef_version = :latest
  c.vm.provider "vmware_fusion" do |v|
    v.vmx["memsize"] = "2048"
    v.vmx["numvcpus"] = "2"
  end
  c.vm.provision "chef_solo" do |chef|
      chef.add_recipe "craftcms"
  end
end
