# react-ssr

## few important concept i want to highlight here 
- Define bable and webpack to genrate the bundle for react component 
- add appropriate script under package.json to build bundle and if require start the development server 
-  webpack generate a html from template and store at given location 
 ```template: path.resolve( __dirname, 'src/index.html' )```
 
- and this html is used to prepare server side markup
```  let indexHTML = fs.readFileSync(
    path.resolve(__dirname, "../dist/index.html"),
    {
      encoding: "utf8",
    }
  );

  let appHTML = ReactDOMServer.renderToString(<AppComp />);
  indexHTML = indexHTML.replace(
    '<div id="app"></div>',
    `<div id="app">${appHTML}</div>`
  );  
  ```
  -  last thig to transpile appHTML used following code in index.js

  ``` const path = require("path");

// ignore `.scss` imports
require("ignore-styles");

// transpile imports on the fly
require("@babel/register")({
  configFile: path.resolve(__dirname, "../babel.config.js"),
});

// import express server
require("./express.js");
```

- build the bundle using script from package.json and deploy it to nodejs server
   
- index.js uses hydrate to use domeleemnt generated at server side 
  and at client side rending it uses to associate event listner etc with react component 
