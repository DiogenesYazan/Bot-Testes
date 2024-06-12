module.exports = {
    app: {
        token: 'OTE3OTIxNDM4ODMxMzcwMjYw.Gzxhiq.mP6vkuZDLakBSwbzCd_ZkjyE05POamRF1U0KFE',
        playing: 'by Yazan_Dev#💜',
        global: true,
        guild: '605296756632322048',
        extraMessages: false,
        loopMessage: false,
        lang: 'pt',
        Translate_Timeout: 10000,
        enableEmojis: false,
    },

    emojis:{
        'back': '⏪',
        'skip': '⏩',
        'ResumePause': '⏯️',
        'savetrack': '💾',
        'volumeUp': '🔊',
        'volumeDown': '🔉',
        'loop': '🔁',
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: '',
            commands: []
        },
        maxVol: 100,
        spotifyBridge: true,
        volume: 75,
        leaveOnEmpty: true,
        leaveOnEmptyCooldown: 30000,
        leaveOnEnd: true,
        leaveOnEndCooldown: 30000,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
