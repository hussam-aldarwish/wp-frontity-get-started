import React from "react";
import { connect } from "frontity";
import Link from "@frontity/components/link";

const List = ({ state }) => {
  const data = state.source.get(state.router.link);
  return (
    <div>
      {data.items.map(({ type, id, link }) => {
        const post = state.source[type][id];
        return (
          <Link key={id} link={link}>
            {post.title.rendered}
            <br />
          </Link>
        );
      })}
    </div>
  );
};

export default connect(List);
