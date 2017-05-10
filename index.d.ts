declare namespace Tennis {

    interface RawPlayer {
        uri: string,
        country: string,
        name: string,
        height: number,
        weight: number,
        turnedPro: number,
        hand: 'left' | 'right',
    }

    interface Player extends RawPlayer {
        birthday: Date,
    }

    interface NetworkPlayer extends RawPlayer {
        birthday: string,
    }

    interface RawRanking {
        playerUri: string,
        playerName: string,
        rank: number,
        points: number,
        pointsDropping: number,
        tournamentsPlayed: number,
        type: 'single' | 'double',
    }

    interface Ranking extends RawRanking {
        date: Date,
    }

    interface NetworkRanking extends RawRanking {
        date: string,
    }
}

export = Tennis
