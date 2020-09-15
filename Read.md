# **Requirements**

##**Linux**

    $sudo apt-get install libgtk2.0-0 libgtk-3-0 libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb

##**Node**

Version >= 8

# **Installation**

npm config set proxy http://proxy.intranet.dtgna:3128
npm config set https-proxy http://proxy.intranet.dtgna:3128
npm install cypress --save-dev

change 'env.localMachine'(https://{user}.intranet.dtgna:8443/userdirect) variable in cypress.jason
# **Run all tests**

go to > src\test\automated-test and run :
    npm set NO_PROXY={user}.intranet.dtgna:8443
    
    1. for headless tests >>      npm run cypress-run,
    2. for interactive tests >>   npm run cypress-open (a cypress window  will open)


