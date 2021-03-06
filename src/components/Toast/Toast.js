import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Paper from "../Paper/Paper";
import Icon from "../atoms/Icon/Icon";
import { Title } from "../atoms/Typography/Heading";
import { colors } from "../../styles/defaults";
import Button from "../atoms/Button/Button";

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1em;
`;

const StyledIcon = styled(Icon)`
  margin-right: 1em;
`;

const StyledTitle = styled(Title)`
  color: ${props => (props.error ? colors.danger : colors.primary)};
`;

const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Message = styled.div`
  margin-bottom: 1em;
`;

const Toast = ({
  icon,
  title,
  buttonText,
  error,
  message,
  onButtonClick,
  ...props
}) => {
  return (
    <Paper key={this}>
      <Header>
        <StyledIcon name={icon} error={error} primary={!error} />{" "}
        <StyledTitle error={error}>
          <b>{title}</b>
        </StyledTitle>
      </Header>
      <Message>{message}</Message>
      <Actions>
        <Button onClick={onButtonClick}>{buttonText}</Button>
      </Actions>
    </Paper>
  );
};

Toast.propTypes = {
  icon: PropTypes.string,
  buttonText: PropTypes.string,
  error: PropTypes.bool,
  onButtonClick: PropTypes.func,
  title: PropTypes.string,
  message: PropTypes.string
};

Toast.defaultProps = {
  icon: "check_circle",
  buttonText: "Dismiss",
  error: false,
  title: "Toast title",
  message: "Toast message",
  onButtonClick: () => alert("Button clicked")
};

export default Toast;
