#!/usr/bin/env bash
eval "$(ssh-agent -s)"
if [ ! -d ~/.ssh ]; then mkdir ~/.ssh; fi
cp ./deploy/deploy_key.pem ~/.ssh/deploy_key.pem
chmod 600 ~/.ssh/deploy_key.pem
ssh-add ~/.ssh/deploy_key.pem
git remote add deploy ssh://debian@vps514431.ovh.net/home/git/antoinezanardi.fr.git
git push deploy master
