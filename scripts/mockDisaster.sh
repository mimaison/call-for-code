#!/bin/bash

START=$(date -v +2d '+%Y-%m-%dT%H:%MZ')
END=$(date -v +4d '+%Y-%m-%dT%H:%MZ')

read -r -d '' DISASTER << EOM
{
    "type": "hurricane",
    "start": "${START}",
    "end": "${END}",
    "location": {
        "country": "Puerto Rico",
        "latitude": 18.40,
        "longitude": -66.10
    }
}
EOM

url="http://localhost:3000/mocks/disaster"
curl -X POST -H "Content-Type: application/json" -d "${DISASTER}" $url
