-- AlterTable
ALTER TABLE "lists" ALTER COLUMN "content" SET DEFAULT '';

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "favorite" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "viewed" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "want_to_watch" TEXT NOT NULL DEFAULT '';
