#!/usr/bin/env bash
eval "$(ssh-agent -s)"
mkdir ~/.ssh
mv .travis-config ~/.ssh/config
mv .deploy.pem ~/.ssh/deploy_key.pem
chmod 600 ~/.ssh/deploy_key.pem
git remote add deploy ssh://vps514431.ovh.net/home/git/antoinezanardi.git
git push deploy master
