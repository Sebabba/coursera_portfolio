import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const ScrollValue = ({render, boxRef}) => {
  const [yPosition, setYPosition] = useState(0);

  useEffect(() => {
    const handleScroll = (e) => {
      const newYPosition = window.scrollY;
      if(newYPosition > yPosition)
        boxRef.current.style.transform = "translateY(-200px)"
      else
        boxRef.current.style.transform = "translateY(0px)"

      setYPosition(window.scrollY);
    }

    window.addEventListener("scroll", handleScroll);

    return() => {
      window.removeEventListener("scroll", handleScroll);
    }
  })

  return(render({yPosition}));
}

const Header = () => {
  const boxRef = useRef(null);

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <ScrollValue
      boxRef={boxRef}
      render={({yPosition}) => (
        <Box
          position="fixed"
          top={0}
          left={0}
          right={0}
          translateY={0}
          transitionProperty="transform"
          transitionDuration=".3s"
          transitionTimingFunction="ease-in-out"
          backgroundColor="#18181b"
          ref={boxRef}
        >
          <Box color="white" maxWidth="1280px" margin="0 auto">
            <HStack
              px={16}
              py={4}
              justifyContent="space-between"
              alignItems="center"
            >
              <nav>
                <HStack spacing={6}>
                  {socials.map((social, index) => {
                    return (
                      <a
                        href={social.url}
                        key={index}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon icon={social.icon} size="2x" />
                      </a>
                  )
                  })}
                </HStack>
              </nav>
              <nav>
                <HStack spacing={8}>
                  {
                    <>
                      <a onClick={handleClick("projects")} style={{ cursor: "pointer" }}>Projects</a>
                      <a onClick={handleClick("contactme")} style={{ cursor: "pointer" }}>Contact Me</a>
                    </>
                  }
                </HStack>
              </nav>
            </HStack>
          </Box>
        </Box>
      )}
    />
  );
};
export default Header;
