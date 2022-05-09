#!/usr/bin/env bash

# abort on errors

node ./prueba.js

npm run build

git add .
git commit -m "deploy"

git push origin master

