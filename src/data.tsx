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
          and i want more!!!!!!{' '}
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
    title: 'Fashion collector',
    details: <div></div>,
    image: {
      src: 'https://i.pinimg.com/564x/b8/f9/0a/b8f90af6602d68d7db4cbe0f09be0c03.jpg',
      alt: '',
    },
    previewText: '',
    bonus: '',
  },
  {
    title: 'personal Style',
    details: <div></div>,
    image: {
      src: 'https://i.pinimg.com/564x/b8/f9/0a/b8f90af6602d68d7db4cbe0f09be0c03.jpg',
      alt: '',
    },
    previewText: '',
    bonus: '',
  },
  {
    title: 'social media participant',
    details: <div></div>,
    image: {
      src: 'https://i.pinimg.com/564x/b8/f9/0a/b8f90af6602d68d7db4cbe0f09be0c03.jpg',
      alt: '',
    },
    previewText: '',
    bonus: '',
  },
  {
    title: 'personal development',
    details: <div></div>,
    image: {
      src: 'https://i.pinimg.com/564x/b8/f9/0a/b8f90af6602d68d7db4cbe0f09be0c03.jpg',
      alt: '',
    },
    previewText: '',
    bonus: '',
  },
  {
    title: 'read more',
    details: <div></div>,
    image: {
      src: 'https://i.pinimg.com/564x/b8/f9/0a/b8f90af6602d68d7db4cbe0f09be0c03.jpg',
      alt: '',
    },
    previewText: '',
    bonus: '',
  },
  {
    title: 'gym princess',
    details: <div></div>,
    image: {
      src: 'https://i.pinimg.com/564x/b8/f9/0a/b8f90af6602d68d7db4cbe0f09be0c03.jpg',
      alt: '',
    },
    previewText: '',
    bonus: '',
  },
  {
    title: 'health ==> 100%',
    details: <div></div>,
    image: {
      src: 'https://i.pinimg.com/564x/b8/f9/0a/b8f90af6602d68d7db4cbe0f09be0c03.jpg',
      alt: '',
    },
    previewText: '',
    bonus: '',
  },
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

