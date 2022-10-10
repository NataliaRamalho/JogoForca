const wordData = [
    {
        "key": 1,
        "word": "Gorila",
        "category": "Animal",
        "length": "6"
    },
    {
        "key": 2,
        "word": "Ganso",
        "category": "Animal",
        "length": "5"
    },
    {
        "key": 3,
        "word": "Gafanhoto",
        "category": "Animal",
        "length": "9"
    },
    {
        "key": 4,
        "word": "Caracol",
        "category": "Animal",
        "length": "7"
    },
    {
        "key": 5,
        "word": "Formiga",
        "category": "Animal",
        "length": "7"
    },
    {
        "key": 6,
        "word": "Macaco",
        "category": "Animal",
        "length": "6"
    },
    {
        "key": 7,
        "word": "Elefante",
        "category": "Animal",
        "length": "8"
    },
    {
        "key": 8,
        "word": "Pernilongo",
        "category": "Animal",
        "length": "10"
    },
    {
        "key": 9,
        "word": "Nozes",
        "category": "Alimentos",
        "length": "5"
    },
    {
        "key": 10,
        "word": "Morango",
        "category": "Alimentos",
        "length": "7"
    },
    {
        "key": 11,
        "word": "Laranja",
        "category": "Alimentos",
        "length": "7"
    },
    {
        "key": 12,
        "word": "Sopa",
        "category": "Alimentos",
        "length": "4"
    },
    {
        "key": 13,
        "word": "Espinafre",
        "category": "Alimentos",
        "length": "9"
    },
    {
        "key": 14,
        "word": "Damasco",
        "category": "Alimentos",
        "length": "7"
    },
    {
        "key": 15,
        "word": "Arroz",
        "category": "Alimentos",
        "length": "5"
    },
    {
        "key": 16,
        "word": "Farinha",
        "category": "Alimentos",
        "length": "7"
    },
    {
        "key": 17,
        "word": "Kiwi",
        "category": "Alimentos",
        "length": "4"
    },
    {
        "key": 18,
        "word": "Tangerina",
        "category": "Alimentos",
        "length": "9"
    },
    {
        "key": 19,
        "word": "Leite",
        "category": "Alimentos",
        "length": "5"
    },
    {
        "key": 20,
        "word": "Desenvolvedor",
        "category": "Profissão",
        "length": "13"
    },
    {
        "key": 21,
        "word": "Engenheiro",
        "category": "Profissão",
        "length": "10"
    },
    {
        "key": 22,
        "word": "Astronauta",
        "category": "Profissão",
        "length": "10"
    },
    {
        "key": 23,
        "word": "Carteiro",
        "category": "Profissão",
        "length": "9"
    },
    {
        "key": 25,
        "word": "Jardineiro",
        "category": "Profissão",
        "length": "10"
    },
    {
        "key": 26,
        "word": "Bombeiro",
        "category": "Profissão",
        "length": "8"
    },
    {
        "key": 27,
        "word": "Motorista",
        "category": "Profissão",
        "length": "9"
    },
    {
        "key": 28,
        "word": "Barbeiro",
        "category": "Profissão",
        "length": "9"
    },
    {
        "key": 30,
        "word": "Padeiro",
        "category": "Profissão",
        "length": "7"
    },
    {
        "key": 31,
        "word": "Faxineira",
        "category": "Profissão",
        "length": "9"
    },
    {
        "key": 32,
        "word": "Carpinteiro",
        "category": "Profissão",
        "length": "11"
    },
    {
        "key": 33,
        "word": 'Porteiro',
        "category": 'Profissão',
        "length": '8'
    },
    {
        "key": 34,
        "word": 'Esteticista',
        "category": 'Profissão',
        "length": '11'
    },
    {
        "key": 35,
        "word": 'Eletricista',
        "category": 'Profissão',
        "length": '11'
    },
    {
        "key": 36,
        "word": 'Desenhista',
        "category": 'Profissão',
        "length": '10'
    },
    {
        "key": 37,
        "word": 'Escultor',
        "category": 'Profissão',
        "length": '8'
    },
    {
        "key": 38,
        "word": 'Consultor',
        "category": 'Profissão',
        "length": '9'
    },
    {
        "key": 39,
        "word": 'Cozinheiro',
        "category": 'Profissão',
        "length": '10'
    },
    {
        "key": 40,
        "word": 'Acupunturista',
        "category": 'Profissão',
        "length": '13'
    },
    {
        "key": 41,
        "word": 'Auditor',
        "category": 'Profissão',
        "length": '7'
    },
    {
        "key": 42,
        "word": 'Bailarino',
        "category":
            'Profissão',
        "length": '9'
    },
    {
        "key": 43,
        "word": 'Contorcionista',
        "category": 'Profissão',
        "length": '14'
    },
    {
        "key": 44,
        "word": 'Designer',
        "category": 'Profissão',
        "length": '8'
    },
    {
        "key": 45,
        "word": 'Engraxador',
        "category": 'Profissão',
        "length": '10'
    },
    {
        "key": 46,
        "word": 'Fundidor',
        "category": 'Profissão',
        "length": '8'
    },
    {
        "key": 47,
        "word": 'Forjador',
        "category": 'Profissão',
        "length": '8'
    },
    {
        "key": 48,
        "word": 'Guitarrista',
        "category": 'Profissão',
        "length": '11'
    },
    {
        "key": 49,
        "word": 'Humorista',
        "category": 'Profissão',
        "length": '9'
    },
    {
        "key": 50,
        "word": 'Harpista',
        "category": 'Profissão',
        "length": '8'
    },
    {
        "key": 51,
        "word": 'Instrutor',
        "category": 'Profissão',
        "length": '9'
    },
    {
        "key": 52,
        "word": 'Locutor',
        "category": 'Profissão',
        "length": '7'
    },
    {
        "key": 53,
        "word": 'Marketing',
        "category": 'Profissão',
        "length": '9'
    },
    {
        "key": 54,
        "word": 'Abajur',
        "category": 'Objeto',
        "length": '6'
    },
    {
        "key": 55,
        "word": 'Alfinete',
        "category": 'Objeto',
        "length": '8'
    },
    {
        "key": 56,
        "word": 'Algema',
        "category": 'Objeto',
        "length": '6'
    },
    {
        "key": 57,
        "word": 'Ampulheta',
        "category": 'Objeto',
        "length": '9'
    },
    {
        "key": 58,
        "word": 'Apagador',
        "category": 'Objeto',
        "length": '8'
    },
    {
        "key": 59,
        "word": 'Descascador',
        "category": 'Objeto',
        "length": '11'
    },
    {
        "key": 60,
        "word": 'Aquecedor',
        "category": 'Objeto',
        "length": '9'
    },
    {
        "key": 61,
        "word": 'Armadura',
        "category": 'Objeto',
        "length": '8'
    },
    {
        "key": 62,
        "word": 'Acupunturista',
        "category": 'Objeto',
        "length": '13'
    },
    {
        "key": 63,
        "word": 'Auditor',
        "category": 'Objeto',
        "length": '7'
    },
    {
        "key": 64,
        "word": 'Azulejo',
        "category": 'Objeto',
        "length": '7'
    },
    {
        "key": 65,
        "word": 'Bazuca',
        "category": 'Objeto',
        "length": '6'
    },
    {
        "key": 66,
        "word": 'Bigorna',
        "category": 'Objeto',
        "length": '7'
    },
    {
        "key": 67,
        "word": 'Borracha',
        "category": 'Objeto',
        "length": '8'
    },
    {
        "key": 68,
        "word": 'Bumerangue',
        "category": 'Objeto',
        "length": '10'
    },
    {
        "key": 69,
        "word": 'Campainha',
        "category": 'Objeto',
        "length": '9'
    },
    {
        "key": 70,
        "word": 'Computador',
        "category": 'Objeto',
        "length": '10'
    },
    {
        "key": 71,
        "word": 'Desfibrilador',
        "category": 'Objeto',
        "length": '13'
    },
    {
        "key": 72,
        "word": 'Desodorante',
        "category": 'Objeto',
        "length": '11'
    },
    {
        "key": 73,
        "word": 'Echarpe',
        "category": 'Objeto',
        "length": '7'
    },
    {
        "key": 74,
        "word": 'Enxada',
        "category": 'Objeto',
        "length": '6'
    },
    {
        "key": 75,
        "word": 'Espingarda',
        "category": 'Objeto',
        "length": '10'
    },
    {
        "key": 76,
        "word": 'Extintor',
        "category": 'Objeto',
        "length": '8'
    },
    {
        "key": 77,
        "word": 'Ferradura',
        "category": 'Objeto',
        "length": '9'
    },
    {
        "key": 78,
        "word": 'Sintetizador',
        "category": 'Objeto',
        "length": '12'
    },
    {
        "key": 79,
        "word": 'Serpentina',
        "category": 'Objeto',
        "length": '10'
    },
    {
        "key": 80,
        "word": 'Retrovisor',
        "category": 'Objeto',
        "length": '10'
    },
    {
        "key": 81,
        "word": 'Quadriciclo',
        "category": 'Objeto',
        "length": '11'
    },
    {
        "key": 82,
        "word": 'Quadrante',
        "category": 'Objeto',
        "length": '9'
    }

]

export default wordData;