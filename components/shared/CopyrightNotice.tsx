'use client'

import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const CopyrightNotice = () => {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    setYear(currentYear);
  }, []);

  return (
    <div className="text-center text-sm text-gray-600">
      &copy; {year ?? '...'}  {" "}
      <span><Link href={'/'} className='text-primary'>DeKing Group of Companies Ltd.</Link></span> {" "}
 
      All rights reserved.
    </div>
  );
};

export default CopyrightNotice;
