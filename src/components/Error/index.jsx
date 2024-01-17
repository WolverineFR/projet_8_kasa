import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="errorBox">
      <p className="numberError">404</p>
      <p className="error_texte">
        Oups! La page que vous demandez n&apos;existe pas.
      </p>
      <Link to="/" className="Return">
        Retourner sur la page d&apos;accueil
      </Link>
    </div>
  );
}

export default Error;
