


// git push heroku master
//git subtree push --prefix dist heroku master   no tira dice its remote conterpart
//heroku logs --tail

//heroku config:set NODE_MODULES_CACHE=false
//heroku config:set NODE_ENV=production


//heroku buildpacks:set heroku-community/static
// Buildpack set. Next release on damp-stream-50121 will use heroku-community/static.
// Run git push heroku main to create a new release using this buildpack.



//https://devcenter.heroku.com/articles/dynos
//heroku ps 
//heroku ps:restart

// "start_prueba": "npm run prueba",
// "prueba" : "node prueba.js"
// "test:unit": "vitest --environment jsdom",
// "lint": "eslint . --ext .vue,.js,.jsx,.cjs,.mjs --fix --ignore-path .gitignore"




//git subtree push --prefix docs origin gh-pages


//SET NODE_ENV=development

console.log("DEV??" , process.env.NODE_ENV === 'dev') // true false
console.log("env" , process.env)
console.log("NPM_CONFIG_PRODUCTION" , process.env.NPM_CONFIG_PRODUCTION);
console.log("NODE_ENV", process.env.NODE_ENV)
