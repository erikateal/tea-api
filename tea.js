const tea = {
    'greentea': {
        'chunmee': [
            {
                'name': 'Chun Mee',
                'alterative_name': [
                    {
                        'alt_names': 'Chun Mei',
                    },
                    {
                        'alt_names': 'Zhen Mei',
                    },
                ],
                'category': 'Green Tea',
                'flavor_profile': 'Dusty, acidic green tea',
                'description': 'A bright flavor, light tangy sweetness, and a toasty warm clean finish, making it an excellent green tea during the day or night, with a nice well-rounded flavor and aftertaste',
                'origin': 'Chinese Jiangxi province',
            }
        ],
        'biluochun': [
            {
                'name': 'Bi Luo Chun',
                'category': 'Green Tea',
                'flavor_profile': 'A green tea with a strong aroma and a light floral taste.',
                'description': 'Renowned for its delicate appearance, fruity taste, floral aroma, showy white hairs and early cropping.',
                'origin': '	Dongting Mountains, Suzhou, Jiangsu Province, China',
            }
        ],
        'gunpowder': [
            {
                'name': 'Gun Powder',
                'alterative_name': [
                    {
                        'alt_names': 'Lo Chu Ch\'a',
                    },
                    {
                        'alt_names': 'Zhu Cha',
                    },
                ],
                'category': 'Green Tea',
                'varieties': [
                    {
                        'type':'Pingshui',
                        'description': 'The original and most common variety of gunpowder tea with larger pearls, better color, and a more aromatic infusion, which is commonly sold as Temple of Heaven Gunpowder or Pinhead Gunpowder, the former being a common brand of this tea variety.',
                    },
                    {
                        'type': 'Formosa',
                        'description': ' A gunpowder style tea grown in Taiwan near Keelung, it is claimed to have its own characteristic aroma, different from that of Zhejiang Province gunpowder grown in mainland China. Formosa gunpowder teas are typically fresh or roasted oolongs.',
                    },
                ],
                'flavor_profile': 'Flavor varies according to the growing location of tea used for production',
                'description': 'The origin of the English term may come from the tea\'s similarity in appearance to actual gunpowder: grayish, dark pellets of irregular shape used as explosive propellant for early guns. ',
                'origin': 'Zhejiang Province of China, Taiwan, Indonesia, and others',
            }
        ],
        'maofeng': [
            {
                'name': 'Maofeng',
                'category': 'Green Tea',
                'flavor_profile': 'Clean needle-like tea with a slight floral overtone',
                'description': 'Maofeng tea is one of the most famous teas in China and can almost always be found on the China Famous Tea list.',
                'origin': '	Anhui province, China',
            }
        ],
    'blacktea': {
        'nameLowerCaseNoSpace': [
            {
                'name': 'nameOfTea',
                'alterative_name': [
                    {
                        'alt_names': 'altName',
                    },
                    {
                        'alt_names': 'altName',
                    },
                ],
                'varieties': [
                    {
                        'type':'name',
                        'description': 'shortDescription',
                    },
                ],
                'category': 'Black Tea',
                'flavor_profile': 'description',
                'description': 'shortDescription',
                'origin': 'country',
            }
        ],
    },
    'whitetea': {
        'nameLowerCaseNoSpace': [
            {
                'name': 'nameOfTea',
                'alterative_name': [
                    {
                        'alt_names': 'altName',
                    },
                ],
                'varieties': [
                    {
                        'type':'name',
                        'description': 'shortDescription',
                    },
                ],
                'category': 'White Tea',
                'flavor_profile': 'flavor',
                'description': 'shortDescription',
                'origin': 'country',
            }
        ],
    },
    'oolongtea': {
        'nameLowerCaseNoSpace': [
            {
                'name': 'nameOfTea',
                'alterative_name': [
                    {
                        'alt_names': 'altName',
                    },
                ],
                'varieties': [
                    {
                        'type':'name',
                        'description': 'shortDescription',
                    },
                ],
                'category': 'Oolong Tea',
                'flavor_profile': 'flavor',
                'description': 'shortDescription',
                'origin': 'country',
            }
        ],
    },
    'herbal': {
        'nameLowerCaseNoSpace': [
            {
                'name': 'nameOfTea',
                'alterative_name': [
                    {
                        'alt_names': 'altName',
                    },
                ],
                'varieties': [
                    {
                        'type':'name',
                        'description': 'shortDescription',
                    },
                ],
                'category': 'category',
                'flavor_profile': 'flavor',
                'description': 'shortDescription',
                'origin': 'country',
            }
        ],
    },
    }
};

exports.tea = tea;
