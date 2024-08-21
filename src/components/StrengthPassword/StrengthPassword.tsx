import { ReactNode } from 'react';

import getPasswordStrengthParams from '../../utils/getPasswordStrengthParams';

const StrengthPassword = ({ password }: { password: string }): ReactNode => {
  const { color, width } = getPasswordStrengthParams(password);

  return (
    <div
      style={{
        display: 'block',
        width,
        backgroundColor: color,
        height: '1rem',
        marginRight: 'auto',
        borderRadius: '1rem',
      }}
    ></div>
  );
};

export default StrengthPassword;
