
DROP TABLE IF EXISTS Companies;
DROP TABLE IF EXISTS Vehicle;

CREATE TABLE Companies (
    Id SERIAL PRIMARY KEY,
    Name VARCHAR(50),
    Founder VARCHAR(50),
    Founded_On DATE
);

CREATE TABLE Vehicle (
    Id SERIAL PRIMARY KEY,
    Make INT,
    Model VARCHAR(50),
    Year INT,
    Type VARCHAR(15),
    Color VARCHAR(15),
    FOREIGN KEY (Make) REFERENCES Companies (Id)
);

