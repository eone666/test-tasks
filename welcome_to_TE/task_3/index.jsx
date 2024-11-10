import { Fragment, memo } from "react";

const defaultProps = { name: "unknown", age: null };

const MainComponent = ({
  user = defaultProps, // default value for `props.user`
}) => {
  return (
    <Fragment>
      <ChildComponent user={user} />
    </Fragment>
  );
};

// memoized component
const ChildComponent = memo(
  ({ user: { name, age } }) => {
    return (
      <div>
        user name: {name}, user age: {age}
      </div>
    );
  },
  (prev, next) =>
    prev.user.name === next.user.name && prev.user.age === next.user.age
);
