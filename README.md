## Development server

To start a local development server, run:

```bash
npm start
```

## Running end-to-end tests

curl --location --request GET 'http://localhost:3000/api/authors/' \
--header 'Content-Type: application/json' \
--data '{
        "firstname": "Toto1",
        "lastname": "Dupond",
        "birthdate": "2022-06-25"
} '


curl --location 'http://localhost:3000/api/authors/' \
--header 'Content-Type: application/json' \
--data '{
    "firstname": "Toto",
    "lastname": "Dupond",
    "birthdate": "2022-06-25",
    "books": [
        {
            "title": "A la plage",
            "description": "Une histoire de vacances.",
            "release_year": 1980
        }
    ]
}'
