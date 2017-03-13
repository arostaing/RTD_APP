#Configure node & gulp
https://blogs.msdn.microsoft.com/azureossds/2015/10/22/using-gulp-in-node-js-azure-webapps/

1. Install the azure-cli tool
´´´cmd
npm install azure-cli -g
´´´

2. Run the custom deployment script generator command
´´´cmd
azure site deploymentscript --node
´´´

3. In deploy.cmd file include below lines of code after installing npm packages
´´´
IF EXIST "Gulpfile.js" (
 pushd "%DEPLOYMENT_TARGET%"
 call .\node_modules\.bin\gulp imagemin
 IF !ERRORLEVEL! NEQ 0 goto error
 popd
 )
 ´´´


 Solve problems
 npm i -g gulp-cli
 npm i socket.io-client
 