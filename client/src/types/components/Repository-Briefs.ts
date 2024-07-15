// export type RepositoryStatsNames = 'repositories' | 'followers' | 'followings';

export type RepositoryBriefsPropsTypes =
    | { title: 'repositories'; counts: { repositories: number } }
    | { title: 'followers'; counts: { followers: number } }
    | { title: 'followings'; counts: { followings: number } };

// export type RepositoryBriefsPropsTypes<T extends RepositoryStatsNames> = T extends 'repositories'
//     ? { title: 'repositories'; counts: { repositories: number } }
//     : T extends 'followers'
//       ? { title: 'followers'; counts: { followers: number } }
//       : T extends 'followings'
//         ? { title: 'followings'; counts: { followings: number } }
//         : never;
