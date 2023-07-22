export enum AppRoutes {
    // Main Page
    MAIN_PAGE = '/',
    // Website Pages
    WEB_HOME = '/website-home',
    // Platform Pages
    PL_HOME = '/platform-home',
    PL_MY_STATS = '/platform-my-stats',
    PL_MY_PARTY = '/platfrom-my-party',
    PL_GUILD_STATS = '/platform-guild-stats'
}

export const AppRoutesNames = {
    [AppRoutes.MAIN_PAGE]: 'Home',
    [AppRoutes.WEB_HOME]: 'Website',
    [AppRoutes.PL_HOME]: 'Platform',
    [AppRoutes.PL_MY_STATS]: 'My Stats',
    [AppRoutes.PL_MY_PARTY]: 'My Party',
    [AppRoutes.PL_GUILD_STATS]: 'Guild Stats'
}