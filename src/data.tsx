import { TbCircleCheck, TbCircleDashed } from 'react-icons/tb';

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

