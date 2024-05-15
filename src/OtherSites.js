import React from "react";
import { useTranslation } from "react-i18next";

const OtherSites = () => {
    const { t } = useTranslation();

    return (
        <div className="other-sites">
        <h1>{t("OtherSites")}</h1>
        <ul>
            <li>
            <a href="https://www.njupt.edu.cn" target={"_blank"}>{t("NJUPT")}</a>
            </li>
        </ul>
        </div>
    );
};

export default OtherSites;