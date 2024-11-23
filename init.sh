#!/bin/bash

psql -U postgres -c "CREATE DATABASE vega_test_bd;"
psql -U postgres -c "CREATE DATABASE accelerator;"


psql -U postgres -f /qwerty.dump

echo "Databases created and dump restored!"