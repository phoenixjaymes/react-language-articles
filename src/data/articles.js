const articles = {
  status: 'success',
  data: {
    words: {
      de: [
        {
          id: 1,
          word: 'Hund',
          english: 'dog',
          definite: [
            { id: 1, name: 'der' },
            { id: 2, name: 'die' },
            { id: 3, name: 'das' },
          ],
          definiteAnswer: 'der',
          indefinite: [
            { id: 1, name: 'ein' },
            { id: 2, name: 'eine' },
          ],
          indefiniteAnswer: 'ein',
        },
        {
          id: 2,
          word: 'Katze',
          english: 'cat',
          definite: [
            { id: 1, name: 'der' },
            { id: 2, name: 'die' },
            { id: 3, name: 'das' },
          ],
          definiteAnswer: 'die',
          indefinite: [
            { id: 1, name: 'ein' },
            { id: 2, name: 'eine' },
          ],
          indefiniteAnswer: 'eine',
        },
        {
          id: 3,
          word: 'Schwein',
          english: 'pig',
          definite: [
            { id: 1, name: 'der' },
            { id: 2, name: 'die' },
            { id: 3, name: 'das' },
          ],
          definiteAnswer: 'das',
          indefinite: [
            { id: 1, name: 'ein' },
            { id: 2, name: 'eine' },
          ],
          indefiniteAnswer: 'ein',
        },
      ],
      nl: [
        {
          id: 1,
          word: 'Hond',
          english: 'dog',
          definite: [
            { id: 1, name: 'de' },
            { id: 2, name: 'het' },
          ],
          definiteAnswer: 'de',
        },
        {
          id: 2,
          word: 'Kat',
          english: 'cat',
          definite: [
            { id: 1, name: 'de' },
            { id: 2, name: 'het' },
          ],
          definiteAnswer: 'de',
        },
        {
          id: 3,
          word: 'Varken',
          english: 'pig',
          definite: [
            { id: 1, name: 'de' },
            { id: 2, name: 'het' },
          ],
          definiteAnswer: 'het',
        },
      ],
    },
  },
};

export default articles;
