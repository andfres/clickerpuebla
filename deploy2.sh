#!/usr/bin/env sh

# abort on errors
set -e

npm run build

git add .
git commit -m 'deploy'
git push origin master

cd dist

# git init
git checkout build
git add .
git commit -m 'prueba'
git push origin build 

# git push heroku build



cd -