#!/usr/bin/env bash
## *************************************************************************
#   Launch scripts for MOBI integration tests.
## *************************************************************************


# pin current folder and deployment root folder
CUR_DIR="$PWD"
DIR_ROOT="$( cd "$( dirname "$0" )" && pwd )"

echo ""
echo "Go to the root folder and run all tests"
cd ${DIR_ROOT}/
/usr/bin/npm test

# Finalize job
echo ""
echo "Auto test is done."
cd ${CUR_DIR}