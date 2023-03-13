import { TbCircleCheck, TbCircleDashed } from 'react-icons/tb';

export const details = {
  theme: ' pretty intellectual with a big bunda',
  data: [
    {
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
          <ul className='list-[circle] '>
            {['pastrami', 'seafood'].map((item, key) => {
              return <li key={key}>{item}</li>;
            })}
          </ul>
        </div>
      ),
      bonus: 'I learn to eat onions',
      title: 'I want to try more foods this year',
    },
    {
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
      title: 'I want to touch so much money this year that it scares me. ',
    },
    {
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
                  <li className='list-[square]' key={key}>
                    {item}
                  </li>
                ))}
              </ul>
            </li>
            <li>I want to learn to make up and have a go-to look</li>
          </ul>
        </div>
      ),
      title: 'I want to be my most beautiful self this year ',
    },
    {
      details: (
        <div>
          <p>
            I want to have a pretty workstation that inspires me to actually
            work
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
      title: 'I want an aesthetically pleasing workspace.',
    },
    {
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
      title: 'I am learning to drive this year!!!!',
      bonus: 'I buy a car🌚',
    },
    {
      details: (
        <div>
          <p>
            I miss when I used to read and get lost in books, i want to go back
            to that.
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
      title: 'I want to read more books this year',
      bonus: 'I read more than 12 books.',
    },
    {
      details: <div></div>,
      image: {
        src: 'https://i.pinimg.com/originals/c7/4a/84/c74a8484f839f8f6f67d11e54f304b0c.png',
        alt: 'a wall with shelves holding a bag collection',
      },
      title: 'I want to buy quality pieces this year',
      bonus: 'I buy designer piece(s)',
    },
    {
      details: <div></div>,
      image: {
        src: 'https://i.pinimg.com/originals/00/b8/c2/00b8c2e246d04444f5c5caaebcd2417b.jpg',
        // src: 'https://i.pinimg.com/originals/61/8a/e8/618ae8261f89c43f98c3bd52c85eb414.jpg',
        alt: '',
      },
      title: 'I want to find my personal fashion style',
      bonus: '',
    },

    {
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
      title: 'i want to create content on social media',
      bonus: 'I make money from it',
    },
    {
      details: <div></div>,
      image: {
        src: 'https://i.pinimg.com/originals/fb/ee/43/fbee43a492be96321653baf4718088fa.jpg',
        alt: 'mirror with text "self love baby, self love"',
      },
      title: 'I am prioritising my growth and personal development this year',
      bonus: '',
    },
    {
      details: <div></div>,
      image: {
        src: 'https://i.pinimg.com/originals/cd/74/b3/cd74b36e30016c595225e7d56294a3ba.jpg',
        alt: 'woman with her phone in front of a mirror in th gym',
      },
      title: "I am getting the body i've wanted",
      bonus: '',
    },
    {
      details: <div></div>,
      image: {
        src: 'https://i.pinimg.com/originals/db/e2/a5/dbe2a554a2f65430b7e1a92254760f4a.jpg',
        alt: '',
      },
      title: 'I want to improve my health',
      bonus: '',
    },
    {
      title: 'i want to go out more and make more friends',
      bonus: '',
      details: <div></div>,
      image: {
        src: 'https://i.pinimg.com/originals/8e/2c/b5/8e2cb53fd8979537f629c810b5f6f047.jpg',
        alt: '',
      },
    },
    {
      title: 'i want to speak conversational spanish by december',
      bonus: '',
      details: <div></div>,
      image: {
        src: 'https://i.pinimg.com/originals/b0/7c/61/b07c615cdf3a6f8b226a43410fe7c0ee.jpg',
        alt: '',
      },
    },
  ],
};

