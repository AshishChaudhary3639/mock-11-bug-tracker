import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { Icon } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

const Dashboard = () => {
  const [bug, setBug] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  return (
    <Box bgColor={"#f9f0f1"}>
      <Heading>Bug Tracker</Heading>
      <Flex w="80%" m="auto" justifyContent={"space-between"}>
        <VStack w="22%" borderColor={""} bgColor="#f65251" textAlign={"right"}>
          <Button onClick={onOpen}> Report Bug</Button>
          <Modal blockScrollOnMount={false} isOpen={isOpen} >
            <ModalOverlay />
            <ModalContent>
              <ModalBody>
                <Input
                  type={"text"}
                  placeholder="Add bug"
                  onChange={(e) => setBug(e.target.value)}
                />
              </ModalBody>

              <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Close
                </Button>
                <Button colorScheme="blue" mr={3}>
                  Submit
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
          <Box>Critical Severity</Box>
          <Box>
            <Flex justifyContent={"space-between"}>
              <Text>Reported Bug</Text>
              <Icon as={DeleteIcon} />
            </Flex>
          </Box>
        </VStack>
        <VStack w="25%" bgColor="#e1ad26">
          <Button>Report Bug</Button>
          <Box>Major Severity</Box>
          <Box>
            <Flex justifyContent={"space-between"}>
              <Text>Reported Bug</Text>
              <Icon as={DeleteIcon} />
            </Flex>
          </Box>
        </VStack>
        <VStack w="22%" bgColor="#5f55d0">
          <Button>Report Bug</Button>
          <Box>Medium Severity</Box>
          <Box>
            <Flex justifyContent={"space-between"}>
              <Text>Reported Bug</Text>
              <Icon as={DeleteIcon} />
            </Flex>
          </Box>
        </VStack>
        <VStack w="25%" >
          <Button>Report Bug</Button>
          <Box>Low Severity</Box>
          <Box >
            <Flex justifyContent={"space-between"} bgColor="#44700f">
              <Text>Reported Bug</Text>
              <Icon as={DeleteIcon} />
            </Flex>
          </Box>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Dashboard;
