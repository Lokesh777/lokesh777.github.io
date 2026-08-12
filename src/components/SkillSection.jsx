import { Tabs, TabList, Tab, TabPanel, TabPanels, Text, IconButton, Box } from "@chakra-ui/react"
import { SkillCard } from "./SkillCard"
import styles from "../styles/Skill/SkillsSection.module.css"
import { BsChevronLeft, BsChevronRight } from "react-icons/bs"
import { categories } from "./skills"
import React, { useRef, useState, useEffect, cloneElement } from 'react'

const tabStyle = {
  fontSize: { base: "sm", md: "md" },
  fontWeight: 600,
  px: 3,
  py: 2,
  whiteSpace: "nowrap",
  _selected: { color: "#a00596" },
  _hover: { color: "#a00596" },
}

function CategorySection({ category }) {
  return (
    <div className={styles.category}>
      <Box className={styles.skillsGrid}>
        {category.skills.map((skill) => (
          <SkillCard
            key={skill.name}
            skill={skill.name}
            icon={cloneElement(skill.icon, { className: styles.skillIcon })}
          />
        ))}
      </Box>
    </div>
  )
}

export function SkillsSection() {
  const scrollRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)

  const updateScrollButtons = () => {
    const el = scrollRef.current
    if (!el) {
      setCanScrollLeft(false)
      setCanScrollRight(false)
      return
    }
    setCanScrollLeft(el.scrollLeft > 10)
    setCanScrollRight(el.scrollWidth - el.clientWidth - el.scrollLeft > 10)
  }

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    updateScrollButtons()
    el.addEventListener("scroll", updateScrollButtons)
    window.addEventListener("resize", updateScrollButtons)
    return () => {
      el.removeEventListener("scroll", updateScrollButtons)
      window.removeEventListener("resize", updateScrollButtons)
    }
  }, [])

  return (
    <div className={styles.rootCont} id="skills">
      <Text className={styles.headingH1} color="#383874" as={"h1"} fontSize={{ base: "xl", md: "3xl" }} mb={6}>
        Technical Skills
      </Text>
      <Tabs variant="unstyled" defaultIndex={0} isLazy lazyBehavior="unmount">
        <div className={styles.tabScrollWrap}>
          {canScrollLeft && (
            <IconButton
              aria-label="Scroll tabs left"
              icon={<BsChevronLeft />}
              onClick={() => scrollRef.current.scrollBy({ left: -240, behavior: "smooth" })}
              className={styles.chevron}
              variant="ghost"
              size="sm"
            />
          )}
          <div ref={scrollRef} className={styles.tabScrollInner}>
            <TabList className={styles.tabList}>
              {categories.map((category) => (
                <Tab key={category.title} {...tabStyle} className={styles.tab}>
                  {category.title}
                </Tab>
              ))}
            </TabList>
          </div>
          {canScrollRight && (
            <IconButton
              aria-label="Scroll tabs right"
              icon={<BsChevronRight />}
              onClick={() => scrollRef.current.scrollBy({ left: 240, behavior: "smooth" })}
              className={styles.chevron}
              variant="ghost"
              size="sm"
            />
          )}
        </div>

        <TabPanels>
          {categories.map((category) => (
            <TabPanel key={category.title} px={0} py={2}>
              <CategorySection category={category} />
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </div>
  )
}
