#!/usr/bin/env bash
set -eux

rm -f ./project_init.sh

if [ ! -d .git ]; then
    git init
fi

s util deno-lsp-setup
