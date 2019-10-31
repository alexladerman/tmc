#!/bin/bash
# Make sure this file has UNIX line endings. Ran into problems when docker run refused to interpret anything lines in the script as a command. Run "dos2unix filename" to fix

set -e

psql -v ON_ERROR_STOP=1 --username postgres --dbname postgres <<-EOSQL
  DROP DATABASE IF EXISTS tmc;
  CREATE DATABASE tmc;
  DROP USER IF EXISTS tmc;
  CREATE USER tmc WITH PASSWORD 'lBg2nt0KFh13N6hx';
  GRANT ALL PRIVILEGES ON DATABASE tmc TO tmc;
EOSQL



