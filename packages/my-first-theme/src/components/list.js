import React from "react";
import { connect, styled } from "frontity";
import Link from "@frontity/components/link";

const List = ({ state }) => {
  const data = state.source.get(state.router.link);
  return (
    <Items>
      {data.items.map(({ type, id, link }) => {
        const post = state.source[type][id];
        return (
          <Link key={id} link={link}>
            {post.title.rendered}
            <br />
          </Link>
        );
      })}
    </Items>
  );
};

export default connect(List);

const Items = styled.div`
  & > a {
    display: block;
    margin: 6px 0;
    font-size: 1.2rem;
    color: steelblue;
    text-decoration: none;
  }
`;
