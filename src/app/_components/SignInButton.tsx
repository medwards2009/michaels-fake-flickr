"use client";
import { useEffect, useState } from "react";

import { Button, CircularProgress } from "@mui/material";

const SignInButton = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [loggedIn, setloggedIn] = useState<boolean>(false);

  const getLoggedInStatus = async (): Promise<boolean> => {
    const _loggedInResponse = await fetch("/api/am-i-logged-in");
    const loggedInResponse = await _loggedInResponse.json();
    return loggedInResponse.loggedIn;
  };

  const setLoggedInState = async () => {
    const loggedInStatus = await getLoggedInStatus();
    setloggedIn(loggedInStatus);
    setLoading(false);
  };

  useEffect(() => {
    setLoggedInState();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const signIn = async () => {
    await fetch("/api/sign-in");
  };

  const signOut = async () => {
    await fetch("/api/sign-out");
  };

  const toggle = async () => {
    setLoading(true);
    const currentStatus = await getLoggedInStatus();

    if (currentStatus) {
      await signOut();
      setTimeout(setLoggedInState, 500);
    } else {
      await signIn();
      setTimeout(setLoggedInState, 500);
    }
  };

  return (
    <Button onClick={toggle}>
      {loading ? (
        <CircularProgress size="25px" />
      ) : (
        `Sign ${loggedIn ? "out" : "in"}`
      )}
    </Button>
  );
};

export default SignInButton;
