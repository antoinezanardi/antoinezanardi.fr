#!/bin/bash -e
# -----------------------------------------------------------------------------
# create-release-changelog.sh
#
# Generates a release changelog using semantic-release, reformats output,
# and saves it to RELEASE.md for review or publishing.
#
# Usage:
#   ./create-release-changelog.sh
# -----------------------------------------------------------------------------

npx semantic-release --dry-run --no-ci | awk '/^## [0-9]+\.[0-9]+\.[0-9]+( \(https:\/\/github\.com\/)?/ {if (found) exit; found=1} found {print}' >RELEASE.md
gawk '
  {
    sub(/^ */, "");
    sub(/ \(.+?\)$/, "");
    if (/^\* [^:]+: /) {
      $0 = gensub(/^\* ([^:]+): /, "* **\\1**: ", "g")
    }
    print
  }' RELEASE.md >temp.md && mv temp.md RELEASE.md
sed -Ei 's/^## ([0-9]+\.[0-9]+\.[0-9]+).*/## Release v\1/' RELEASE.md