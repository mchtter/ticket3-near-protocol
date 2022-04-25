#!/usr/bin/env bash
set -e

[ -z "$CONTRACT" ] && echo "Missing \$CONTRACT environment variable" && exit 1
[ -z "$OWNER" ] && echo "Missing \$CONTRACT environment variable" && exit 1

echo
echo 'About to call getTickets() on the contract'
echo near view $CONTRACT getTickets
echo
echo \$CONTRACT is $CONTRACT
echo
near view $CONTRACT getTickets