#!/usr/bin/env bash
## *************************************************************************
#   Launch scripts for MOBI integration tests.
#   TODO: this is deprecated script and is not used. Fix is needed.
## *************************************************************************

# pin current folder and deployment root folder
CUR_DIR="$PWD"
DIR_ROOT="$( cd "$( dirname "$0" )" && pwd )"


##
#   Parse input arguments.
##
# first arg is the name of the project (to copy project level config into ./etc/cfg/project.js)
PROJECT=$1


##
#   Copy project configuration into ./etc/cfg/project.js to be merged with global & local configs on start.
##
FILE_PRJ_CFG=${DIR_ROOT}/src/mobi/cfg/prj/${PROJECT}.js
if [ -f "${FILE_PRJ_CFG}" ]
then
    echo "There is project configuration in '${FILE_PRJ_CFG}'."
    cp  ${FILE_PRJ_CFG} ${DIR_ROOT}/etc/cfg/project.js
    echo "Project configuration is copied to '${DIR_ROOT}/etc/cfg/project.js'."
else
    echo "There is no expected project configuration in '${FILE_PRJ_CFG}'. Aborting..."
    cd ${DIR_CUR}
    exit 255
fi


##
#   Run tests.
##
echo ""
echo "Go to the root folder and run all tests"
cd ${DIR_ROOT}/
node ./scenario/all.js


##
#   Finalize job.
##
echo ""
echo "Auto test is done."
cd ${CUR_DIR}