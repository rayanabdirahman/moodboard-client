import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import HomeScreen from "../components/screens/Home";
import SignInScreen from "../components/screens/SignIn";
import SignUpScreen from "../components/screens/SignUp";

const Home: NextPage = () => <SignInScreen />;

export default Home;
