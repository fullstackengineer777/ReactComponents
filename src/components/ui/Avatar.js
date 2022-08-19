import React from "react";
import styled, { ThemeProvider } from "styled-components";
import ReactDOM from "react-dom";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import AvatarGroup from "@material-ui/lab/AvatarGroup";
import { StylesProvider, useTheme } from "@material-ui/core/styles";

// Free Material-UI Template
// react.school/material-ui/templates

// Material-UI is migrating to a styled-components approach (v5)
// You must wrap with StylesProvider (See below) for these styles to work

const Content = styled.div`
  margin: auto;
  max-width: 500px;
`;

const GreenAvatar = styled(Avatar)`
  background-color: green;
`;

const BlueAvatar = styled(Avatar)`
  background-color: blue;
`;

const OrangeAvatar = styled(Avatar)`
  background-color: orange;
`;

const BorderedAvatar = styled(Avatar)`
  border: 3px solid lightseagreen;
`;

const AvatarContainer = styled.div`
  display: flex;
  margin-bottom: 14px;
  & > * {
    margin: 4px;
  }
`;

const SizedAvatar = styled(Avatar)`
  ${({ size, theme }) => `
    width: ${theme.spacing(size)}px; 
    height: ${theme.spacing(size)}px; 
  `};
`;

function ImageAvatars() {
  return (
    <AvatarContainer>
      <Avatar
        alt="Jack Sparrow"
        src="https://images.pexels.com/photos/4016173/pexels-photo-4016173.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      />
      <Avatar
        alt="Mike Wazowski"
        src="https://images.pexels.com/photos/6386956/pexels-photo-6386956.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      />
      <Avatar
        alt="Evelyn Carnahan"
        src="https://images.pexels.com/photos/1722198/pexels-photo-1722198.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      />
    </AvatarContainer>
  );
}

function LetterAvatars() {
  return (
    <AvatarContainer>
      <Avatar>Da</Avatar>
      <Avatar>W</Avatar>
      <Avatar>G</Avatar>
    </AvatarContainer>
  );
}

const AvatarLabel = styled.div`
  display: flex;
  align-items: center;
`;

function AvatarWithText() {
  return (
    <AvatarContainer>
      <AvatarLabel>
        <Avatar
          style={{ marginRight: "14px" }}
          alt="Jack Sparrow"
          src="https://images.pexels.com/photos/6386956/pexels-photo-6386956.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        />
        <Typography variant="body2"> Jack Sparrow</Typography>
      </AvatarLabel>
    </AvatarContainer>
  );
}

function ColoredAvatars() {
  return (
    <AvatarContainer>
      <GreenAvatar>G</GreenAvatar>
      <BlueAvatar>B</BlueAvatar>
      <OrangeAvatar>O</OrangeAvatar>
    </AvatarContainer>
  );
}

function BorderedAvatars() {
  return (
    <AvatarContainer>
      <BorderedAvatar
        alt="Jack Sparrow"
        src="https://images.pexels.com/photos/4016173/pexels-photo-4016173.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      />
      <BorderedAvatar
        alt="Mike Wazowski"
        src="https://images.pexels.com/photos/6386956/pexels-photo-6386956.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      />
      <BorderedAvatar
        alt="Evelyn Carnahan"
        src="https://images.pexels.com/photos/1722198/pexels-photo-1722198.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      />
    </AvatarContainer>
  );
}

function AvatarButton() {
  return (
    <IconButton onClick={() => console.log("hi")}>
      <Avatar>C</Avatar>
    </IconButton>
  );
}

function FallbackAvatars() {
  return (
    <AvatarContainer>
      <Typography>
        If broken image, uses children, then first letter of alt, then generic
        avatar image
      </Typography>
      <Avatar alt="Jack Sparrow" src="/broken-image.jpg">
        B
      </Avatar>
      <Avatar alt="Jack Sparrow" src="/broken-image.jpg" />
      <Avatar src="/broken-image.jpg" />
    </AvatarContainer>
  );
}

function AvatarGroupExample() {
  // You must install @material-ui/lab to use AvatarGroup
  return (
    <AvatarContainer>
      <AvatarGroup max={4}>
        <Avatar
          alt="John Smith"
          src="https://images.pexels.com/photos/4016173/pexels-photo-4016173.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        />
        <Avatar
          alt="Jack Sparrow"
          src="https://images.pexels.com/photos/1722198/pexels-photo-1722198.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        />
        <Avatar alt="D" src="/example.jpg" />
        <Avatar alt="F" src="/example.jpg" />
        <Avatar alt="F" src="/example.jpg" />
      </AvatarGroup>
    </AvatarContainer>
  );
}

function SizedAvatars() {
  return (
    <AvatarContainer>
      <SizedAvatar
        size={4}
        alt="Jack Sparrow"
        src="https://images.pexels.com/photos/6386956/pexels-photo-6386956.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      >
        G
      </SizedAvatar>
      <SizedAvatar
        size={6}
        alt="Mike Wazowski"
        src="https://images.pexels.com/photos/1722198/pexels-photo-1722198.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      >
        B
      </SizedAvatar>
      <SizedAvatar
        size={16}
        alt="Evelyn Carnahan"
        src="https://images.pexels.com/photos/4016173/pexels-photo-4016173.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      >
        O
      </SizedAvatar>
    </AvatarContainer>
  );
}

function App() {
  const theme = useTheme();
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Content>
          <Typography variant="h5"> Image Avatars </Typography>
          <ImageAvatars />
          <Typography variant="h5"> Letter Avatars </Typography>
          <LetterAvatars />
          <Typography variant="h5"> Avatar with Text </Typography>
          <AvatarWithText />
          <Typography variant="h5"> Colored Avatars </Typography>
          <ColoredAvatars />
          <Typography variant="h5"> Sized Avatars </Typography>
          <SizedAvatars />
          <Typography variant="h5"> Bordered Avatars </Typography>
          <BorderedAvatars />
          <Typography variant="h5"> Fallback Avatar </Typography>
          <FallbackAvatars />
          <Typography variant="h5"> Avatar Group </Typography>
          <AvatarGroupExample />
          <Typography variant="h5"> Avatar Button </Typography>
          <AvatarButton />
        </Content>
      </ThemeProvider>
    </StylesProvider>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
