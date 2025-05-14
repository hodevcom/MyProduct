import Image from 'next/image';
import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className='loading flex items-center justify-center mt-10 mb-10'>
      <Image src="/images/loading.gif" alt="Loading" width={60} height={60} />
    </div>
  );
};

export default Loading;