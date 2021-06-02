import React from "react";

export type userAddressType = {
    street?: string,
    suite?: string,
    city?: string,
    zipcode?: string,
    geo?: {
        lat: string,
        lng: string
    }
}

export type userCompanyType = {
    name?: string,
    catchPhrase?: string,
    bs?: string
}

export type userType = {
    id: number,
    name: string,
    username: string,
    email: string,
    address?: userAddressType,
    phone?: string,
    website: string,
    company: userCompanyType
}

export type userRequestResponse = {
    success: boolean,
    result: any
}