DROP DATABASE halfwaythere;
CREATE DATABASE halfwaythere;

\c halfwaythere;


CREATE TABLE yelp (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    image_url VARCHAR(255),
    yelp_url VARCHAR(255),
    info TEXT,
    rating NUMERIC(2,1),
    price VARCHAR(255),
    address VARCHAR(255),
    location VARCHAR(255),
    phone VARCHAR(255)
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    user_name VARCHAR(255),
    mobile_number NUMERIC(12,0)
);

CREATE TABLE history (
    id SERIAL PRIMARY KEY,
    users_id INTEGER NOT NULL REFERENCES users(id),
    yelp_id INTEGER NOT NULL REFERENCES yelp(id)
);

INSERT INTO yelp (name, image_url, yelp_url, info, rating, price, address, location, phone) 
VALUES ('test shop','http://google.maps.com', 'https://www.yelp.com/biz/the-pink-door-seattle-4','Blah Blah Blab about this place.  I do not want to write anything else here.  Suck it', 5, '$$', '1234 Local', '4321 Local seattle wa', '206-302-1432');

INSERT INTO users (user_name, mobile_number) 
VALUES ('Ray', 7812498879);
INSERT INTO users (user_name, mobile_number) 
VALUES ('Roger', 9159299401);
INSERT INTO users (user_name, mobile_number) 
VALUES ('Pablo', 2538860938);
INSERT INTO users (user_name, mobile_number) 
VALUES ('Tanner', 2062004908);

INSERT INTO history (users_id, yelp_id) 
VALUES (1,1);

select * from yelp;
select * from users;
select * from history;