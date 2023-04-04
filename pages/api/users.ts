import fs from 'fs';
import path from 'path';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
  bio: string;
  image: string;
  github: string;
  socials: {
    twitter: string;
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<Data>>
) {
  const directoryPath: string = path.join(process.cwd(), 'data');
  const files: Array<string> = fs.readdirSync(directoryPath);

  console.log(files)

  const users: Array<Data> = files.map((file) => {
    console.log(file)
    const fileData: Data = JSON.parse(fs.readFileSync(path.join(directoryPath, file)).toString());
    return ({
      ...fileData,
      username: file.split('.')[0],
    })
  });



  return res.status(200).json(users);
}
