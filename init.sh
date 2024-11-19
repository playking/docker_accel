#!/bin/bash
set -e

psql -U postgres -c "CREATE DATABASE vega_test_bd;"
psql -U postgres -c "CREATE DATABASE accelerator;"

sleep 20

psql -U postgres -f /qwerty.dump

echo "Databases created and dump restored!"