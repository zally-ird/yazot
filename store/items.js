export const state = () => ({
	dict: initialData
});

export const mutations = {};

export const actions = {};

export const getters = {
	getItem: (state) => (itemId) => {
		return state.dict[itemId];
	},
};

// -------------------------- INITIAL DATA OBJECT -----------------------------

let initialData = {
	'00': {
		itemId: '00',
		name: 'Deku Stick',
		image: '/images/icons/Deku\ Stick.png',
	},
	'01': {
		itemId: '01',
		name: 'Deku Nut',
		image: '/images/icons/Deku\ Nut.png'
	},
	'02': {
		itemId: '02',
		name: 'Bomb',
		image: '/images/icons/Bomb.png'
	},
	'03': {
		itemId: '03',
		name: 'Fairy Bow',
		image: '/images/icons/Fairy\ Bow.png'
	},
	'04': {
		itemId: '04',
		name: 'Fire Arrow',
		image: '/images/icons/Fire\ Arrow.png'
	},
	'05': {
		itemId: '05',
		name: 'Din\'s Fire',
		image: '/images/icons/Din\'s\ Fire.png'
	},
	'06': {
		itemId: '06',
		name: 'Fairy Slingshot',
		image: '/images/icons/Fairy\ Slingshot.png'
	},
	'07': {
		itemId: '07',
		name: 'Fairy Ocarina',
		image: '/images/icons/Fairy\ Ocarina.png'
	},
	'08': {
		itemId: '08',
		name: 'Ocarina of Time',
		image: '/images/icons/Ocarina\ of\ Time.png'
	},
	'09': {
		itemId: '09',
		name: 'Bombchu',
		image: '/images/icons/Bombchu.png'
	},
	'0A': {
		itemId: '0A',
		name: 'Hookshot',
		image: '/images/icons/Hookshot.png'
	},
	'0B': {
		itemId: '0B',
		name: 'Longshot',
		image: '/images/icons/Longshot.png'
	},
	'0C': {
		itemId: '0C',
		name: 'Ice Arrow',
		image: '/images/icons/Ice\ Arrow.png'
	},
	'0D': {
		itemId: '0D',
		name: 'Farore\'s Wind',
		image: '/images/icons/Farore\'s\ Wind.png'
	},
	'0E': {
		itemId: '0E',
		name: 'Boomerang',
		image: '/images/icons/Boomerang.png'
	},
	'0F': {
		itemId: '0F',
		name: 'Lens of Truth',
		image: '/images/icons/Lens\ of\ Truth.png'
	},
	'10': {
		itemId: '10',
		name: 'Magic Bean',
		image: '/images/icons/Magic\ Beans.png'
	},
	'11': {
		itemId: '11',
		name: 'Megaton Hammer',
		image: '/images/icons/Megaton\ Hammer.png'
	},
	'12': {
		itemId: '12',
		name: 'Light Arrow',
		image: '/images/icons/Light\ Arrow.png'
	},
	'13': {
		itemId: '13',
		name: 'Nayru\'s Love',
		image: '/images/icons/Nayru\'s\ Love.png'
	},
	'14': {
		itemId: '14',
		name: 'Empty Bottle',
		image: '/images/icons/Empty\ Bottle.png'
	},
	'19': {
		itemId: '19',
		name: 'Fish',
		image: '/images/icons/Fish.png',
	},
	'1A': {
		itemId: '1A',
		name: 'Lon Lon Milk & Bottle',
		image: '/images/icons/Milk.png',
	},
	'1B': {
		itemId: '1B',
		name: '[Ruto\'s] Letter',
		image: '/images/icons/Ruto\'s\ Letter.png',
	},
	'1C': {
		itemId: '1C',
		name: 'Blue Fire',
		image: '/images/icons/Blue\ Fire.png',
	},
	'1D': {
		itemId: '1D',
		name: 'Bug',
		image: '/images/icons/Bug.png',
	},
	'1E': {
		itemId: '1E',
		name: 'Big Poe',
		image: '/images/icons/Big\ Poe.png',
	},
	'1F': {
		itemId: '1F',
		name: 'Lon Lon Milk (Half)',
		image: '/images/icons/Milk\ (Half).png',
	},
	'20': {
		itemId: '20',
		name: 'Poe',
		image: '/images/icons/Poe.png',
	},
	'21': {
		itemId: '21',
		name: 'Weird Egg',
		image: '/images/icons/Weird\ Egg.png',
	},
	'22': {
		itemId: '22',
		name: 'Chicken',
		image: '/images/icons/Cucco.png',
	},
	'23': {
		itemId: '23',
		name: 'Zelda\'s Letter',
		image: '/images/icons/Zelda\'s\ Letter.png',
	},
	'24': {
		itemId: '24',
		name: 'Keaton Mask',
		image: '/images/icons/Keaton\ Mask.png',
	},
	'25': {
		itemId: '25',
		name: 'Skull Mask',
		image: '/images/icons/Skull\ Mask.png',
	},
	'26': {
		itemId: '26',
		name: 'Spooky Mask',
		image: '/images/icons/Spooky\ Mask.png',
	},
	'27': {
		itemId: '27',
		name: 'Bunny Hood',
		image: '/images/icons/Bunny\ Hood.png',
	},
	'28': {
		itemId: '28',
		name: 'Goron Mask',
		image: '/images/icons/Goron\ Mask.png',
	},
	'29': {
		itemId: '29',
		name: 'Zora Mask',
		image: '/images/icons/Zora\ Mask.png',
	},
	'2A': {
		itemId: '2A',
		name: 'Gerudo Mask',
		image: '/images/icons/Gerudo\ Mask.png',
	},
	'2B': {
		itemId: '2B',
		name: 'Mask of Truth',
		image: '/images/icons/Mask\ of\ Truth.png',
	},
	'2C': {
		itemId: '2C',
		name: 'SOLD OUT',
		image: '/images/icons/SOLD\ OUT.png',
	},
	'2D': {
		itemId: '2D',
		name: 'Pocket Egg',
		image: '/images/icons/Weird\ Egg.png',
	},
	'2E': {
		itemId: '2E',
		name: 'Pocket Cucco',
		image: '/images/icons/Cucco.png',
	},
	'2F': {
		itemId: '2F',
		name: 'Cojiro',
		image: '/images/icons/Cojiro.png',
	},
	'30': {
		itemId: '30',
		name: 'Odd Mushroom',
		image: '/images/icons/Odd\ Mushroom.png',
	},
	'31': {
		itemId: '31',
		name: 'Odd Potion',
		image: '/images/icons/Odd\ Potion.png',
	},
	'32': {
		itemId: '32',
		name: 'Poacher\'s Saw',
		image: '/images/icons/Poacher\'s\ Saw.png',
	},
	'33': {
		itemId: '33',
		name: 'Goron\'s Sword (Broken)',
		image: '/images/icons/Goron\'s\ Sword\ (Broken).png',
	},
	'34': {
		itemId: '34',
		name: 'Prescription',
		image: '/images/icons/Prescription.png',
	},
	'35': {
		itemId: '35',
		name: 'Eyeball Frog',
		image: '/images/icons/Eyeball\ Frog.png',
	},
	'36': {
		itemId: '36',
		name: 'Eye Drops',
		image: '/images/icons/Eyedrops.png',
	},
	'37': {
		itemId: '37',
		name: 'Claim Check',
		image: '/images/icons/Claim\ Check.png',
	},
	'3B': {
		itemId: '3B',
		name: 'Kokiri Sword',
		image: '/images/icons/Kokiri\ Sword.png',
	},
	'3C': {
		itemId: '3C',
		name: 'Master Sword',
		image: '/images/icons/Master\ Sword.png',
	},
	'3D': {
		itemId: '3D',
		name: 'Giant\'s Knife & Biggoron\'s Sword',
		image: '/images/icons/Biggoron\'s\ Sword.png',
	},
	'3E': {
		itemId: '3E',
		name: 'Deku Shield',
		image: '/images/icons/Deku\ Shield.png',
	},
	'3F': {
		itemId: '3F',
		name: 'Hylian Shield',
		image: '/images/icons/Hylian\ Shield.png',
	},
	'40': {
		itemId: '40',
		name: 'Mirror Shield',
		image: '/images/icons/Mirror\ Shield.png',
	},
	'41': {
		itemId: '41',
		name: 'Kokiri Tunic',
		image: '/images/icons/Kokiri\ Tunic.png',
	},
	'42': {
		itemId: '42',
		name: 'Goron Tunic',
		image: '/images/icons/Goron\ Tunic.png',
	},
	'43': {
		itemId: '43',
		name: 'Zora Tunic',
		image: '/images/icons/Zora\ Tunic.png',
	},
	'44': {
		itemId: '44',
		name: 'Kokiri Boots',
		image: '/images/icons/Kokiri\ Boots.png',
	},
	'45': {
		itemId: '45',
		name: 'Iron Boots',
		image: '/images/icons/Iron\ Boots.png',
	},
	'46': {
		itemId: '46',
		name: 'Hover Boots',
		image: '/images/icons/Hover\ Boots.png',
	},
	'47': {
		itemId: '47',
		name: 'Bullet Bag (30)',
		image: '/images/icons/Bullet\ Bag\ (30).png',
	},
	'48': {
		itemId: '48',
		name: 'Bullet Bag (40)',
		image: '/images/icons/Bullet\ Bag\ (40).png',
	},
	'49': {
		itemId: '49',
		name: 'Bullet Bag (50)',
		image: '/images/icons/Bullet\ Bag\ (50).png',
	},
	'4A': {
		itemId: '4A',
		name: 'Quiver (30)',
		image: '/images/icons/Quiver\ (30).png',
	},
	'4B': {
		itemId: '4B',
		name: 'Big Quiver (40)',
		image: '/images/icons/Quiver\ (40).png',
	},
	'4C': {
		itemId: '4C',
		name: 'Biggest Quiver (50)',
		image: '/images/icons/Quiver\ (50).png',
	},
	'4D': {
		itemId: '4D',
		name: 'Bomb Bag (20)',
		image: '/images/icons/Bomb\ Bag\ (20).png',
	},
	'4E': {
		itemId: '4E',
		name: 'Big Bomb Bag (30)',
		image: '/images/icons/Bomb\ Bag\ (30).png',
	},
	'4F': {
		itemId: '4F',
		name: 'Biggest Bomb Bag (40)',
		image: '/images/icons/Bomb\ Bag\ (40).png',
	},
	'50': {
		itemId: '50',
		name: 'Goron\'s Bracelet',
		image: '/images/icons/Goron\ Bracelet.png',
	},
	'51': {
		itemId: '51',
		name: 'Silver Gauntlets',
		image: '/images/icons/Silver\ Gauntlets.png',
	},
	'52': {
		itemId: '52',
		name: 'Golden Gauntlets',
		image: '/images/icons/Golden\ Gauntlets.png',
	},
	'53': {
		itemId: '53',
		name: 'Silver Scale',
		image: '/images/icons/Silver\ Scale.png',
	},
	'54': {
		itemId: '54',
		name: 'Golden Scale',
		image: '/images/icons/Gold\ Scale.png',
	},
	'55': {
		itemId: '55',
		name: 'Giant\'s Knife (Broken)',
		image: '/images/icons/Goron\'s\ Sword\ (Broken).png',
	},
	'56': {
		itemId: '56',
		name: 'Adult\'s Wallet',
		image: '/images/icons/Adult\'s\ Wallet.png',
	},
	'57': {
		itemId: '57',
		name: 'Giant\'s Wallet',
		image: '/images/icons/Giant\'s\ Wallet.png',
	},
	'59': {
		itemId: '59',
		name: 'Fishing Pole',
		image: '/images/icons/Fishing\ Pole.png',
	},
	'5A': {
		itemId: '5A',
		name: 'Minuet of Forest',
		image: '/images/icons/Minuet\ of\ Forest.png',
	},
	'5B': {
		itemId: '5B',
		name: 'Bolero of Fire',
		image: '/images/icons/Bolero\ of\ Fire.png',
	},
	'5C': {
		itemId: '5C',
		name: 'Serenade of Water',
		image: '/images/icons/Serenade\ of\ Water.png',
	},
	'5D': {
		itemId: '5D',
		name: 'Requiem of Spirit',
		image: '/images/icons/Requiem\ of\ Spirit.png',
	},
	'5E': {
		itemId: '5E',
		name: 'Nocturne of Shadow',
		image: '/images/icons/Nocturne\ of\ Shadow.png',
	},
	'5F': {
		itemId: '5F',
		name: 'Prelude of Light',
		image: '/images/icons/Prelude\ of\ Light.png',
	},
	'60': {
		itemId: '60',
		name: 'Zelda\'s Lullaby',
		image: '/images/icons/Zelda\'s\ Lullaby\ (Edit).png',
	},
	'61': {
		itemId: '61',
		name: 'Epona\'s Song',
		image: '/images/icons/Epona\'s\ Song\ (Edit).png',
	},
	'62': {
		itemId: '62',
		name: 'Saria\'s Song',
		image: '/images/icons/Saria\'s\ Song\ (Edit).png',
	},
	'63': {
		itemId: '63',
		name: 'Sun\'s Song',
		image: '/images/icons/Sun\'s\ Song\ (Edit).png',
	},
	'64': {
		itemId: '64',
		name: 'Song of Time',
		image: '/images/icons/Song\ of\ Time\ (Edit).png',
	},
	'65': {
		itemId: '65',
		name: 'Song of Storms',
		image: '/images/icons/Song\ of\ Storms\ (Edit).png',
	},
	'66': {
		itemId: '66',
		name: 'Forest Medallion',
		image: '/images/icons/Forest\ Medallion.png',
	},
	'67': {
		itemId: '67',
		name: 'Fire Medallion',
		image: '/images/icons/Fire\ Medallion.png',
	},
	'68': {
		itemId: '68',
		name: 'Water Medallion',
		image: '/images/icons/Water\ Medallion.png',
	},
	'69': {
		itemId: '69',
		name: 'Spirit Medallion',
		image: '/images/icons/Spirit\ Medallion.png',
	},
	'6A': {
		itemId: '6A',
		name: 'Shadow Medallion',
		image: '/images/icons/Shadow\ Medallion.png',
	},
	'6B': {
		itemId: '6B',
		name: 'Light Medallion',
		image: '/images/icons/Light\ Medallion.png',
	},
	'6C': {
		itemId: '6C',
		name: 'Kokiri\'s Emerald',
		image: '/images/icons/Kokiri\ Emerald.png',
	},
	'6D': {
		itemId: '6D',
		name: 'Goron\'s Ruby',
		image: '/images/icons/Goron\'s\ Ruby.png',
	},
	'6E': {
		itemId: '6E',
		name: 'Zora\'s Sapphire',
		image: '/images/icons/Zora\'s\ Sapphire.png',
	},
	'6F': {
		itemId: '6F',
		name: 'Stone of Agony',
		image: '/images/icons/Stone\ of\ Agony.png',
	},
	'70': {
		itemId: '70',
		name: 'Gerudo\'s Card',
		image: '/images/icons/Gerudo\ Card.png',
	},
	'71': {
		itemId: '71',
		name: 'Gold Skulltula [Token]',
		image: '/images/icons/Gold\ Skulltula.png',
	},
	'72': {
		itemId: '72',
		name: 'Heart Container',
		image: '/images/icons/Heart\ Container.png',
	},
	'74': {
		itemId: '74',
		name: 'Big Key',
		image: '/images/icons/Boss\ Key.png',
	},
	'75': {
		itemId: '75',
		name: 'Compass',
		image: '/images/icons/Compass.png',
	},
	'76': {
		itemId: '76',
		name: 'Dungeon Map',
		image: '/images/icons/Dungeon\ Map.png',
	},
	'77': {
		itemId: '77',
		name: 'Small Key',
		image: '/images/icons/Small\ Key.png',
	},
	'78': {
		itemId: '78',
		name: 'Small Magic Jar',
		image: '/images/icons/Small\ Magic\ Jar.png',
	},
	'79': {
		itemId: '79',
		name: 'Large Magic Jar',
		image: '/images/icons/Large\ Magic\ Jar.png',
	},
	'7A': {
		itemId: '7A',
		name: 'Piece of Heart',
		image: '/images/icons/Heart\ Piece.png',
	},
	'82': {
		itemId: '82',
		name: 'Lon Lon Milk',
		image: '/images/icons/Milk.png',
	},
	'98': {
		itemId: '98',
		name: 'Deku Stick Upgrade 20',
		image: '/images/icons/Deku\ Stick.png',
	},
	'99': {
		itemId: '99',
		name: 'Deku Stick Upgrade 30',
		image: '/images/icons/Deku\ Stick.png',
	},
	'9A': {
		itemId: '9A',
		name: 'Deku Nut Upgrade 30',
		image: '/images/icons/Deku\ Nut.png',
	},
	'9B': {
		itemId: '9B',
		name: 'Deku Nut Upgrade 40',
		image: '/images/icons/Deku\ Nut.png',
	},
	'B0': {
		itemId: 'B0',
		name: 'Wallet',
		image: '/images/icons/Rupee\ Icon.png',
	},
	'B1': {
		itemId: 'B1',
		name: 'Tycoon Wallet',
		image: '/images/icons/Giant\'s\ Wallet.png',
	},
	'B2': {
		itemId: 'B2',
		name: 'Double Defense',
		image: '/images/icons/Heart\ Container.png',
	},
	// '38': {
	// 	itemId: '38',
	// 	name: 'Fairy Bow & Fire Arrow',
	// 	image: '',
	// },
	// '39': {
	// 	itemId: '39',
	// 	name: 'Fairy Bow & Ice Arrow',
	// 	image: '',
	// },
	// '3A': {
	// 	itemId: '3A',
	// 	name: 'Fairy Bow & Light Arrow',
	// 	image: '',
	// },
	// '58': {
	// 	itemId: '58',
	// 	name: 'Deku Seeds (5)',
	// 	image: '',
	// },
	// '73': {
	// 	itemId: '73',
	// 	name: 'Piece of Heart [?]',
	// 	image: '',
	// },
	// '83': {
	// 	itemId: '83',
	// 	name: 'Recovery Heart',
	// 	image: '',
	// },
	// '84': {
	// 	itemId: '84',
	// 	name: 'Green Rupee',
	// 	image: '',
	// },
	// '85': {
	// 	itemId: '85',
	// 	name: 'Blue Rupee',
	// 	image: '',
	// },
	// '86': {
	// 	itemId: '86',
	// 	name: 'Red Rupee',
	// 	image: '',
	// },
	// '87': {
	// 	itemId: '87',
	// 	name: 'Purple Rupee',
	// 	image: '',
	// },
	// '88': {
	// 	itemId: '88',
	// 	name: 'Huge Rupee',
	// 	image: '',
	// },
	// '89': {
	// 	itemId: '89',
	// 	name: '[Removed]',
	// 	image: '',
	// },
	// '8A': {
	// 	itemId: '8A',
	// 	name: 'Deku Sticks (5)',
	// 	image: '',
	// },
	// '8B': {
	// 	itemId: '8B',
	// 	name: 'Deku Sticks (10)',
	// 	image: '',
	// },
	// '8C': {
	// 	itemId: '8C',
	// 	name: 'Deku Nuts (5)',
	// 	image: '',
	// },
	// '8D': {
	// 	itemId: '8D',
	// 	name: 'Deku Nuts (10)',
	// 	image: '',
	// },
	// '8E': {
	// 	itemId: '8E',
	// 	name: 'Bombs (5)',
	// 	image: '',
	// },
	// '8F': {
	// 	itemId: '8F',
	// 	name: 'Bombs (10)',
	// 	image: '',
	// },
	// '90': {
	// 	itemId: '90',
	// 	name: 'Bombs (20)',
	// 	image: '',
	// },
	// '91': {
	// 	itemId: '91',
	// 	name: 'Bombs (30)',
	// 	image: '',
	// },
	// '92': {
	// 	itemId: '92',
	// 	name: 'Arrows (5 or 10)',
	// 	image: '',
	// },
	// '93': {
	// 	itemId: '93',
	// 	name: 'Arrows (10 or 30)',
	// 	image: '',
	// },
	// '94': {
	// 	itemId: '94',
	// 	name: 'Arrows (30 or 50)',
	// 	image: '',
	// },
	// '95': {
	// 	itemId: '95',
	// 	name: 'Deku Seeds (30)',
	// 	image: '',
	// },
	// '96': {
	// 	itemId: '96',
	// 	name: 'Bombchu (5)',
	// 	image: '',
	// },
	// '97': {
	// 	itemId: '97',
	// 	name: 'Bombchu (20)',
	// 	image: '',
	// },
}
