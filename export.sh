#!/bin/bash

# 将有用的东西复制过去，仅此而已

rm -rf extension
mkdir extension
cp manifest.json ./extension/manifest.json
cp index.html ./extension/index.html
cp -r static/ ./extension/static
cp -r img/ ./extension/img

cp ./extension/static/img/* ./extension/img/*
rm -rf ./extension/static/img
