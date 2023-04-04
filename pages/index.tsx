import UserCard from '@/components/UserCard';
import Head from 'next/head';
import { useEffect } from 'react';

type UserData = {
  name: string;
  bio: string;
  image: string;
  github: string;
  socials: {
    twitter: string;
  }
}

interface IProps {
  users: Array<UserData>
}

export default function Home({ users }: IProps) {
  useEffect(() => {
    console.log(users)
  }, [users]);

  return (
    <>
      <Head>
        <title>Heroes who should react</title>
        <meta name="description" content="Heroes who should react" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <header className='text-lg'>
          Heroes who should react
        </header>
        <div>
          {
            users.map((user, index) => {
              return (
                <UserCard
                  key={index}
                  image={user.image}
                  name={user.name}
                  bio={user.bio}
                  github={user.github}
                  socials={user.socials}
                />
              )
            })
          }
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  let users;
  try {
    const usersResponse = await fetch(`http://localhost:3000/api/users`);
    users = await usersResponse.json();
  } catch (err) {
    console.error('Something went wrong while fetcing user data');
  }

  return {
    props: { users },
  };
}
