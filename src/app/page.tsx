'use client';
import { Button, Container, Flex, Text } from '@lawallet/ui';
import { useWalletContext, formatToPreference } from '@lawallet/react';
import React from 'react';

const AppIndex = () => {
  const {
    account: { identity, balance },
  } = useWalletContext();

  return (
    <Container size="small">
      <Flex flex={1} direction="column" align="center" justify="center">
        <Text>Hola, {identity.username ?? identity.hexpub}</Text>
        <Text>Tu balance es de {formatToPreference('SAT', balance.amount, 'es')} satoshis</Text>
      </Flex>

      <Flex>
        <Button
          onClick={() => {
            alert('Probando 123456');
          }}
        >
          Click me
        </Button>
      </Flex>
    </Container>
  );
};

export default AppIndex;
