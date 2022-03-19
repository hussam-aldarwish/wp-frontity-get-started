import react from "react";
import { connect } from "frontity";

const List = ({ state }) => {
  const data = state.source.get(state.router.link);
  return (
    <div>
      {data.items.map(({ type, id, link }) => {
        return (
          <div key={id}>
            {type} – {id} – {link}
          </div>
        );
      })}
    </div>
  );
};

export default connect(List);
