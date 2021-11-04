#!/bin/bash
if [ -d "./node_modules" ]; then
  echo "node_modules installed"

  else
    echo "installing node_modules"
    npm install
fi

exec "$@";