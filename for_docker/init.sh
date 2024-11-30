#!/bin/bash

docker exec -it accel_psql_1 psql -U postgres -c "CREATE DATABASE vega_test_bd;"
docker exec -it accel_psql_1 psql -U postgres -c "CREATE DATABASE accelerator;"


docker exec -it accel_psql_1 psql -U postgres -f /qwerty.dump

echo "Databases created and dump restored!"