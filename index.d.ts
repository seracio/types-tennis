declare namespace Tennis {

    /**
     * PLAYER
     */
    type Hand = "left" | "right";

    interface RawPlayer {
        id: string
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

    /**
     * RANKING
     */
    type RankingType = "single" | "double";

    interface RawRanking {
        playerId: string
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

    /**
     * TOURNAMENT
     */

    type Surface = 'Hard' | 'Clay' | 'Grass';

    type Situtation = 'Outddor' | 'Indoor';

    interface RawTournament {
        edition: number
        name: string
        country: string
        id: string
        surface: Surface
        situtation: Situtation
        prizeMoney: string
        category: string
    }

    interface NetworkTournament extends RawTournament {
        start: string
        end: string
    }

    interface Tournament extends RawTournament {
        start: Date
        end: Date
    }

    /**
     * STATS
     */
    interface Stat {
        playerId: string
        label: string
        value: string
    }

    /**
     * MATCH
     */
    interface Match {
        id: string
        winnerId: string
        loserId: string
        tournamentId: string
        score: Array<Array<number>>
        time: number
        round: string
        retired: boolean,
        stats: Array<Stat>
    }

}

export = Tennis
