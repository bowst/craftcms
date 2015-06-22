name             'craftcms'
maintainer       'Bowst Digital'
maintainer_email 'dan@bowst.com'
license          'All rights reserved'
description      'Installs/Configures craftcms'
long_description IO.read(File.join(File.dirname(__FILE__), 'README.md'))
version          '1.0.0'
recipe            'craftcms','set up craft cms'

depends 'apt'
