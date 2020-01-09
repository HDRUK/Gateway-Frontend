import React from "react";
import { SideNavLinksList, SideNavLinkItem } from "./styles.js";
import { GhostNavigationButton } from "../../styles/carbonComponents.js";

const AboutPageNavigation = () => (
    <SideNavLinksList>
        <li>
            <SideNavLinkItem to="innovation">
                <GhostNavigationButton kind="ghost">Innovation Gateway</GhostNavigationButton>
            </SideNavLinkItem>
        </li>
        <li>
            <SideNavLinkItem to="guidelines">
                <GhostNavigationButton kind="ghost">Guidelines</GhostNavigationButton>
            </SideNavLinkItem>
        </li>
        <li>
            <SideNavLinkItem to="glossary">
                <GhostNavigationButton kind="ghost">Glossary</GhostNavigationButton>
            </SideNavLinkItem>
        </li>
        <li>
            <SideNavLinkItem to="faq">
                <GhostNavigationButton kind="ghost">FAQ</GhostNavigationButton>
            </SideNavLinkItem>
        </li>
    </SideNavLinksList>
);

export default AboutPageNavigation;
