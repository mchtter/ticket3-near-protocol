#!/usr/bin/env bash
set -e

[ -z "$CONTRACT" ] && echo "Missing \$CONTRACT environment variable" && exit 1
[ -z "$OWNER" ] && echo "Missing \$CONTRACT environment variable" && exit 1

echo
echo 'About to call buyTicket() on the contract'
echo near call $CONTRACT buyTicket '{ "activityType":  "Theatre", "isVip": false }'  --accountId $OWNER --amount 2
echo
echo \$CONTRACT is $CONTRACT
echo
near call $CONTRACT buyTicket '{ "activityType":  "Theatre", "isVip": false }'  --accountId $OWNER --amount 2