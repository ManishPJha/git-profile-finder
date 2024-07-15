import Avatar from './Avatar';
import Button from './Button';
import RepositoryBriefs from './Repository-Briefs';
import Typography from './Typography';

const ProfileDetails = ({}) => {
    return (
        <div className="bg-gray-light p-4 mt-3">
            <div className="flex flex-col md:flex-row items-center md:items-start">
                <div className="w-full">
                    <div className="flex justify-between flex-col md:flex-row items-center md:items-start gap-4 mb-8">
                        <div className="mr-4">
                            <Avatar
                                altText="avatar image"
                                rounded
                                size={100}
                                imageSrc="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                            />
                            <div className="pt-4">
                                <Typography variant="h1">John Doe</Typography>
                                <Typography variant="p">Software Developer</Typography>
                                <Typography variant="p">@john_doe</Typography>
                            </div>
                        </div>
                        <div className="flex justify-between flex-col md:flex-row items-center md:items-start gap-4">
                            <div className="flex flex-col space-y-2 text-white"></div>
                        </div>

                        <div>
                            <Button
                                rounded
                                variant="ghost"
                                onClick={() => {}}
                                className="hover:bg-gray-800 bg-gray-600"
                            >
                                View on GitHub
                            </Button>
                        </div>
                    </div>

                    <div className="bg-gray-800 rounded-md p-4 flex flex-col md:flex-row justify-around text-center gap-4">
                        <RepositoryBriefs title="repositories" counts={{ repositories: 12 }} />
                        <RepositoryBriefs title="followers" counts={{ followers: 8 }} />
                        <RepositoryBriefs title="followings" counts={{ followings: 10 }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileDetails;
