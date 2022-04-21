CREATE DATABASE nara;


CREATE TABLE IF NOT EXISTS user (
  id int(11) NOT NULL,
  name varchar(200) NOT NULL,
  nick varchar(200) NOT NULL,
  timestamp datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  email varchar(200) NOT NULL,
  pass varchar(1000) NOT NULL,
  lastname varchar(200) NOT NULL
);

ALTER TABLE user ADD PRIMARY KEY (id);
ALTER TABLE user MODIFY id int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `nara`.`user`
RENAME TO  `nara`.`Users` ;