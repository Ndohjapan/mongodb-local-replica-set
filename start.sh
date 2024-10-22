#!/bin/bash

# Start the MongoDB containers
docker-compose up -d

# Run the replica set initialization
./init-replica.sh
