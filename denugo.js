#!/usr/bin/env bash
#
# Updates the solana version in all the SPL crates
#

here="$(dirname "$0")"

solana_ver=$1
if [[ -z $solana_ver ]]; then
  echo "Usage: $0 <new-solana-version>"
  exit 1
fi

if [[ $solana_ver =~ ^v ]]; then
