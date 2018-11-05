DROP DATABASE halfwaythere;
CREATE DATABASE halfwaythere;

\c halfwaythere;

CREATE TABLE locations (
    id SERIAL PRIMARY KEY,
    search_query VARCHAR(255),
    formatted_query VARCHAR(255),
    latitude NUMERIC (8, 6),
    longitude NUMERIC (9 ,6)
);

INSERT INTO locations (search_query, formatted_query, latitude, longitude) VALUES ('test_query', 'test_query', 0, 1); 

select * from locations;