export const details2 = {
  theme: 'Lorem ipsum dolor sit amet ',
  data: [
    {
      image: {
        src: 'https://i.pinimg.com/originals/fa/72/7d/fa727d7596980f816f746ca30356707d.jpg',
        alt: 'dummy image',
      },
      details: (
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, recusandae ratione non animi, porro, fugit quasi
            necessitatibus incidunt repellendus placeat nemo similique saepe
            pariatur tempore commodi facilis iure dolorum tempora!
          </p>
          <ul className='list-[circle] '>
            {['Lorem', 'ipsum', 'amet'].map((item, key) => {
              return <li key={key}>{item}</li>;
            })}
          </ul>
          <ul className=' list-none '>
            {[
              { value: 'lorem', checked: false },
              { value: 'lorem1', checked: false },
              { value: 'lorem3', checked: false },
            ].map((item, key) => {
              const { checked, value } = item;
              return (
                <li className='flex items-center' key={key}>
                  <span className={'relative   '}>
                    <TbCircleCheck
                      className={`transition-all duration-200 ${
                        checked ? 'opacity-100' : 'opacity-0 w-0 h-0'
                      }`}
                    />
                    <TbCircleDashed
                      className={`transition-all duration-200 ${
                        checked ? 'opacity-0 w-0 h-0' : 'opacity-100'
                      }`}
                    />
                    <input
                      type='checkbox'
                      name={value}
                      id={value}
                      // checked={checked}
                      className='absolute inset-0 opacity-0 hover:cursor-pointer'
                    />{' '}
                  </span>
                  <label htmlFor={value} className='capitalize pl-2'>
                    {value}
                  </label>
                </li>
              );
            })}
          </ul>
        </div>
      ),
      bonus: 'Iure dolorum tempora',
      title: 'Lorem ipsum dolor sit amet',
    },
    // {
    //   image: {
    //     src: 'https://i.pinimg.com/originals/59/bf/8d/59bf8d064d6f781c51f5ca2454df9bd5.jpg',
    //     alt: 'dummy image',
    //   },
    //   details: (
    //     <div>
    //       <p>
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit.
    //         Repudiandae, recusandae ratione non animi, porro, fugit quasi
    //         necessitatibus incidunt repellendus placeat nemo similique saepe
    //         pariatur tempore commodi facilis iure dolorum tempora!
    //       </p>
    //       <ul className='list-[circle] '>
    //         {['Lorem', 'ipsum', 'amet'].map((item, key) => {
    //           return <li key={key}>{item}</li>;
    //         })}
    //       </ul>
    //     </div>
    //   ),
    //   bonus: 'Iure dolorum tempora',
    //   title: 'Lorem ipsum dolor sit amet',
    // },
    // {
    //   image: {
    //     src: 'https://i.pinimg.com/originals/7a/c2/97/7ac2976b64f3e8abdf42d9d826cf0ea0.jpg',
    //     alt: 'dummy image',
    //   },
    //   details: (
    //     <div>
    //       <p>
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit.
    //         Repudiandae, recusandae ratione non animi, porro, fugit quasi
    //         necessitatibus incidunt repellendus placeat nemo similique saepe
    //         pariatur tempore commodi facilis iure dolorum tempora!
    //       </p>
    //       <ul className='list-[circle] '>
    //         {['Lorem', 'ipsum', 'amet'].map((item, key) => {
    //           return <li key={key}>{item}</li>;
    //         })}
    //       </ul>
    //     </div>
    //   ),
    //   bonus: 'Iure dolorum tempora',
    //   title: 'Lorem ipsum dolor sit amet',
    // },
    // {
    //   image: {
    //     src: 'https://i.pinimg.com/originals/fb/ee/43/fbee43a492be96321653baf4718088fa.jpg',
    //     alt: 'dummy image',
    //   },
    //   details: (
    //     <div>
    //       <p>
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit.
    //         Repudiandae, recusandae ratione non animi, porro, fugit quasi
    //         necessitatibus incidunt repellendus placeat nemo similique saepe
    //         pariatur tempore commodi facilis iure dolorum tempora!
    //       </p>
    //       <ul className='list-[circle] '>
    //         {['Lorem', 'ipsum', 'amet'].map((item, key) => {
    //           return <li key={key}>{item}</li>;
    //         })}
    //       </ul>
    //     </div>
    //   ),
    //   bonus: 'Iure dolorum tempora',
    //   title: 'Lorem ipsum dolor sit amet',
    // },
    // {
    //   image: {
    //     src: 'https://i.pinimg.com/originals/89/52/20/8952204d220c3d8882317188af7495ea.jpg',
    //     alt: 'dummy image',
    //   },
    //   details: (
    //     <div>
    //       <p>
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit.
    //         Repudiandae, recusandae ratione non animi, porro, fugit quasi
    //         necessitatibus incidunt repellendus placeat nemo similique saepe
    //         pariatur tempore commodi facilis iure dolorum tempora!
    //       </p>
    //       <ul className='list-[circle] '>
    //         {['Lorem', 'ipsum', 'amet'].map((item, key) => {
    //           return <li key={key}>{item}</li>;
    //         })}
    //       </ul>
    //     </div>
    //   ),
    //   bonus: 'Iure dolorum tempora',
    //   title: 'Lorem ipsum dolor sit amet',
    // },
    // {
    //   image: {
    //     src: 'https://i.pinimg.com/originals/31/ce/fd/31cefd78f1d3570f46abf009b56be832.jpg',
    //     alt: 'dummy image',
    //   },
    //   details: (
    //     <div>
    //       <p>
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit.
    //         Repudiandae, recusandae ratione non animi, porro, fugit quasi
    //         necessitatibus incidunt repellendus placeat nemo similique saepe
    //         pariatur tempore commodi facilis iure dolorum tempora!
    //       </p>
    //       <ul className='list-[circle] '>
    //         {['Lorem', 'ipsum', 'amet'].map((item, key) => {
    //           return <li key={key}>{item}</li>;
    //         })}
    //       </ul>
    //     </div>
    //   ),
    //   bonus: 'Iure dolorum tempora',
    //   title: 'Lorem ipsum dolor sit amet',
    // },
    // {
    //   image: {
    //     src: 'https://i.pinimg.com/originals/7b/21/ef/7b21ef5c2e59d294aec04dd73d522c8e.jpg',
    //     alt: 'dummy image',
    //   },
    //   details: (
    //     <div>
    //       <p>
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit.
    //         Repudiandae, recusandae ratione non animi, porro, fugit quasi
    //         necessitatibus incidunt repellendus placeat nemo similique saepe
    //         pariatur tempore commodi facilis iure dolorum tempora!
    //       </p>
    //       <ul className='list-[circle] '>
    //         {['Lorem', 'ipsum', 'amet'].map((item, key) => {
    //           return <li key={key}>{item}</li>;
    //         })}
    //       </ul>
    //     </div>
    //   ),
    //   bonus: 'Iure dolorum tempora',
    //   title: 'Lorem ipsum dolor sit amet',
    // },
    // {
    //   image: {
    //     src: 'https://i.pinimg.com/originals/49/84/57/49845754cfdec2d24d88ee9c86ad8b8c.jpg',
    //     alt: 'dummy image',
    //   },
    //   details: (
    //     <div>
    //       <p>
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit.
    //         Repudiandae, recusandae ratione non animi, porro, fugit quasi
    //         necessitatibus incidunt repellendus placeat nemo similique saepe
    //         pariatur tempore commodi facilis iure dolorum tempora!
    //       </p>
    //       <ul className='list-[circle] '>
    //         {['Lorem', 'ipsum', 'amet'].map((item, key) => {
    //           return <li key={key}>{item}</li>;
    //         })}
    //       </ul>
    //     </div>
    //   ),
    //   bonus: 'Iure dolorum tempora',
    //   title: 'Lorem ipsum dolor sit amet',
    // },
    // {
    //   image: {
    //     src: 'https://i.pinimg.com/originals/1b/3e/1f/1b3e1f3e8486b4cafecc83e9f15a81ec.jpg',
    //     alt: 'dummy image',
    //   },
    //   details: (
    //     <div>
    //       <p>
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit.
    //         Repudiandae, recusandae ratione non animi, porro, fugit quasi
    //         necessitatibus incidunt repellendus placeat nemo similique saepe
    //         pariatur tempore commodi facilis iure dolorum tempora!
    //       </p>
    //       <ul className='list-[circle] '>
    //         {['Lorem', 'ipsum', 'amet'].map((item, key) => {
    //           return <li key={key}>{item}</li>;
    //         })}
    //       </ul>
    //     </div>
    //   ),
    //   bonus: 'Iure dolorum tempora',
    //   title: 'Lorem ipsum dolor sit amet',
    // },
    // {
    //   image: {
    //     src: 'https://i.pinimg.com/originals/44/44/b8/4444b85af5da40955d636b986e6206ac.jpg',
    //     alt: 'dummy image',
    //   },
    //   details: (
    //     <div>
    //       <p>
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit.
    //         Repudiandae, recusandae ratione non animi, porro, fugit quasi
    //         necessitatibus incidunt repellendus placeat nemo similique saepe
    //         pariatur tempore commodi facilis iure dolorum tempora!
    //       </p>
    //       <ul className='list-[circle] '>
    //         {['Lorem', 'ipsum', 'amet'].map((item, key) => {
    //           return <li key={key}>{item}</li>;
    //         })}
    //       </ul>
    //     </div>
    //   ),
    //   bonus: 'Iure dolorum tempora',
    //   title: 'Lorem ipsum dolor sit amet',
    // },
    // {
    //   image: {
    //     src: 'https://i.pinimg.com/originals/dc/cf/fb/dccffb03bc8d9b59d997bf4f462bfbb0.jpg',
    //     alt: 'dummy image',
    //   },
    //   details: (
    //     <div>
    //       <p>
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit.
    //         Repudiandae, recusandae ratione non animi, porro, fugit quasi
    //         necessitatibus incidunt repellendus placeat nemo similique saepe
    //         pariatur tempore commodi facilis iure dolorum tempora!
    //       </p>
    //       <ul className='list-[circle] '>
    //         {['Lorem', 'ipsum', 'amet'].map((item, key) => {
    //           return <li key={key}>{item}</li>;
    //         })}
    //       </ul>
    //     </div>
    //   ),
    //   bonus: 'Iure dolorum tempora',
    //   title: 'Lorem ipsum dolor sit amet',
    // },
    // {
    //   image: {
    //     src: 'https://i.pinimg.com/originals/c7/1f/ef/c71fef0181837e904c1943aec7da4569.jpg',
    //     alt: 'dummy image',
    //   },
    //   details: (
    //     <div>
    //       <p>
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit.
    //         Repudiandae, recusandae ratione non animi, porro, fugit quasi
    //         necessitatibus incidunt repellendus placeat nemo similique saepe
    //         pariatur tempore commodi facilis iure dolorum tempora!
    //       </p>
    //       <ul className='list-[circle] '>
    //         {['Lorem', 'ipsum', 'amet'].map((item, key) => {
    //           return <li key={key}>{item}</li>;
    //         })}
    //       </ul>
    //     </div>
    //   ),
    //   bonus: 'Iure dolorum tempora',
    //   title: 'Lorem ipsum dolor sit amet',
    // },
    // {
    //   image: {
    //     src: 'https://i.pinimg.com/originals/7a/fb/1a/7afb1a42c167f721d6e57e60402beb5e.jpg',
    //     alt: 'dummy image',
    //   },
    //   details: (
    //     <div>
    //       <p>
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit.
    //         Repudiandae, recusandae ratione non animi, porro, fugit quasi
    //         necessitatibus incidunt repellendus placeat nemo similique saepe
    //         pariatur tempore commodi facilis iure dolorum tempora!
    //       </p>
    //       <ul className='list-[circle] '>
    //         {['Lorem', 'ipsum', 'amet'].map((item, key) => {
    //           return <li key={key}>{item}</li>;
    //         })}
    //       </ul>
    //     </div>
    //   ),
    //   bonus: 'Iure dolorum tempora',
    //   title: 'Lorem ipsum dolor sit amet',
    // },
    // {
    //   image: {
    //     src: 'https://i.pinimg.com/originals/25/bb/42/25bb426851361120b7e35400195b1caa.jpg',
    //     alt: 'dummy image',
    //   },
    //   details: (
    //     <div>
    //       <p>
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit.
    //         Repudiandae, recusandae ratione non animi, porro, fugit quasi
    //         necessitatibus incidunt repellendus placeat nemo similique saepe
    //         pariatur tempore commodi facilis iure dolorum tempora!
    //       </p>
    //       <ul className='list-[circle] '>
    //         {['Lorem', 'ipsum', 'amet'].map((item, key) => {
    //           return <li key={key}>{item}</li>;
    //         })}
    //       </ul>
    //     </div>
    //   ),
    //   bonus: 'Iure dolorum tempora',

    //   title: 'Lorem ipsum dolor sit amet',
    // },
  ],
};

