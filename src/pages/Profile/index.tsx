import React from 'react';

import { useAuthCtx } from '../../context/AuthCtx';

export default function Profile() {
  const { currentUser } = useAuthCtx();
  console.log(currentUser);
  return <div>Profile</div>;
}

