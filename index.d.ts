declare namespace Tennis {

    type Hand = "left" | "right";

    interface RawPlayer {
        uri: string
        country: string
        name: string
        height: number
        weight: number
        turnedPro: number
        hand: Hand
    }

    interface Player extends RawPlayer {
        birthday: Date
    }

    interface NetworkPlayer extends RawPlayer {
        birthday: string
    }

    type RankingType = "single" | "double";

    interface RawRanking {
        playerUri: string
        playerName: string
        rank: number
        points: number
        pointsDropping: number
        tournamentsPlayed: number
        type: RankingType
    }

    interface Ranking extends RawRanking {
        date: Date
    }

    interface NetworkRanking extends RawRanking {
        date: string
    }
}

export = Tennis
