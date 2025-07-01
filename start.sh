#!/bin/bash
set -e

# Install dependencies
yarn install

echo "Starting Toolbox Challenge environment..."
docker compose up --build 