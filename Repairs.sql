CREATE TABLE "user" (
  "id" int PRIMARY KEY,
  "name" varchar,
  "email" varchar UNIQUE,
  "password" varchar
);

CREATE TABLE "admins" (
  "admin_id" int PRIMARY KEY,
  "name" varchar,
  "email" varchar UNIQUE,
  "password" varchar
);

CREATE TABLE "type" (
  "id" int PRIMARY KEY,
  "name" varchar UNIQUE
);

CREATE TABLE "Devices" (
  "id" int PRIMARY KEY,
  "user_id" int,
  "tipe_id" int,
  "device_name" varchar,
  "brand" varchar,
  "model" varchar,
  "serial_number" smallint UNIQUE
);

CREATE TABLE "Repair_Request" (
  "id" int PRIMARY KEY,
  "name" varchar,
  "user_id" int,
  "device_id" int,
  "problem" texrt,
  "status" enum DEFAULT 'pending',
  "request_date" timestamp,
  "complete_date" timestamp
);

CREATE TABLE "Repairs" (
  "id" int PRIMARY KEY,
  "request_id" int,
  "repair_details" varchar,
  "cost" decimal,
  "repair_date" timestamp
);

CREATE TABLE "Parts" (
  "id" int,
  "name" varchar,
  "brand" varchar,
  "model" varchar,
  "cost" decimal(20),
  "stock" smallint(2o)
);

CREATE TABLE "Repair_Parts" (
  "id" int PRIMARY KEY,
  "repair_id" int,
  "part_id" int,
  "quantity" smallint,
  "total_cost" smallint
);

CREATE TABLE "transaction" (
  "id" int PRIMARY KEY,
  "user_id" int,
  "repair_id" int,
  "total_ammount" decimal(20),
  "snap_token" int UNIQUE,
  "payment_date" date
);

CREATE TABLE "Review" (
  "id" int PRIMARY KEY,
  "user_id" int,
  "rating" smallint(5),
  "comment" text,
  "created_at" timetamps,
  "updated_at" timestamp
);

COMMENT ON COLUMN "Review"."rating" IS '1-5';

ALTER TABLE "Devices" ADD FOREIGN KEY ("user_id") REFERENCES "user" ("id");

ALTER TABLE "Devices" ADD FOREIGN KEY ("tipe_id") REFERENCES "type" ("id");

ALTER TABLE "Repair_Request" ADD FOREIGN KEY ("user_id") REFERENCES "user" ("id");

ALTER TABLE "Repair_Request" ADD FOREIGN KEY ("device_id") REFERENCES "Devices" ("id");

ALTER TABLE "Repairs" ADD FOREIGN KEY ("request_id") REFERENCES "Repair_Request" ("id");

ALTER TABLE "Repair_Parts" ADD FOREIGN KEY ("repair_id") REFERENCES "Repairs" ("id");

ALTER TABLE "Repair_Parts" ADD FOREIGN KEY ("part_id") REFERENCES "Parts" ("id");

ALTER TABLE "transaction" ADD FOREIGN KEY ("user_id") REFERENCES "user" ("id");

ALTER TABLE "transaction" ADD FOREIGN KEY ("repair_id") REFERENCES "Repairs" ("id");

ALTER TABLE "Review" ADD FOREIGN KEY ("user_id") REFERENCES "user" ("id");
