module.exports = {
    getSongs: function() {
        const songsArray = [
            {
                source: '/songs/shineonme.mp3',
                name: 'Shine On Me',
                artist: 'Dan Auerbach',
                id: 0,
                description: `The lead single from The Black Keys' vocalist's new solo record follows three No. 1s by the duo on the Adult Alternative Songs chart.`,
                albumArt: '/images/waitingonasong.jpeg'
            },
            {
                source: '/songs/KAYTRANADA.mp3',
                name: `You're the One`,
                artist: 'KAYTRANADA',
                id: 1,
                description: `99.9% is the debut studio album by Canadian electronic music producer Kaytranada, released on May 6, 2016, through XL Recordings worldwide and HW&W Recordings in Canada. The 15-track album features guest contributions from the likes of Anderson .Paak, Vic Mensa, Little Dragon, Syd, Craig David, AlunaGeorge, and BadBadNotGood amongst others. 99.9% was supported by five singles: "Leave Me Alone" featuring Shay Lia, "Drive Me Crazy" featuring Vic Mensa, the Karriem Riggins and River Tiber-assisted instrumental "Bus Ride", "Glowed Up" featuring Anderson .Paak, and "Lite Spots"`,
                albumArt: '/images/99.jpg'
            },
            {
                source: '/songs/Chain-Smoker.mp3',
                name: 'Chain Smoker',
                artist: 'Chance the Rapper',
                id: 2,
                description: `Acid Rap is the second official mixtape by American rapper Chance the Rapper. It was released on April 30, 2013, as a free digital download. In July 2013, the album debuted at number 63 on the Billboard Top R&B/Hip-Hop Albums, due to bootleg downloads on iTunes and Amazon not affiliated with the artist.[1] The mixtape has been certified "diamond" on mixtape site Datpiff, for garnering over 1,000,000 downloads.`,
                albumArt: '/images/acidrap.jpg'
            },
            {
                source: '/songs/Money_on_me.mp3',
                name: 'Money on Me',
                artist: 'Snakehips ft. Anderson Paak',
                id: 3,
                description: `Brandon Paak Anderson[1][2] (born February 8, 1986), better known by his stage name Anderson Paak (stylized as Anderson .Paak), is an American rapper, songwriter, drummer, singer and record producer from Oxnard, California. He released his debut album, O.B.E. Vol. 1 in 2012, under the pseudonym Breezy Lovejoy. He went on to release Venice in 2014, under his current moniker.[3] Paak followed with Malibu, in 2016,[4] which received a nomination for Best Urban Contemporary Album at the Grammy Awards. Apart from his solo career, Paak is also one-half of NxWorries, alongside record producer Knxwledge.`,
                albumArt: '/images/snakehips.jpg'
            }
        ]
    return songsArray
    }
}