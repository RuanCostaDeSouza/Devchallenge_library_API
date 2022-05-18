-- CreateTable
CREATE TABLE "books" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "publishing_company" TEXT NOT NULL,
    "picture" TEXT NOT NULL,
    "author" TEXT NOT NULL,

    CONSTRAINT "books_pkey" PRIMARY KEY ("id")
);
