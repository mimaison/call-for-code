#!/bin/bash

url="http://localhost:3000/mocks/disaster"
curl -X POST -H "Content-Type: application/json" -d "@./disaster.json" $url