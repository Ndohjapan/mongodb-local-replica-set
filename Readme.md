# MongoDB Replica Set with Docker Compose

This project sets up a MongoDB replica set using Docker Compose, making it easy to create a local development environment with a distributed MongoDB setup.

## Prerequisites

- Docker
- Docker Compose

## Getting Started

1. Clone this repository:

```
 git clone https://github.com/Ndohjapan/mongodb-local-replica-set
 cd mongodb-local-replica-set
```

2. Run the start script:

```
   ./start.sh
```

This script will:

- Start the Docker containers using Docker Compose
- Initialize the replica set
- Expose the replica set to your host computer's network

## Project Structure

- `docker-compose.yml`: Defines the MongoDB services and network configuration
- `init-replica.js`: JavaScript file to initialize the replica set
- `start.sh`: Main script to start the project
- `run-docker-compose.sh`: Script to run Docker Compose and execute the initialization script

## Configuration

You can modify the `docker-compose.yml` file to change the number of nodes in the replica set or adjust other settings as needed.

## Connecting to the Replica Set

After running the start script, you can connect to the replica set using the following connection string:

```
mongodb://127.0.0.1:27017,127.0.0.1:27018,127.0.0.1:27019/?replicaSet=rs0
```

## Stopping the Replica Set

To stop the replica set and remove the containers, run:

```
docker-compose down
```

## License

This project is open-source and available under the MIT License.
