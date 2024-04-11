import React from 'react';
import Typewriter from 'typewriter-effect';
import { useTranslation } from 'react-i18next';

function Type() {
  const { t } = useTranslation();

  return (
    <Typewriter
      options={{
        strings: [t('Work in Progress')],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
