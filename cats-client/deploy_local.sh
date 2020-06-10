if [ $# -ne 1 ]; then
  echo "Must specify either dev or staging."
  exit 0;
fi;

if [ "$1" == "dev" ]; then
  cp src/api.config.dev.js src/api.config.js
  npm start&
elif [ "$1" == "staging" ]; then
  cp src/api.config.staging.js src/api.config.js
  npm start&
else
  echo "Must specify either dev or staging."
  exit 0;
fi;
