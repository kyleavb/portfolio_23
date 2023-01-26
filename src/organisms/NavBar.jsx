import React from "react";
import PropTypes from "prop-types";
import { Flex, useColorMode } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import theme from "../theme/index";
import navItems from "../data/navItems";
import NavLink from "../atoms/NavLink";

const NavBar = ({ alignment, justifyContent }) => {
    const { colors } = theme;
    const { colorMode } = useColorMode();

    const linkList = navItems.map((item, i) => (
        <NavLink href={item.loc} key={i} text={item.name} />
    ));

    return (
        <Flex
            align={alignment}
            backgroundColor={colors[colorMode].navAndFooter}
            boxShadow="md"
            h={20}
            px={12}
            justifyContent={justifyContent}
            w="100%"
        >
            <Flex>
                <Link to="/">Logo Place Holder</Link>
            </Flex>
            <Flex>{linkList}</Flex>
        </Flex>
    );
};

NavBar.propTypes = {
    justifyContent: PropTypes.string,
    alignment: PropTypes.string,
};

NavBar.defaultProps = {
    alignment: "center",
    justifyContent: "space-between",
};

export default NavBar;
