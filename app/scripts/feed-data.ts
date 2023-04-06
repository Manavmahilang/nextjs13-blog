import * as dotenv from 'dotenv';
import * as fs from 'fs';
import { PrismaClient } from '@prisma/client';

dotenv.config();

const prisma = new PrismaClient();

async function main() {
  console.log(`Start seeding ...`);
  const posts = JSON.parse(fs.readFileSync('../../public/data/posts.json', 'utf8'));
  for (const postData of posts) {
    const post = await prisma.post.create({
      data: {
        createdBy: postData.createdBy,
        createdOn: new Date(postData.createdOn),
        title: postData.title,
        sDescription: postData.sDescription,
        content: postData.content,
        Image: 'https://media.gettyimages.com/id/450585327/vector/antique-illustration-of-machinery-used-in-textile-industry.jpg?s=612x612&w=0&k=20&c=txFrHfSUyrHu3hd6P_syLlVcqF3OKjQctiQ2nY033lo=',
      },
    });
    console.log(`Created post with id: ${post.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