export const test: dataType = {
  theme: 'Lorem ipsum dolor sit amet ',
  data: [
    {
      title: 'Iure dolorum tempora',
      image: {
        src: 'https://i.pinimg.com/originals/25/bb/42/25bb426851361120b7e35400195b1caa.jpg',
        alt: 'dummy image',
      },
      details: {
        p1: 'Iure dolorum tempora Iure dolorum tempora Iure dolorum tempora Iure dolorum tempora Iure dolorum tempora',
        list1: { list: ['Iure dolorum tempora'], title: 'hee' },
        check1: {
          list: [
            {
              value: 'Iure dolorum tempora',
              checked: false,
            },
            {
              value: 'Iure dolorum tempora',
              checked: false,
            },
            {
              value: 'Iure dolorum tempora',
              checked: false,
            },
          ],
          title: 'heeeee',
        },
        list2: { list: ['Iure dolorum tempora'], title: 'hee' },
        check2: {
          list: [
            {
              value: 'Iure dolorum tempora',
              checked: false,
            },
            {
              value: 'Iure dolorum tempora',
              checked: false,
            },
            {
              value: 'Iure dolorum tempora',
              checked: false,
            },
          ],
          title: 'heeeee',
        },
        p2: 'Iure dolorum tempora, Iure dolorum tempora Iure dolorum tempora/Iure dolorum tempora.',
      },
    },
    {
      title: 'Iure dolorum tempora',
      image: {
        src: 'https://i.pinimg.com/originals/25/bb/42/25bb426851361120b7e35400195b1caa.jpg',
        alt: 'dummy image',
      },
      details: {
        p1: 'Iure dolorum tempora Iure dolorum tempora Iure dolorum tempora Iure dolorum tempora Iure dolorum tempora',
        list1: { list: ['Iure dolorum tempora'], title: 'hee' },
        check1: {
          list: [
            {
              value: 'Iure dolorum tempora',
              checked: false,
            },
            {
              value: 'Iure dolorum tempora',
              checked: false,
            },
            {
              value: 'Iure dolorum tempora',
              checked: false,
            },
          ],
          title: 'heeeee',
        },
        list2: { list: ['Iure dolorum tempora'], title: 'hee' },
        check2: {
          list: [
            {
              value: 'Iure dolorum tempora',
              checked: false,
            },
            {
              value: 'Iure dolorum tempora',
              checked: false,
            },
            {
              value: 'Iure dolorum tempora',
              checked: false,
            },
          ],
          title: 'heeeee',
        },
        p2: 'Iure dolorum tempora, Iure dolorum tempora Iure dolorum tempora/Iure dolorum tempora.',
      },
    },
    {
      title: 'Iure dolorum tempora',
      image: {
        src: 'https://i.pinimg.com/originals/25/bb/42/25bb426851361120b7e35400195b1caa.jpg',
        alt: 'dummy image',
      },
      details: {
        p1: 'Iure dolorum tempora Iure dolorum tempora Iure dolorum tempora Iure dolorum tempora Iure dolorum tempora',
        list1: { list: ['Iure dolorum tempora'], title: 'hee' },
        check1: {
          list: [
            {
              value: 'Iure dolorum tempora',
              checked: false,
            },
            {
              value: 'Iure dolorum tempora',
              checked: false,
            },
            {
              value: 'Iure dolorum tempora',
              checked: false,
            },
          ],
          title: 'heeeee',
        },
        list2: { list: ['Iure dolorum tempora'], title: 'hee' },
        check2: {
          list: [
            {
              value: 'Iure dolorum tempora',
              checked: false,
            },
            {
              value: 'Iure dolorum tempora',
              checked: false,
            },
            {
              value: 'Iure dolorum tempora',
              checked: false,
            },
          ],
          title: 'heeeee',
        },
        p2: 'Iure dolorum tempora, Iure dolorum tempora Iure dolorum tempora/Iure dolorum tempora.',
      },
    },
    {
      title: 'Iure dolorum tempora',
      image: {
        src: 'https://i.pinimg.com/originals/25/bb/42/25bb426851361120b7e35400195b1caa.jpg',
        alt: 'dummy image',
      },
      details: {
        p1: 'Iure dolorum tempora Iure dolorum tempora Iure dolorum tempora Iure dolorum tempora Iure dolorum tempora',
        list1: { list: ['Iure dolorum tempora'], title: 'hee' },
        check1: {
          list: [
            {
              value: 'Iure dolorum tempora',
              checked: false,
            },
            {
              value: 'Iure dolorum tempora',
              checked: false,
            },
            {
              value: 'Iure dolorum tempora',
              checked: false,
            },
          ],
          title: 'heeeee',
        },
        list2: { list: ['Iure dolorum tempora'], title: 'hee' },
        check2: {
          list: [
            {
              value: 'Iure dolorum tempora',
              checked: false,
            },
            {
              value: 'Iure dolorum tempora',
              checked: false,
            },
            {
              value: 'Iure dolorum tempora',
              checked: false,
            },
          ],
          title: 'heeeee',
        },
        p2: 'Iure dolorum tempora, Iure dolorum tempora Iure dolorum tempora/Iure dolorum tempora.',
      },
    },
    {
      title: 'Iure dolorum tempora',
      image: {
        src: 'https://i.pinimg.com/originals/25/bb/42/25bb426851361120b7e35400195b1caa.jpg',
        alt: 'dummy image',
      },
      details: {
        p1: 'Iure dolorum tempora Iure dolorum tempora Iure dolorum tempora Iure dolorum tempora Iure dolorum tempora',
        list1: { list: ['Iure dolorum tempora'], title: 'hee' },
        check1: {
          list: [
            {
              value: 'Iure dolorum tempora',
              checked: false,
            },
            {
              value: 'Iure dolorum tempora',
              checked: false,
            },
            {
              value: 'Iure dolorum tempora',
              checked: false,
            },
          ],
          title: 'heeeee',
        },
        list2: { list: ['Iure dolorum tempora'], title: 'hee' },
        check2: {
          list: [
            {
              value: 'Iure dolorum tempora',
              checked: false,
            },
            {
              value: 'Iure dolorum tempora',
              checked: false,
            },
            {
              value: 'Iure dolorum tempora',
              checked: false,
            },
          ],
          title: 'heeeee',
        },
        p2: 'Iure dolorum tempora, Iure dolorum tempora Iure dolorum tempora/Iure dolorum tempora.',
      },
    },
    // {
    //   title: 'Iure dolorum tempora',
    //   image: {
    //     src: 'https://i.pinimg.com/originals/25/bb/42/25bb426851361120b7e35400195b1caa.jpg',
    //     alt: 'dummy image',
    //   },
    //   details: {
    //     p1: 'Iure dolorum tempora Iure dolorum tempora Iure dolorum tempora Iure dolorum tempora Iure dolorum tempora',
    //     list1: { list: ['Iure dolorum tempora'], title: 'hee' },
    //     check1: {
    //       list: [
    //         {
    //           value: 'Iure dolorum tempora',
    //           checked: false,
    //         },
    //         {
    //           value: 'Iure dolorum tempora',
    //           checked: false,
    //         },
    //         {
    //           value: 'Iure dolorum tempora',
    //           checked: false,
    //         },
    //       ],
    //       title: 'heeeee',
    //     },
    //     list2: { list: ['Iure dolorum tempora'], title: 'hee' },
    //     check2: {
    //       list: [
    //         {
    //           value: 'Iure dolorum tempora',
    //           checked: false,
    //         },
    //         {
    //           value: 'Iure dolorum tempora',
    //           checked: false,
    //         },
    //         {
    //           value: 'Iure dolorum tempora',
    //           checked: false,
    //         },
    //       ],
    //       title: 'heeeee',
    //     },
    //     p2: 'Iure dolorum tempora, Iure dolorum tempora Iure dolorum tempora/Iure dolorum tempora.',
    //   },
    // },
    // {
    //   title: 'Iure dolorum tempora',
    //   image: {
    //     src: 'https://i.pinimg.com/originals/25/bb/42/25bb426851361120b7e35400195b1caa.jpg',
    //     alt: 'dummy image',
    //   },
    //   details: {
    //     p1: 'Iure dolorum tempora Iure dolorum tempora Iure dolorum tempora Iure dolorum tempora Iure dolorum tempora',
    //     list1: { list: ['Iure dolorum tempora'], title: 'hee' },
    //     check1: {
    //       list: [
    //         {
    //           value: 'Iure dolorum tempora',
    //           checked: false,
    //         },
    //         {
    //           value: 'Iure dolorum tempora',
    //           checked: false,
    //         },
    //         {
    //           value: 'Iure dolorum tempora',
    //           checked: false,
    //         },
    //       ],
    //       title: 'heeeee',
    //     },
    //     list2: { list: ['Iure dolorum tempora'], title: 'hee' },
    //     check2: {
    //       list: [
    //         {
    //           value: 'Iure dolorum tempora',
    //           checked: false,
    //         },
    //         {
    //           value: 'Iure dolorum tempora',
    //           checked: false,
    //         },
    //         {
    //           value: 'Iure dolorum tempora',
    //           checked: false,
    //         },
    //       ],
    //       title: 'heeeee',
    //     },
    //     p2: 'Iure dolorum tempora, Iure dolorum tempora Iure dolorum tempora/Iure dolorum tempora.',
    //   },
    // },
    // {
    //   title: 'Iure dolorum tempora',
    //   image: {
    //     src: 'https://i.pinimg.com/originals/25/bb/42/25bb426851361120b7e35400195b1caa.jpg',
    //     alt: 'dummy image',
    //   },
    //   details: {
    //     p1: 'Iure dolorum tempora Iure dolorum tempora Iure dolorum tempora Iure dolorum tempora Iure dolorum tempora',
    //     list1: { list: ['Iure dolorum tempora'], title: 'hee' },
    //     check1: {
    //       list: [
    //         {
    //           value: 'Iure dolorum tempora',
    //           checked: false,
    //         },
    //         {
    //           value: 'Iure dolorum tempora',
    //           checked: false,
    //         },
    //         {
    //           value: 'Iure dolorum tempora',
    //           checked: false,
    //         },
    //       ],
    //       title: 'heeeee',
    //     },
    //     list2: { list: ['Iure dolorum tempora'], title: 'hee' },
    //     check2: {
    //       list: [
    //         {
    //           value: 'Iure dolorum tempora',
    //           checked: false,
    //         },
    //         {
    //           value: 'Iure dolorum tempora',
    //           checked: false,
    //         },
    //         {
    //           value: 'Iure dolorum tempora',
    //           checked: false,
    //         },
    //       ],
    //       title: 'heeeee',
    //     },
    //     p2: 'Iure dolorum tempora, Iure dolorum tempora Iure dolorum tempora/Iure dolorum tempora.',
    //   },
    // },
    // {
    //   title: 'Iure dolorum tempora',
    //   image: {
    //     src: 'https://i.pinimg.com/originals/25/bb/42/25bb426851361120b7e35400195b1caa.jpg',
    //     alt: 'dummy image',
    //   },
    //   details: {
    //     p1: 'Iure dolorum tempora Iure dolorum tempora Iure dolorum tempora Iure dolorum tempora Iure dolorum tempora',
    //     list1: { list: ['Iure dolorum tempora'], title: 'hee' },
    //     check1: {
    //       list: [
    //         {
    //           value: 'Iure dolorum tempora',
    //           checked: false,
    //         },
    //         {
    //           value: 'Iure dolorum tempora',
    //           checked: false,
    //         },
    //         {
    //           value: 'Iure dolorum tempora',
    //           checked: false,
    //         },
    //       ],
    //       title: 'heeeee',
    //     },
    //     list2: { list: ['Iure dolorum tempora'], title: 'hee' },
    //     check2: {
    //       list: [
    //         {
    //           value: 'Iure dolorum tempora',
    //           checked: false,
    //         },
    //         {
    //           value: 'Iure dolorum tempora',
    //           checked: false,
    //         },
    //         {
    //           value: 'Iure dolorum tempora',
    //           checked: false,
    //         },
    //       ],
    //       title: 'heeeee',
    //     },
    //     p2: 'Iure dolorum tempora, Iure dolorum tempora Iure dolorum tempora/Iure dolorum tempora.',
    //   },
    // },
    // {
    //   title: 'Iure dolorum tempora',
    //   image: {
    //     src: 'https://i.pinimg.com/originals/25/bb/42/25bb426851361120b7e35400195b1caa.jpg',
    //     alt: 'dummy image',
    //   },
    //   details: {
    //     p1: 'Iure dolorum tempora Iure dolorum tempora Iure dolorum tempora Iure dolorum tempora Iure dolorum tempora',
    //     list1: { list: ['Iure dolorum tempora'], title: 'hee' },
    //     check1: {
    //       list: [
    //         {
    //           value: 'Iure dolorum tempora',
    //           checked: false,
    //         },
    //         {
    //           value: 'Iure dolorum tempora',
    //           checked: false,
    //         },
    //         {
    //           value: 'Iure dolorum tempora',
    //           checked: false,
    //         },
    //       ],
    //       title: 'heeeee',
    //     },
    //     list2: { list: ['Iure dolorum tempora'], title: 'hee' },
    //     check2: {
    //       list: [
    //         {
    //           value: 'Iure dolorum tempora',
    //           checked: false,
    //         },
    //         {
    //           value: 'Iure dolorum tempora',
    //           checked: false,
    //         },
    //         {
    //           value: 'Iure dolorum tempora',
    //           checked: false,
    //         },
    //       ],
    //       title: 'heeeee',
    //     },
    //     p2: 'Iure dolorum tempora, Iure dolorum tempora Iure dolorum tempora/Iure dolorum tempora.',
    //   },
    // },
    // {
    //   title: 'Iure dolorum tempora',
    //   image: {
    //     src: 'https://i.pinimg.com/originals/25/bb/42/25bb426851361120b7e35400195b1caa.jpg',
    //     alt: 'dummy image',
    //   },
    //   details: {
    //     p1: 'Iure dolorum tempora Iure dolorum tempora Iure dolorum tempora Iure dolorum tempora Iure dolorum tempora',
    //     list1: { list: ['Iure dolorum tempora'], title: 'hee' },
    //     check1: {
    //       list: [
    //         {
    //           value: 'Iure dolorum tempora',
    //           checked: false,
    //         },
    //         {
    //           value: 'Iure dolorum tempora',
    //           checked: false,
    //         },
    //         {
    //           value: 'Iure dolorum tempora',
    //           checked: false,
    //         },
    //       ],
    //       title: 'heeeee',
    //     },
    //     list2: { list: ['Iure dolorum tempora'], title: 'hee' },
    //     check2: {
    //       list: [
    //         {
    //           value: 'Iure dolorum tempora',
    //           checked: false,
    //         },
    //         {
    //           value: 'Iure dolorum tempora',
    //           checked: false,
    //         },
    //         {
    //           value: 'Iure dolorum tempora',
    //           checked: false,
    //         },
    //       ],
    //       title: 'heeeee',
    //     },
    //     p2: 'Iure dolorum tempora, Iure dolorum tempora Iure dolorum tempora/Iure dolorum tempora.',
    //   },
    // },
    // {
    //   title: 'Iure dolorum tempora',
    //   image: {
    //     src: 'https://i.pinimg.com/originals/25/bb/42/25bb426851361120b7e35400195b1caa.jpg',
    //     alt: 'dummy image',
    //   },
    //   details: {
    //     p1: 'Iure dolorum tempora Iure dolorum tempora Iure dolorum tempora Iure dolorum tempora Iure dolorum tempora',
    //     list1: { list: ['Iure dolorum tempora'], title: 'hee' },
    //     check1: {
    //       list: [
    //         {
    //           value: 'Iure dolorum tempora',
    //           checked: false,
    //         },
    //         {
    //           value: 'Iure dolorum tempora',
    //           checked: false,
    //         },
    //         {
    //           value: 'Iure dolorum tempora',
    //           checked: false,
    //         },
    //       ],
    //       title: 'heeeee',
    //     },
    //     list2: { list: ['Iure dolorum tempora'], title: 'hee' },
    //     check2: {
    //       list: [
    //         {
    //           value: 'Iure dolorum tempora',
    //           checked: false,
    //         },
    //         {
    //           value: 'Iure dolorum tempora',
    //           checked: false,
    //         },
    //         {
    //           value: 'Iure dolorum tempora',
    //           checked: false,
    //         },
    //       ],
    //       title: 'heeeee',
    //     },
    //     p2: 'Iure dolorum tempora, Iure dolorum tempora Iure dolorum tempora/Iure dolorum tempora.',
    //   },
    // },
    // {
    //   title: 'Iure dolorum tempora',
    //   image: {
    //     src: 'https://i.pinimg.com/originals/25/bb/42/25bb426851361120b7e35400195b1caa.jpg',
    //     alt: 'dummy image',
    //   },
    //   details: {
    //     p1: 'Iure dolorum tempora Iure dolorum tempora Iure dolorum tempora Iure dolorum tempora Iure dolorum tempora',
    //     list1: { list: ['Iure dolorum tempora'], title: 'hee' },
    //     check1: {
    //       list: [
    //         {
    //           value: 'Iure dolorum tempora',
    //           checked: false,
    //         },
    //         {
    //           value: 'Iure dolorum tempora',
    //           checked: false,
    //         },
    //         {
    //           value: 'Iure dolorum tempora',
    //           checked: false,
    //         },
    //       ],
    //       title: 'heeeee',
    //     },
    //     list2: { list: ['Iure dolorum tempora'], title: 'hee' },
    //     check2: {
    //       list: [
    //         {
    //           value: 'Iure dolorum tempora',
    //           checked: false,
    //         },
    //         {
    //           value: 'Iure dolorum tempora',
    //           checked: false,
    //         },
    //         {
    //           value: 'Iure dolorum tempora',
    //           checked: false,
    //         },
    //       ],
    //       title: 'heeeee',
    //     },
    //     p2: 'Iure dolorum tempora, Iure dolorum tempora Iure dolorum tempora/Iure dolorum tempora.',
    //   },
    // },
    // {
    //   title: 'Iure dolorum tempora',
    //   image: {
    //     src: 'https://i.pinimg.com/originals/25/bb/42/25bb426851361120b7e35400195b1caa.jpg',
    //     alt: 'dummy image',
    //   },
    //   details: {
    //     p1: 'Iure dolorum tempora Iure dolorum tempora Iure dolorum tempora Iure dolorum tempora Iure dolorum tempora',
    //     list1: { list: ['Iure dolorum tempora'], title: 'hee' },
    //     check1: {
    //       list: [
    //         {
    //           value: 'Iure dolorum tempora',
    //           checked: false,
    //         },
    //         {
    //           value: 'Iure dolorum tempora',
    //           checked: false,
    //         },
    //         {
    //           value: 'Iure dolorum tempora',
    //           checked: false,
    //         },
    //       ],
    //       title: 'heeeee',
    //     },
    //     list2: { list: ['Iure dolorum tempora'], title: 'hee' },
    //     check2: {
    //       list: [
    //         {
    //           value: 'Iure dolorum tempora',
    //           checked: false,
    //         },
    //         {
    //           value: 'Iure dolorum tempora',
    //           checked: false,
    //         },
    //         {
    //           value: 'Iure dolorum tempora',
    //           checked: false,
    //         },
    //       ],
    //       title: 'heeeee',
    //     },
    //     p2: 'Iure dolorum tempora, Iure dolorum tempora Iure dolorum tempora/Iure dolorum tempora.',
    //   },
    // },
    // {
    //   title: 'Iure dolorum tempora',
    //   image: {
    //     src: 'https://i.pinimg.com/originals/25/bb/42/25bb426851361120b7e35400195b1caa.jpg',
    //     alt: 'dummy image',
    //   },
    //   details: {
    //     p1: 'Iure dolorum tempora Iure dolorum tempora Iure dolorum tempora Iure dolorum tempora Iure dolorum tempora',
    //     list1: { list: ['Iure dolorum tempora'], title: 'hee' },
    //     check1: {
    //       list: [
    //         {
    //           value: 'Iure dolorum tempora',
    //           checked: false,
    //         },
    //         {
    //           value: 'Iure dolorum tempora',
    //           checked: false,
    //         },
    //         {
    //           value: 'Iure dolorum tempora',
    //           checked: false,
    //         },
    //       ],
    //       title: 'heeeee',
    //     },
    //     list2: { list: ['Iure dolorum tempora'], title: 'hee' },
    //     check2: {
    //       list: [
    //         {
    //           value: 'Iure dolorum tempora',
    //           checked: false,
    //         },
    //         {
    //           value: 'Iure dolorum tempora',
    //           checked: false,
    //         },
    //         {
    //           value: 'Iure dolorum tempora',
    //           checked: false,
    //         },
    //       ],
    //       title: 'heeeee',
    //     },
    //     p2: 'Iure dolorum tempora, Iure dolorum tempora Iure dolorum tempora/Iure dolorum tempora.',
    //   },
    // },
    // {
    //   title: 'Iure dolorum tempora',
    //   image: {
    //     src: 'https://i.pinimg.com/originals/25/bb/42/25bb426851361120b7e35400195b1caa.jpg',
    //     alt: 'dummy image',
    //   },
    //   details: {
    //     p1: 'Iure dolorum tempora Iure dolorum tempora Iure dolorum tempora Iure dolorum tempora Iure dolorum tempora',
    //     list1: { list: ['Iure dolorum tempora'], title: 'hee' },
    //     check1: {
    //       list: [
    //         {
    //           value: 'Iure dolorum tempora',
    //           checked: false,
    //         },
    //         {
    //           value: 'Iure dolorum tempora',
    //           checked: false,
    //         },
    //         {
    //           value: 'Iure dolorum tempora',
    //           checked: false,
    //         },
    //       ],
    //       title: 'heeeee',
    //     },
    //     list2: { list: ['Iure dolorum tempora'], title: 'hee' },
    //     check2: {
    //       list: [
    //         {
    //           value: 'Iure dolorum tempora',
    //           checked: false,
    //         },
    //         {
    //           value: 'Iure dolorum tempora',
    //           checked: false,
    //         },
    //         {
    //           value: 'Iure dolorum tempora',
    //           checked: false,
    //         },
    //       ],
    //       title: 'heeeee',
    //     },
    //     p2: 'Iure dolorum tempora, Iure dolorum tempora Iure dolorum tempora/Iure dolorum tempora.',
    //   },
    // },
    // {
    //   title: 'Iure dolorum tempora',
    //   image: {
    //     src: 'https://i.pinimg.com/originals/25/bb/42/25bb426851361120b7e35400195b1caa.jpg',
    //     alt: 'dummy image',
    //   },
    //   details: {
    //     p1: 'Iure dolorum tempora Iure dolorum tempora Iure dolorum tempora Iure dolorum tempora Iure dolorum tempora',
    //     list1: { list: ['Iure dolorum tempora'], title: 'hee' },
    //     check1: {
    //       list: [
    //         {
    //           value: 'Iure dolorum tempora',
    //           checked: false,
    //         },
    //         {
    //           value: 'Iure dolorum tempora',
    //           checked: false,
    //         },
    //         {
    //           value: 'Iure dolorum tempora',
    //           checked: false,
    //         },
    //       ],
    //       title: 'heeeee',
    //     },
    //     list2: { list: ['Iure dolorum tempora'], title: 'hee' },
    //     check2: {
    //       list: [
    //         {
    //           value: 'Iure dolorum tempora',
    //           checked: false,
    //         },
    //         {
    //           value: 'Iure dolorum tempora',
    //           checked: false,
    //         },
    //         {
    //           value: 'Iure dolorum tempora',
    //           checked: false,
    //         },
    //       ],
    //       title: 'heeeee',
    //     },
    //     p2: 'Iure dolorum tempora, Iure dolorum tempora Iure dolorum tempora/Iure dolorum tempora.',
    //   },
    // },
    // {
    //   title: 'Iure dolorum tempora',
    //   image: {
    //     src: 'https://i.pinimg.com/originals/25/bb/42/25bb426851361120b7e35400195b1caa.jpg',
    //     alt: 'dummy image',
    //   },
    //   details: {
    //     p1: 'Iure dolorum tempora Iure dolorum tempora Iure dolorum tempora Iure dolorum tempora Iure dolorum tempora',
    //     list1: { list: ['Iure dolorum tempora'], title: 'hee' },
    //     check1: {
    //       list: [
    //         {
    //           value: 'Iure dolorum tempora',
    //           checked: false,
    //         },
    //         {
    //           value: 'Iure dolorum tempora',
    //           checked: false,
    //         },
    //         {
    //           value: 'Iure dolorum tempora',
    //           checked: false,
    //         },
    //       ],
    //       title: 'heeeee',
    //     },
    //     list2: { list: ['Iure dolorum tempora'], title: 'hee' },
    //     check2: {
    //       list: [
    //         {
    //           value: 'Iure dolorum tempora',
    //           checked: false,
    //         },
    //         {
    //           value: 'Iure dolorum tempora',
    //           checked: false,
    //         },
    //         {
    //           value: 'Iure dolorum tempora',
    //           checked: false,
    //         },
    //       ],
    //       title: 'heeeee',
    //     },
    //     p2: 'Iure dolorum tempora, Iure dolorum tempora Iure dolorum tempora/Iure dolorum tempora.',
    //   },
    // },
    // {
    //   title: 'Iure dolorum tempora',
    //   image: {
    //     src: 'https://i.pinimg.com/originals/25/bb/42/25bb426851361120b7e35400195b1caa.jpg',
    //     alt: 'dummy image',
    //   },
    //   details: {
    //     p1: 'Iure dolorum tempora Iure dolorum tempora Iure dolorum tempora Iure dolorum tempora Iure dolorum tempora',
    //     list1: { list: ['Iure dolorum tempora'], title: 'hee' },
    //     check1: {
    //       list: [
    //         {
    //           value: 'Iure dolorum tempora',
    //           checked: false,
    //         },
    //         {
    //           value: 'Iure dolorum tempora',
    //           checked: false,
    //         },
    //         {
    //           value: 'Iure dolorum tempora',
    //           checked: false,
    //         },
    //       ],
    //       title: 'heeeee',
    //     },
    //     list2: { list: ['Iure dolorum tempora'], title: 'hee' },
    //     check2: {
    //       list: [
    //         {
    //           value: 'Iure dolorum tempora',
    //           checked: false,
    //         },
    //         {
    //           value: 'Iure dolorum tempora',
    //           checked: false,
    //         },
    //         {
    //           value: 'Iure dolorum tempora',
    //           checked: false,
    //         },
    //       ],
    //       title: 'heeeee',
    //     },
    //     p2: 'Iure dolorum tempora, Iure dolorum tempora Iure dolorum tempora/Iure dolorum tempora.',
    //   },
    // },
    // {
    //   title: 'Iure dolorum tempora',
    //   image: {
    //     src: 'https://i.pinimg.com/originals/25/bb/42/25bb426851361120b7e35400195b1caa.jpg',
    //     alt: 'dummy image',
    //   },
    //   details: {
    //     p1: 'Iure dolorum tempora Iure dolorum tempora Iure dolorum tempora Iure dolorum tempora Iure dolorum tempora',
    //     list1: { list: ['Iure dolorum tempora'], title: 'hee' },
    //     check1: {
    //       list: [
    //         {
    //           value: 'Iure dolorum tempora',
    //           checked: false,
    //         },
    //         {
    //           value: 'Iure dolorum tempora',
    //           checked: false,
    //         },
    //         {
    //           value: 'Iure dolorum tempora',
    //           checked: false,
    //         },
    //       ],
    //       title: 'heeeee',
    //     },
    //     list2: { list: ['Iure dolorum tempora'], title: 'hee' },
    //     check2: {
    //       list: [
    //         {
    //           value: 'Iure dolorum tempora',
    //           checked: false,
    //         },
    //         {
    //           value: 'Iure dolorum tempora',
    //           checked: false,
    //         },
    //         {
    //           value: 'Iure dolorum tempora',
    //           checked: false,
    //         },
    //       ],
    //       title: 'heeeee',
    //     },
    //     p2: 'Iure dolorum tempora, Iure dolorum tempora Iure dolorum tempora/Iure dolorum tempora.',
    //   },
    // },
  ],
};

