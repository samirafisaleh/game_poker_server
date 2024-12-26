

# Poker Server

# Introduction


# Requirements

- Node JS
- MongoDB


# Installation

1. Clone repository
2. Run npm install
3. (Optional) Make run.sh executable
4. Run run.sh


##

# Models

## Match

| Field | Type |
| --------- | ------- |
|  Title | String |


## Player

| Field | Type |
| --------- | ------- |
|  Title | String |


## Transaction

| Field | Type |
| --------- | ------- |
|  Title | String |

# Endpoints

| HTTP | Endpoint | Description |
| --------- | ------- | ------ |
|  POST | /player/ | Create a player
| GET | /player/   | Get list of players
| GET   | /player/{id}/ | Get a player info
| PUT | /player/ | Update a player info
| DELETE | /player/ | Delete a player

# References