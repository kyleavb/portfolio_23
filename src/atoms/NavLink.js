import React from "react";
import { Link } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import PropTypes from "prop-types";

const NavLink = ({ href, text }) => {
    return (
        <Flex px={4}>
            <Link to={href}>{text}</Link>
        </Flex>
    );
};
NavLink.propTypes = {
    href: PropTypes.string,
    text: PropTypes.string,
};

NavLink.defaultProps = {
    href: "/",
    text: "Home",
};
export default NavLink;
