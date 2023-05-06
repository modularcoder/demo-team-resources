import React from 'react'
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

import { api } from "~/_services/apiService";

const BaseHeader: React.FC = () => {

    return (
        <header className=' container mx-auto bg-slate-600 text-white p-2 '>
            Brand Name
        </header>
    )
}


export default BaseHeader;
