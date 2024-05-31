'use client';
import { Button, Container, Flex, Text } from '@lawallet/ui';
import { formatToPreference, useWalletContext } from '@lawallet/react';
import React from 'react';

const AppIndex = () => {
  const {
    account: { balance },
  } = useWalletContext();

  return (
    <Container size="small">
      <Flex flex={1} direction="column" align="center" justify="center">
        <Text>Tu balance es de {formatToPreference('SAT', balance.amount, 'es')} satoshis</Text>
      </Flex>

      <Flex>
        <Button
          onClick={() => {
            alert('Test');
          }}
        >
          Test Button
        </Button>
      </Flex>
    </Container>
  );
};

export default AppIndex;
