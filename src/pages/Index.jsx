import React, { useState } from "react";
import { Box, Heading, Text, VStack, HStack, Button, Image, Flex, Spacer, IconButton, useDisclosure, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton } from "@chakra-ui/react";
import { FaBars, FaTimes } from "react-icons/fa";

const Index = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedFeature, setSelectedFeature] = useState("data");

  const features = [
    {
      id: "data",
      title: "Data Aggregation & Processing",
      description: "Our AI-driven engine aggregates live data from over 50 e-shops across the EU, automatically matching products and brands for benchmarking.",
      image: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkYXRhJTIwcHJvY2Vzc2luZ3xlbnwwfHx8fDE3MTA4NzU0Mjh8MA&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      id: "monitoring",
      title: "Monitoring & Alerts",
      description: "Track competitors' pricing, promotions, product launches, and visibility in real-time. Receive alerts and daily summaries of market movements.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb25pdG9yaW5nJTIwZGFzaGJvYXJkfGVufDB8fHx8MTcxMDg3NTQyOXww&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      id: "analysis",
      title: "Analysis & Insights",
      description: "Analyze pricing, visibility, and promotions against competitors. Gain insights to improve search position and sales potential.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHlzaXN8ZW58MHx8fHwxNzEwODc1NDI5fDA&ixlib=rb-4.0.3&q=80&w=1080",
    },
  ];

  return (
    <Box>
      {/* Header */}
      <Flex as="header" align="center" justify="space-between" wrap="wrap" padding={6} bg="teal.500" color="white">
        <Heading as="h1" size="lg" letterSpacing={"tighter"}>
          Forloop
        </Heading>
        <Spacer />
        <Box display={{ base: "block", md: "none" }}>
          <IconButton icon={<FaBars />} variant="outline" color="white" onClick={onOpen} />
        </Box>
        <HStack spacing={8} display={{ base: "none", md: "flex" }}>
          <Button variant="ghost">Home</Button>
          <Button variant="ghost">Features</Button>
          <Button variant="ghost">Pricing</Button>
          <Button variant="ghost">Contact</Button>
        </HStack>
      </Flex>

      {/* Hero Section */}
      <Box textAlign="center" py={20}>
        <Heading as="h2" size="2xl" mb={6}>
          AI-Powered Market Intelligence for FMCG
        </Heading>
        <Text fontSize="xl" mb={8}>
          Real-time insights on pricing, promotions, and visibility across online retailers in the EU.
        </Text>
        <Button colorScheme="teal" size="lg">
          Get Started
        </Button>
      </Box>

      {/* Features Section */}
      <VStack spacing={12} py={20}>
        {features.map((feature) => (
          <Flex key={feature.id} align="center" direction={{ base: "column", md: "row" }} onClick={() => setSelectedFeature(feature.id)} cursor="pointer">
            <Image src={feature.image} alt={feature.title} boxSize="300px" objectFit="cover" mb={{ base: 4, md: 0 }} mr={{ md: 8 }} />
            <Box textAlign={{ base: "center", md: "left" }}>
              <Heading as="h3" size="xl" mb={4}>
                {feature.title}
              </Heading>
              <Text fontSize="lg">{feature.description}</Text>
            </Box>
          </Flex>
        ))}
      </VStack>

      {/* Drawer */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody>
              <VStack spacing={4} align="stretch">
                <Button variant="ghost">Home</Button>
                <Button variant="ghost">Features</Button>
                <Button variant="ghost">Pricing</Button>
                <Button variant="ghost">Contact</Button>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
};

export default Index;
