import Avatar from './Avatar';

const ProfileDetails = ({}) => {
    return (
        <div className="bg-gray-900 p-4">
            <div className="flex flex-col md:flex-row items-center md:items-start">
                <div className="mr-4">
                    {/* <UserAvatar imageSrc={avatar_url} name={name} /> */}
                    <Avatar
                        altText="avatar image"
                        rounded
                        size={100}
                        imageSrc="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                    />
                </div>

                <div className="w-full">
                    <div className="flex justify-between flex-col md:flex-row items-center md:items-start gap-4 mb-20">
                        <div>{/* <UserInfo bio={bio} completeName={name} user={login} /> */}</div>
                        <div>
                            <button
                                className="bg-gray-500 text-white rounded-none px-4 py-2"
                                // onClick={() => window.open(html_url)}
                            >
                                View on GitHub
                            </button>
                        </div>
                    </div>

                    <div className="bg-gray-800 rounded-md p-4 flex flex-col md:flex-row justify-around text-center gap-4">
                        {/* <BoxInfo title="Public Repos" content={public_repos} />
                    <BoxInfo title="Followers" content={followers} />
                    <BoxInfo title="Following" content={following} /> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileDetails;
