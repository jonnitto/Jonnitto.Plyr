#!/bin/bash

if [[ $TRAVIS_PULL_REQUEST_BRANCH != *"dependabot"* ]]; then
  echo "Not a dependabot Pull Request, aborting"
  exit 0
fi

echo "Cloning repo"
git clone "https://"$PUSH_TOKEN"@github.com/"$TRAVIS_REPO_SLUG".git" repo
cd repo

echo "Switching to branch $TRAVIS_PULL_REQUEST_BRANCH"
git checkout $TRAVIS_PULL_REQUEST_BRANCH

# See if commit message includes "Bump plyr"
git log --name-status HEAD^..HEAD | grep "Bump plyr" || exit 0

echo "Update Plyr assets"

yarn

git config --global user.email "$PUSH_EMAIL"
git config --global user.name "Travis CI"
git config --global push.default simple

git add .
git commit -m ":arrow_up: Update Plyr assets"
git push
