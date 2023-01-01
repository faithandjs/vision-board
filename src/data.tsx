import Checkbox from './components/Checkbox';

export const data = [
  {
    title: 'Expand my Palate',
    image: {
      src: 'https://i.pinimg.com/564x/b8/f9/0a/b8f90af6602d68d7db4cbe0f09be0c03.jpg',
      alt: 'a bowl with food i dont really understand',
    },
    details: (
      <div>
        <p>
          So my current favorite food is chicke and shawarma which is quite
          basic. I want to try:
        </p>

        <ul className=' '>
          {['pastrami', 'seafood'].map((item, key) => {
            return (
              <li key={key}>
                <Checkbox label={item} />
              </li>
            );
          })}
        </ul>
      </div>
    ),
    bonus: 'I learn to eat onions',
    previewText: 'I want to try more foods this year',
  },
  {
    title: 'xinfinity developer',
    image: {
      src: 'https://i.pinimg.com/originals/18/8a/73/188a734f6350f29eddd317ab1d3d5580.jpg',
      alt: 'a girl holding a stack of money',
    },
    details: (
      <div>
        <p>
          So this year, I want to xinfinity my income starting with x5. I want
          to earn way more than 2022. 2022 was my first year earning as a dev
          and i want more!!!!!!
        </p>
      </div>
    ),
    previewText: 'I want to touch so much money that it scares me. ',
  },
  {
    title: 'Pretty Bitch',
    image: {
      src: 'https://i.pinimg.com/originals/91/c6/31/91c63167bab6808ea759e26c8a45f849.jpg',
      alt: 'a pretty girl with blond, long hair tilting her head',
    },
    details: (
      <div>
        <p>So this year, I want to be pretty. I want </p>
        <ul className='list-[circle]'>
          <li>
            to have skincare, haircare, bodycare routines, even day and night
            routines
          </li>
          <li>
            my skin to be clear and my hyperpigmentation treated
            <ul>
              {[
                'face',
                'earholes',
                'armpit',
                'elbows',
                'knees',
                'dark spots on the leg',
                'pelvis',
                'butt?',
              ].map((item, key) => (
                <li>
                  <Checkbox label={item} key={key} />
                </li>
              ))}
            </ul>
          </li>
          <li>I want to learn to make up and have a go to look</li>
        </ul>
      </div>
    ),
    previewText: 'I want to be my prettiest and baddest self this year ',
  },
  {
    details: (
      <div>
        <p>
          I want to have a pretty workstation that inspires me to actually work
        </p>
        <p>I'll need~ </p>
        <ul className='list-[circle]'>
          {[
            'an iPad, muy importante🌚',
            'a large screen',
            'a new chair',
            'a new table?',
            'a phone holder',
            'a table mirror',
            'and some pretty light',
          ].map((item, key) => (
            <li key={key}>{item}</li>
          ))}
        </ul>
      </div>
    ),
    image: {
      src: '/assets/setup.jpeg',
      alt: 'pink room with devices on a table and a pretty chair; a workstation',
    },
    title: 'Workspace',
    previewText: 'I want an aesthetically pleasing workspace.',
  },
  {
    title: 'Driver bae',
    details: (
      <div>
        <p>
          I'm literally 22 turning 23 and idk how to drive, something that
          people learnt at 16. It changes this year!
        </p>
      </div>
    ),
    image: {
      src: 'https://i.pinimg.com/originals/6f/72/13/6f72133d820f0ef56acc840faa0e33ef.png',
      alt: "a girl's hand on a steering wheel",
    },
    previewText: 'I am learning to drive this year!!!!',
    bonus: 'I buy a car🌚',
  },
  {
    title: 'Read more books',
    details: (
      <div>
        <p>
          I miss when I used to read and get lost in books, i want to go back to
          that.
        </p>
        <p>
          The plan is to read 1 book per month so 12 this year. I dont want to
          overwhelm myself because i'll also be doing a lot of growing in my
          career so no time.
        </p>
        <p>I also want to read articles too.</p>
      </div>
    ),
    image: {
      src: 'https://i.pinimg.com/originals/95/db/1f/95db1f493e3cf139f1a11e08e1164b19.jpg',
      alt: 'a bookshelf',
    },
    previewText: 'I want to read more books this year',
    bonus: 'I read more than 12 books.',
  },
  {
    title: 'Fashion collector',
    details: <div></div>,
    image: {
      src: 'https://i.pinimg.com/originals/c7/4a/84/c74a8484f839f8f6f67d11e54f304b0c.png',
      alt: 'a wall with shelves holding a bag collection',
    },
    previewText: '',
    bonus: '',
  },
  //
  {
    title: 'personal Style',
    details: <div></div>,
    image: {
      // src: 'https://i.pinimg.com/originals/00/b8/c2/00b8c2e246d04444f5c5caaebcd2417b.jpg',
      src: 'https://i.pinimg.com/originals/61/8a/e8/618ae8261f89c43f98c3bd52c85eb414.jpg',
      alt: '',
    },
    previewText: '',
    bonus: '',
  },
  //
  {
    title: 'participate in social media',
    details: (
      <div>
        <p>
          I miss making videos and i had fun doing it so i'm going back to it
        </p>
        <p>I'll start with tiktok/instagram then youtube maybe</p>
      </div>
    ),
    image: {
      src: 'https://i.pinimg.com/originals/6c/35/6c/6c356c2ada5d480b3a28c0cf58211e7c.jpg',
      alt: 'girl holding a camera in front of a mirror',
    },
    previewText: 'i want to be a content creator',
    bonus: 'I make money from it',
  },
  {
    title: 'personal development',
    details: <div></div>,
    image: {
      src: 'https://i.pinimg.com/originals/fb/ee/43/fbee43a492be96321653baf4718088fa.jpg',
      alt: 'mirror with text "self love baby, self love"',
      // alt: 'girl laying down, reading and drinking maybe coffee',
    },
    previewText: 'I want to absolutely love myself and take care of me.',
    bonus: '',
  },

  {
    title: 'gym bae',
    details: <div></div>,
    image: {
      src: 'https://i.pinimg.com/originals/cd/74/b3/cd74b36e30016c595225e7d56294a3ba.jpg',
      alt: 'woman with her phone in front of a mirror in th gym',
    },
    previewText: 'I want to finally get the body I always wanted',
    bonus: '',
  },
  {
    title: 'health ==> 100%',
    details: <div></div>,
    image: {
      src: 'https://i.pinimg.com/originals/db/e2/a5/dbe2a554a2f65430b7e1a92254760f4a.jpg',
      alt: '',
    },
    previewText: 'I want to improve my health',
    bonus: '',
  },
  // {
  //   title: '',
  //   bonus: '',
  //   details: <div></div>,
  //   image: {
  //     src: 'https://i.pinimg.com/564x/b8/f9/0a/b8f90af6602d68d7db4cbe0f09be0c03.jpg',
  //     alt: '',
  //   },
  //   previewText: '',
  // },
];

// {
//   title: '',
// bonus: '';
//   details: <div></div>,
//   image: {
//     src: 'https://i.pinimg.com/564x/b8/f9/0a/b8f90af6602d68d7db4cbe0f09be0c03.jpg',
//     alt: '',
//   },
//   previewText: '',
// },

