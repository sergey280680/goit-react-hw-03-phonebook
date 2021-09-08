import React from "react";
import PropTypes from "prop-types";
import { P, Li } from "./CardContact.styled";

export const CardContact = ({ name, number, onDeliteContact, id }) => {
  return (
    <Li>
      <P>
        {name}: {number}
      </P>
      <button onClick={() => onDeliteContact(id)}>Delite</button>
    </Li>
  );
};

CardContact.propTypes = {
  name: PropTypes.string.isRequired,
};
