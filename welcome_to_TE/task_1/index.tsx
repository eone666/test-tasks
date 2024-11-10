import { Component, memo, PureComponent } from "react";

type IProps = {
  name: string;
  age: number;
};

// functional component
const FirstComponent = memo(({ name, age }: IProps) => (
  <div>
    my name is {name}, my age is {age}
  </div>
));

// class component
class SecondComponent extends PureComponent<IProps> {
  render() {
    return (
      <div>
        my name is {this.props.name}, my age is {this.props.age}
      </div>
    );
  }
}

// class component
class ThirdComponent extends Component<{ user: IProps }> {
  shouldComponentUpdate(nextProps) {
    return (
      this.props.user.age !== nextProps.user.age ||
      this.props.user.name !== nextProps.user.name
    );
  }

  render() {
    return (
      <div>
        my name is {this.props.user.name}, my age is {this.props.user.age}
      </div>
    );
  }
}
