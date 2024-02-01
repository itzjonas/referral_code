'use client';

import {
  Button,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  useDisclosure,
} from '@nextui-org/react';
import { button as buttonStyles } from '@nextui-org/theme';
import { copyTextToClipboard } from '@/utils/copyToClipboard';
import { siteConfig } from '@/config/site';
import { subtitle, title } from '@/components/primitives';

const codes = [
  { code: '4DUQXZ', discount: '$200 off' },
  { code: 'FNRT8Y', discount: '$100 off' },
];
const red = '#FF3347';

export default function Home() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleCopyCode = code => {
    copyTextToClipboard(code);
    onOpen();
  };

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>Peloton&nbsp;</h1>
        <h1 className={title()} style={{ color: red }}>
          Promo Codes&nbsp;
        </h1>
        <br />
        <h2 className={subtitle({ class: 'mt-4' })}>
          Use code <strong>{codes[0].code}</strong> at checkout by 9/12/24 to get{' '}
          <span className={title({ size: 'xs' })} style={{ color: red }}>
            $200 off
          </span>{' '}
          accessories when ordering a Peloton Bike, Bike+, Tread, Tread+, or Row.*
        </h2>
      </div>

      <Table aria-label="TODO: coming soon...">
        <TableHeader>
          <TableColumn>CODE</TableColumn>
          <TableColumn>DESCRIPTION</TableColumn>
          <TableColumn>STATUS</TableColumn>
        </TableHeader>
        <TableBody>
          {codes.map(({ code, discount }, index) => {
            return (
              <TableRow key={index}>
                <TableCell>{code}</TableCell>
                <TableCell>{discount}</TableCell>
                <TableCell>
                  <div className="flex gap-3">
                    <Button
                      radius="full"
                      className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
                      onClick={() => handleCopyCode(code)}
                    >
                      Copy Code
                    </Button>
                    <Button
                      href={siteConfig.links.peloton}
                      as={Link}
                      radius="full"
                      showAnchorIcon
                      variant="bordered"
                    >
                      Visit Peloton
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {onClose => (
            <>
              <ModalHeader className="flex flex-col gap-1">Copied to clipboard</ModalHeader>
              <ModalBody>
                <p>
                  Visit{' '}
                  <a
                    href="https://www.onepeloton.com/"
                    style={{ textDecoration: 'underline' }}
                    target="_blank"
                  >
                    www.onepeloton.com
                  </a>{' '}
                  to use code.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Link
                  isExternal
                  className={buttonStyles({
                    variant: 'bordered',
                    radius: 'full',
                  })}
                  href={siteConfig.links.peloton}
                >
                  Visit Peloton
                </Link>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </section>
  );
}
