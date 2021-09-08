import React from "react";
import { CardContact } from "./CardContact/CardContact";
import PropTypes from "prop-types";
import { Ul } from "./ListContacts.styled";

export const ListContacts = ({ events, onDeliteContact }) => {
  return (
    <Ul>
      {events.map(({ id, name, number }) => (
        <CardContact
          key={id}
          name={name}
          id={id}
          number={number}
          onDeliteContact={onDeliteContact}
        />
      ))}
    </Ul>
  );
};

ListContacts.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};
