import {TwitterApi} from 'twitter-api-v2';

const client = new TwitterApi({
    appKey: '6hsg4hsibyCdqHvhVFRl2qW92',
    appSecret: 'wtpBEeN3RrMIJCrpT3OzKjQspDfoHRuU3iMdqfd9JNEj46dtRE',
    accessToken: '1553419464-vNtKOAWlapOE8dLuaDr9L1YJX8ZM4IC7IfHnz27',
    accessSecret: 'SwuCed3VrHoggpMdTyfSbFkx6ioccZQHZJnM5RoNcZM7P'
})

client.v1.tweet("This tweet was written programatically.").then((val) => {
    console.log(val);
    console.log("Tweeted!");
}).catch((err) => {
    console.log(err);
})