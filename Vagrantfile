Vagrant.configure("2") do |c|
  c.vm.box = "base"
  c.vm.box = "mevansam/chef-ubuntu-14.04"

  c.vm.hostname = "craftcms.bowst.dev"
  c.hostsupdater.aliases = ["craftcms.bowst.dev"]
  c.vm.network(:private_network, {:ip=>"10.50.50.50"})
  c.vm.synced_folder ".", "/vagrant", disabled: true
  c.vm.synced_folder ".", "/var/www/", type: :nfs
  c.omnibus.chef_version = :latest
  
  c.vm.provider "vmware_fusion" do |v|
    v.vmx["memsize"] = "2048"
    v.vmx["numvcpus"] = "2"
  end
  
  c.vm.provision "chef_solo" do |chef|
      chef.add_recipe "craftcms"
  end
end
