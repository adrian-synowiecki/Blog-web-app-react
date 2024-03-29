import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { Formik, Form } from "formik";

import variants from "utils/variants";
import * as S from "./CurrentUserSettingsPage.style";
import {
  updateUserRequest,
  clearUserError,
  logOut,
} from "redux/user/user.actions";

import Button from "components/Button/Button";
import ErrorList from "components/ErrorList/ErrorList";
import Input from "components/Input/Input";

function UserSettingsPage({
  currentUserData,
  error,
  updateUserRequest,
  clearUserError,
  logOut,
  push,
}) {
  const formikRef = useRef(null);
  useEffect(() => {
    formikRef.current.setSubmitting(false);
  }, [error]);
  useEffect(() => {
    return () => {
      clearUserError();
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  window.onload = () => {
    clearUserError();
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    logOut();
    push("/");
  };
  return (
    <S.UserSettingsPageContainer
      initial="initial"
      animate="animate"
      variants={variants}
    >
      <S.Title>Profile Settings</S.Title>
      <Formik
        ref={formikRef}
        initialValues={{
          profilePictureUrl: currentUserData.image
            ? `${currentUserData.image}`
            : "",
          username: `${currentUserData.username}`,
          bio: currentUserData.bio ? `${currentUserData.bio}` : "",
          email: `${currentUserData.email}`,
          password: "",
        }}
        onSubmit={(values) => {
          const userUpdateData = {
            user: {
              username: values.username,
              image: values.image,
              bio: values.bio,
            },
          }
          updateUserRequest(userUpdateData);
		      push(`/profile/${values.username}`);
        }}
      >
        {({ isSubmitting }) => (
          <Form style={{ width: "100%" }}>
            {error && <ErrorList error={error} />}
            <Input name="image" type="text" label="URL of profile picture" />
            <Input name="username" type="text" label="Username" />
            <Input
              name="bio"
              type="text"
              multiline
              rows="5"
              label="Short bio about you"
            />
            <Input name="email" type="email" label="Email" />
            <Input name="password" type="password" label="New Password" />
            <S.ButtonsWrapper>
              <S.LogoutButton
                disabled={isSubmitting}
                type="submit"
                onClick={handleLogout}
              >
                Click here to logout
              </S.LogoutButton>
              <Button disabled={isSubmitting} type="submit">
                Update Settings
              </Button>
            </S.ButtonsWrapper>
          </Form>
        )}
      </Formik>
    </S.UserSettingsPageContainer>
  );
}

const mapStateToProps = (state) => {
  const { currentUserData, error } = state.user;
  return {
    currentUserData,
    error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateUserRequest: (userUpdateData) =>
      dispatch(updateUserRequest(userUpdateData)),
    clearUserError: () => dispatch(clearUserError()),
    logOut: () => dispatch(logOut()),
    push: (path) => dispatch(push(path)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserSettingsPage);
