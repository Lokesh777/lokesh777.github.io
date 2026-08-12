import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Text,
  HStack,
  Stack,
  Box,
  Tag,
  TagLabel,
} from "@chakra-ui/react";
import styles from "../styles/Project.module.css";
import { StackTooltip } from "./StackTooltip";

export function ProjectDetail({ project, isOpen, onClose }) {
  if (!project) return null;

  const { label, img, link, git, video, about, full, demos, company, companyLabel, stacks, accent, dependencies, embed } = project;

  const gradient = accent
    ? `linear-gradient(135deg, ${accent[0]} 0%, ${accent[1]} 100%)`
    : "linear-gradient(135deg, #15153a 0%, #3a3a7a 100%)";

  const demoLinks = [];
  if (link) demoLinks.push({ label: "Live Demo", url: link });
  (demos || []).forEach((d) => demoLinks.push(d));

  const isSideProject = !company;
  const demoPreviewUrl =
    isSideProject && demoLinks.length > 0 && embed !== false
      ? demoLinks[0].url
      : null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="xl" scrollBehavior="inside">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader pr={16}>{label}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack spacing={4}>
            {isSideProject && demoPreviewUrl ? (
              <Box className={styles.previewBox}>
                <div className={styles.previewBar}>
                  <span className={styles.previewTitle}>Live Preview</span>
                  <a
                    href={demoPreviewUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.previewOpen}
                  >
                    Open in new tab
                  </a>
                </div>
                <iframe
                  src={demoPreviewUrl}
                  title={`${label} live preview`}
                  className={styles.modalIframe}
                  loading="lazy"
                />
              </Box>
            ) : video ? (
              <iframe
                src={video}
                title={`${label} demo video`}
                className={styles.modalVideo}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : img ? (
              <img src={img} alt={label} className={styles.modalImage} />
            ) : (
              <div className={styles.modalPlaceholder} style={{ background: gradient }}>
                <span className={styles.placeholderTitle}>{label}</span>
              </div>
            )}

            {company && (
              <Text fontSize="sm" color="#a00596" fontWeight={600}>
                Company work — {companyLabel}
              </Text>
            )}

            {about && <Text fontSize="sm" color="gray.600">{about}</Text>}

            <div className={styles.stacksRow} style={{ margin: "4px 0" }}>
              {stacks.map((stack, i) => (
                <StackTooltip key={i} name={stack.name} icon={stack.icon} />
              ))}
            </div>

            {full && (
              <Stack spacing={2}>
                {full.map((line, i) => (
                  <Text key={i} fontSize="sm" color="gray.700" lineHeight="1.6">
                    {line}
                  </Text>
                ))}
              </Stack>
            )}

            {dependencies && dependencies.items && dependencies.items.length > 0 && (
              <Box className={styles.depsBox}>
                <Text fontSize="sm" fontWeight={700} color="#15153a" mb={3}>
                  {dependencies.label}
                </Text>
                <HStack spacing={2.5} flexWrap="wrap" rowGap={2}>
                  {dependencies.items.map((dep) => (
                    <Tag key={dep} size="sm" colorScheme="purple" variant="subtle" px={3} py={1}>
                      <TagLabel>{dep}</TagLabel>
                    </Tag>
                  ))}
                </HStack>
              </Box>
            )}

            {(demoLinks.length > 0 || git) && (
              <HStack spacing={3} flexWrap="wrap">
                {git && (
                  <Button as="a" href={git} target="_blank" rel="noreferrer" size="sm">
                    Code
                  </Button>
                )}
                {demoLinks.map((d) => (
                  <Button
                    key={d.url}
                    as="a"
                    href={d.url}
                    target="_blank"
                    rel="noreferrer"
                    size="sm"
                    variant="outline"
                  >
                    {d.label}
                  </Button>
                ))}
              </HStack>
            )}
          </Stack>
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose} size="sm">Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
