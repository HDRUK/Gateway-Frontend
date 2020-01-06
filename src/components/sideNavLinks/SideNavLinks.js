import React from "react";
import { SideNavLinksList, SideNavLinkItem, SideNavLink } from "./styles.js";

const AboutPageNavigation = () => (
    <SideNavLinksList>
        <li>
            <SideNavLinkItem to="innovation">
                <SideNavLink kind="ghost">Innovation Gateway</SideNavLink>
            </SideNavLinkItem>
        </li>
        <li>
            <SideNavLinkItem to="guidelines">
                <SideNavLink kind="ghost">Guidelines</SideNavLink>
            </SideNavLinkItem>
        </li>
    </SideNavLinksList>
);

export default AboutPageNavigation;
