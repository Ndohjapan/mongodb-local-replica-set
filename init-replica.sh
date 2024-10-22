#!/bin/bash

# Wait for MongoDB to start
sleep 10

# Run the initialization script inside the mongo1 container
docker exec -it mongo1 mongosh --eval "load('/scripts/init-replica-set.js')"
