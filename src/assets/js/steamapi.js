import SteamAPI from './steamapi';
const steam = new SteamAPI('D29B43A3EDF1F47C5D5FFE76C5B9A77C');

steam.resolve('https://steamcommunity.com/id/xsuprax/').then(id => {
    steam.getUserSummary(id).then(summary => {
        console.log(summary);
    });
});

export function hello() {
    return "Hello World";
}