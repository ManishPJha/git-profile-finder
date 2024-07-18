import { useEffect } from 'react';
import Avatar from './Avatar';
import Button from './Button';
import RepositoryBriefs from './Repository-Briefs';
import Typography from './Typography';

import type { ProfileDetailsPropsTypes } from '@_types/components/Profile-Details';

const ProfileDetails = ({ profile }: ProfileDetailsPropsTypes) => {
    const handleViewExternalGitProfile = (e: React.SyntheticEvent<HTMLButtonElement>) => {
        e.preventDefault();
        window.open(`https://github.com/${profile?.username}`, '_blank');
    };

    useEffect(() => {
        console.log('💛 ProfileDetails is mounted...');
        return () => {
            console.log('🌊 ProfileDetails is unmounted...');
        };
    }, []);

    if (!profile) return null;

    return (
        <div className="bg-gray-light p-4 mt-3">
            <div className="flex flex-col md:flex-row items-center md:items-start">
                <div className="w-full">
                    <div className="flex justify-between flex-col md:flex-row items-center md:items-start gap-4 mb-8">
                        <div className="md:mr-4 ">
                            {profile.avatar && (
                                <Avatar
                                    altText="avatar image"
                                    rounded
                                    size={4}
                                    imageSrc={profile.avatar}
                                />
                            )}
                            <div className="pt-4 md:space-y-2 sm:space-y-1">
                                <Typography variant="h1">{profile.name}</Typography>
                                <Typography variant="p">{profile.bio}</Typography>
                                <Typography variant="p">@{profile.username}</Typography>
                            </div>
                        </div>
                        <div className="flex justify-between flex-col md:flex-row items-center md:items-start gap-4">
                            <div className="flex flex-col space-y-2 text-white"></div>
                        </div>

                        <div>
                            <Button
                                rounded
                                variant="ghost"
                                onClick={handleViewExternalGitProfile}
                                className="hover:bg-gray-800 bg-gray-600"
                            >
                                View on GitHub
                            </Button>
                        </div>
                    </div>

                    <div className="bg-gray-800 rounded-md p-4 flex flex-col md:flex-row justify-around text-center gap-4">
                        <RepositoryBriefs
                            title="repositories"
                            counts={{ repositories: profile.public_repos }}
                        />
                        <RepositoryBriefs
                            title="followers"
                            counts={{ followers: profile.followers }}
                        />
                        <RepositoryBriefs
                            title="followings"
                            counts={{ followings: profile.following }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileDetails;
