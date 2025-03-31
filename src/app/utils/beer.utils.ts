export enum BeerType{
    BLONDE = "blonde",
    AMBREE = "ambree",
    IPA ="ipa",
    TRIPLE = "triple",
}

export interface IBeerProperties {
    imageUrl: string;
    color: string;
}

export const BeerTypeProperties: {[key: string]: IBeerProperties} = {
    [BeerType.BLONDE]: {
        imageUrl: 'img/blonde.png',
        color: 'rgba(110,158,213)'
    },

    [BeerType.AMBREE]: {
        imageUrl: 'img/ambree.png',
        color: 'rgba(174,32,18)'
    },

    [BeerType.IPA]: {
        imageUrl: 'img/ipa.png',
        color: 'rgba(252,163,17)'
    },

    [BeerType.TRIPLE]: {
        imageUrl: 'img/triple.png',
        color: 'rgba(239,202,8)'
    },
}