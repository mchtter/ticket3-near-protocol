#!/usr/bin/env bash
set -e

[ -z "$CONTRACT" ] && echo "Missing \$CONTRACT environment variable" && exit 1
[ -z "$OWNER" ] && echo "Missing \$CONTRACT environment variable" && exit 1

echo
echo 'About to call healthCheck() on the contract'
echo near view $CONTRACT healthCheck
echo
echo \$CONTRACT is $CONTRACT
echo
near view $CONTRACT healthCheck