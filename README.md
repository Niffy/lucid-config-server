# Lucid Config server
A simple server to store various configuration versions for various stages.

It's simply a HTTP server with in-memory storage.

## Intentions
* Track requests for stages and versions - Find which versions servers are requesting
* Catch when stages are missing properties when other stages have them
* Clients can always request the latest configuration
* Work with JSON objects rather than key/value

## Roadmap
* Distribute between nodes using log replication
* Inform clients on how long to cache version
* Security
* Persist data on every commit to recover when acting as a single node
* Web interface to view configurations
