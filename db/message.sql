CREATE TABLE "message" (
	id UUID NOT NULL DEFAULT gen_random_uuid(),
    "message" STRING NOT NULL,
    type STRING NOT NULL,
	created_at TIMESTAMP NULL,
	updated_at TIMESTAMP NULL,
	PRIMARY KEY (id ASC)
);