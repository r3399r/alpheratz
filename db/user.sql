CREATE TABLE "user" (
	id STRING NOT NULL,
	follow BOOLEAN NOT NULL,
    main_stage STRING NOT NULL,
    fire_stage STRING NULL,
    water_stage STRING NULL,
    earth_stage STRING NULL,
    air_stage STRING NULL,
    aether_stage STRING NULL,
	created_at TIMESTAMP NULL,
	updated_at TIMESTAMP NULL,
	PRIMARY KEY (id ASC)
);