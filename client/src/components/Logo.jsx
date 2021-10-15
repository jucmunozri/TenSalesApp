import React from "react";
import "./styles/interfaces.css";
import logoCenter from "../assets/logo/TenSalesAppLogo.png";
import logoTeam from "../assets/logo/logoTenJS.png";

const Logo = () => {
  return (
    <div divInterfaceLogo>
      <div class="logoHome">
        <img ALIGN="middle" src={logoCenter} alt="TenSalesApp" />
      </div>

      <div class="footer">
        <img src={logoTeam} Align="middle" alt="Logo TenJS" />
        <p>© 2021 TenJS. ALL RIGHTS RESERVED.</p>
      </div>
    </div>
  );
};

export default Logo;
