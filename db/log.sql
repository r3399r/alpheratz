CREATE TABLE log (
	id UUID NOT NULL DEFAULT gen_random_uuid(),
    user_id STRING NOT NULL,
	action STRING NOT NULL,
	message STRING NULL,
    type STRING NULL,
	attribute STRING NULL,
	old_value STRING NULL,
	new_value STRING NULL,
	created_at TIMESTAMP NULL,
	updated_at TIMESTAMP NULL,
	PRIMARY KEY (id ASC),
	FOREIGN KEY (user_id) REFERENCES "user"(id)
);