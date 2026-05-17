import { useStore } from "../../store/store";
import {
  ProfileContainer,
  ProfileHeader,
  ProfileAvatar,
  ProfileName,
  ProfileUsername,
  ProfileDate,
  ProfileBio,
  ProfileStats,
  StatItem,
  StatName,
  LinkSection,
  LinkItem,
} from "./Profile.styles";

import iconLocation from "../../assets/icon-location.svg";
import iconTwitter from "../../assets/icon-twitter.svg";
import iconWebsite from "../../assets/icon-website.svg";
import iconCompany from "../../assets/icon-company.svg";

export const Profile = () => {
  const { profileData } = useStore();
  const {
    login,
    avatar_url,
    name,
    bio,
    created_at,
    public_repos,
    followers,
    following,
    location,
    twitter_username,
    blog,
    company,
  } = profileData || {};
  const stats = [
    { name: "Repos", value: public_repos, id: 1 },
    { name: "Followers", value: followers, id: 2 },
    { name: "Following", value: following, id: 3 },
  ];
  const links = [
    { icon: iconLocation, value: location, id: 1 },
    { icon: iconTwitter, value: twitter_username, id: 2 },
    { icon: iconWebsite, value: blog, id: 3 },
    { icon: iconCompany, value: company, id: 4 },
  ];
  return (
    <ProfileContainer>
      <ProfileHeader>
        <ProfileAvatar src={avatar_url} alt={login} />
        <ProfileName>{name}</ProfileName>
        <ProfileUsername>@{login}</ProfileUsername>
        <ProfileDate>
          Joined {created_at && new Date(created_at).toLocaleDateString()}
        </ProfileDate>
        <ProfileBio>{bio || "This profile has no bio."}</ProfileBio>
      </ProfileHeader>
      <ProfileStats>
        {stats.map((stat) => (
          <StatItem key={stat.id}>
            <StatName>{stat.name}</StatName>
            {stat.value}
          </StatItem>
        ))}
      </ProfileStats>
      <LinkSection>
        {links.map((link) => (
          <LinkItem key={link.id}>
            <img src={link.icon} alt={link.value} />
            {link.id === 3 ? (
              <a href={link.value} target="_blank" rel="noopener noreferrer">
                {link.value || "Not Available"}
              </a>
            ) : (
              <p>{link.value || "Not Available"}</p>
            )}
          </LinkItem>
        ))}
      </LinkSection>
    </ProfileContainer>
  );
};
