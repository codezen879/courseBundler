import React, { useState } from 'react';
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Button,
  Radio,
  RadioGroup,
  Stack,
} from '@chakra-ui/react';

function PlacementExample() {
  const [iOpen, setIOpen] = useState(false);
  const [placement, setPlacement] = useState('right');

  const openDrawer = () => {
    setIOpen(true);
  };

  const closeDrawer = () => {
    setIOpen(false);
  };

  return (
    <>
      <RadioGroup defaultValue={placement} onChange={setPlacement}>
        <Stack direction='row' mb='4'>
          <Radio value='top'>Top</Radio>
          <Radio value='right'>Right</Radio>
          <Radio value='bottom'>Bottom</Radio>
          <Radio value='left'>Left</Radio>
        </Stack>
      </RadioGroup>
      <Button colorScheme='blue' onClick={openDrawer}>
        Open
      </Button>
      <Drawer placement={placement} onClose={closeDrawer} isOpen={iOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
          <DrawerBody>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default PlacementExample;



