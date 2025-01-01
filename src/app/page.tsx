"use client";
import { Box, Button, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

const QuotesPage = () => {
  const router = useRouter();

  const handleCreateQuote = () => {
    router.push("/rfq-form");
  };

  const handleViewClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const quoteId = event.currentTarget
      .closest("tr")
      ?.querySelector("td")?.textContent;
    if (quoteId) {
      router.push(`/rfq-form/quote?id=${quoteId}`);
    } else {
      console.error("Quote ID not found");
    }
  };
  return (
    <Box p={6}>
      <Button colorScheme="blue" mb={4} onClick={handleCreateQuote}>
        Create Quote
      </Button>

      <Table variant="striped" colorScheme="gray">
        <Thead>
          <Tr>
            <Th>Quote ID</Th>
            <Th>Title</Th>
            <Th>Department</Th>
            <Th>Status</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>#12345</Td>
            <Td>Office Supplies</Td>
            <Td>Administration</Td>
            <Td>Pending</Td>
            <Td>
              <Button onClick={handleViewClick} size="sm" colorScheme="blue">
                View
              </Button>
            </Td>
          </Tr>
          {/* Add more rows as needed */}
        </Tbody>
      </Table>
    </Box>
  );
};

export default QuotesPage;
