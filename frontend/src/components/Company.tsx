import React from "react";

interface companyInterface {
    details: {
        name: string;
        description: string;
    }
}

const Company = ({ details }: companyInterface) => {
    const { name, description } = details;
  return (
    <div>
        <h1>{ name }</h1>
        <p>{ description }</p>
    </div>
  )
}

export default Company