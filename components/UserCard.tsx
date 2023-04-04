interface IProps {
  name: string;
  bio: string;
  image: string;
  github: string;
  socials: {
    twitter: string;
  }
}

const UserCard: React.FC<IProps> = ({ name, bio, image, github, socials }) => {
  return (
    <div className="w-72 px-4 py-2 bg-gray-200 space-x-2 flex items-center">
      <div>
        <img src={image} alt={name} className="w-16 h-16 rounded-full" />
      </div>
      <div className="text-sm">
        <div className="flex">
          <p>Name: </p>
          <p>{name}</p>
        </div>
        <div className="flex">
          <p>Github: </p>
          <a href={`https://github.com/${github}`} target="_blank">@{github}</a>
        </div>
        <div className="flex">
          <p>Twitter: </p>
          <a href={`https://twitter.com/${socials.twitter}`} target="_blank">@{socials.twitter}</a>
        </div>
      </div>
    </div>
  )
}

export default UserCard;
