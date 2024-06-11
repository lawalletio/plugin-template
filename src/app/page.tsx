'use client';
import React from 'react'
import { formatToPreference, useBalance } from '@lawallet/react';
import { Button, Container, Flex, Text } from '@lawallet/ui';

const AppIndex = () => {
  const balance = useBalance();

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
