CREATE TABLE "user" (
	id STRING NOT NULL,
    "name" STRING NOT NULL,
    picture_url STRING NULL,
	is_follow BOOLEAN NOT NULL,
	created_at TIMESTAMP NULL,
	updated_at TIMESTAMP NULL,
	PRIMARY KEY (id ASC)
);