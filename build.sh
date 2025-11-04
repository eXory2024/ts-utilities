#!/bin/bash

rm -rf dist/
mkdir dist/

node buildIndex.mjs

./node_modules/.bin/tsc
