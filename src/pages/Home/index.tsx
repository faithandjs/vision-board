import React from 'react';
import Vision from '../../components/Vision';

export default function Home() {
  //https://i.pinimg.com/originals/91/c6/31/91c63167bab6808ea759e26c8a45f849.jpg
  const data = [
    {
      title: 'Expand my Palette Belsani Script',
      image: {
        src: 'https://i.pinimg.com/564x/b8/f9/0a/b8f90af6602d68d7db4cbe0f09be0c03.jpg',
        alt: 'pasta with chicken and broccoli',
      },
      details: (
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi illo
          mollitia repellat iusto. Sequi suscipit eos id inventore modi facilis,
          consequuntur minima, quibusdam dolor ad odit iusto, vitae ipsum porro.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
          aspernatur esse laudantium rem suscipit nobis eum expedita amet!
          Debitis, deleniti temporibus quam praesentium ipsam atque sed ratione
          officiis velit voluptates. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Nisi illo mollitia repellat iusto. Sequi suscipit
          eos id inventore modi facilis, consequuntur minima, quibusdam dolor ad
          odit iusto, vitae ipsum porro. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Nam aspernatur esse laudantium rem suscipit nobis
          eum expedita amet! Debitis, deleniti temporibus quam praesentium ipsam
          atque sed ratione officiis velit voluptates. Lorem ipsum dolor sit
          amet consectetur, adipisicing elit. Nisi illo mollitia repellat iusto.
          Sequi suscipit eos id inventore modi facilis, consequuntur minima,
          quibusdam dolor ad odit iusto, vitae ipsum porro. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Nam aspernatur esse laudantium
          rem suscipit nobis eum expedita amet! Debitis, deleniti temporibus
          quam praesentium ipsam atque sed ratione officiis velit voluptates.
        </div>
      ),
      previewText:
        ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi accusamus nihil nemo. ',
    },
    {
      title: 'Expand my Palette',
      image: {
        src: 'https://i.pinimg.com/originals/91/c6/31/91c63167bab6808ea759e26c8a45f849.jpg',
        alt: 'pasta with chicken and broccoli',
      },
      details: <div>ill be so hot this year, it'll blow your mind</div>,
      previewText:
        ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi accusamus nihil nemo. ',
    },
    {
      title: 'Expand my Palette Belsani Script',
      image: {
        src: 'https://i.pinimg.com/564x/b8/f9/0a/b8f90af6602d68d7db4cbe0f09be0c03.jpg',
        alt: 'pasta with chicken and broccoli',
      },
      details: <div></div>,
      previewText:
        ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi accusamus nihil nemo. ',
    },
    {
      title: 'Expand my Palette',
      image: {
        src: 'https://i.pinimg.com/originals/91/c6/31/91c63167bab6808ea759e26c8a45f849.jpg',
        alt: 'pasta with chicken and broccoli',
      },
      details: <div>ill be so hot this year, it'll blow your mind</div>,
      previewText:
        ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi accusamus nihil nemo. ',
    },
  ];
  return (
    <div className='p-10'>
      <h1 className='text-5xl font-header font-thin text-center py-4'>
        My 2023
      </h1>
      <div className='flex justify-between child:shrink-0 flex-wrap'>
        {data.map((item, key) => {
          return <Vision {...item} key={key} id={key} />;
        })}
      </div>
    </div>
  );
}

//VISION BOARD

